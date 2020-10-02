import toPath from 'element-to-path';
import { template } from './templates';

const generateID = () => Math.random().toString(36).substring(7);

const SELECTORS = {
  container: '[data-draw=\'container\']',
  group: '[data-draw=\'group\']',
  text: '[data-draw=\'text\']',
  rect: '[data-draw=\'rect\']',
  border: '[data-draw=\'border\']',
}

const defaultGroupIdentifier = (node) => node.dataset['draw-id'];

const defaultConfig = {
  container: SELECTORS.container,
  group: SELECTORS.group,
  text: SELECTORS.text,
  rect: SELECTORS.rect,
  border: SELECTORS.border,
  identifyGroup: defaultGroupIdentifier
}

const isHidden = node => !(node.offsetWidth || node.offsetHeight || node.getClientRects().length);

const getPosition = (node, containerRect) => {
  const nodeRect = node.getBoundingClientRect();
  return {
    left: nodeRect.left - containerRect.left,
    top: nodeRect.top - containerRect.top,
    width: nodeRect.width,
    height: nodeRect.height,
  }
}

const getElementHeight = (style) => {
  const boxSizing = style.getPropertyValue("box-sizing");
  const height = parseInt(style.getPropertyValue("height"));
  if (boxSizing !== 'border-box') return height;
  const paddingTop = parseInt(style.getPropertyValue("padding-top"));
  const paddingBottom = parseInt(style.getPropertyValue("padding-bottom"));
  const borderTop = parseInt(style.getPropertyValue("border-top-width"));
  const borderBottom = parseInt(style.getPropertyValue("border-bottom-width"));
  return height - paddingTop - paddingBottom - borderTop - borderBottom;
}

const getNodeStyles = (node) => window.getComputedStyle(node, null);

const countLines = (node) => {
  const style = getNodeStyles(node);
  const _fontSize = parseInt(style.getPropertyValue("font-size"));
  const _lineHeight = parseInt(style.getPropertyValue("line-height"));
  const lineHeight = isNaN(_lineHeight) ? _fontSize : _lineHeight
  const height = getElementHeight(style);
  const lines = (height < lineHeight * 2) ? 1 : Math.ceil(height / lineHeight);
  return {
    lines: !lines ? 1 : lines,
    lineHeight: lineHeight
  };
}

const getRange = (node, containerRect) => {
  const range = document.createRange();
  range.selectNodeContents(node);
  const rect = range.getBoundingClientRect();
  return {
    left: rect.left - containerRect.left,
    width: rect.width
  };
}

const elements = {
  text(node, containerRect) {
    if (isHidden(node)) return;
    const position = getPosition(node, containerRect);
    const { lines, lineHeight } = countLines(node);

    if (lines === 1) {
      const range = getRange(node, containerRect);
      position.left = range.left;
      position.width = range.width;
    }

    const { left, top, width, height } = position;

    return [...Array(lines).keys()].map((index) => ({
      x: left,
      y: !index ? top : top + (index * lineHeight) + (index * 5),
      height: height < lineHeight ? height : lineHeight,
      width,
    }))
  },

  rect(node, containerRect) {
    const position = getPosition(node, containerRect);
    const { left, top, width, height } = position;

    return [{
      x: left,
      y: top,
      width: width,
      height
    }]
  },
}

const walkThroughNodes = (type, nodes, parentRect) =>
  Array.from(nodes)
    .map((node) => elements[type](node, parentRect))
    .filter(i => !!i)
    .reduce((acc, item) => [...acc, ...item] ,[]);

const getGroup = (groupNodes, parentRect, config) => {
  const fistNode = groupNodes[0];
  const groupRect = getPosition(fistNode, parentRect);
  const textNodes = fistNode.querySelectorAll(config.text);
  const rectNodes = fistNode.querySelectorAll(config.rect);

  const groupElements = [
    ...walkThroughNodes('text', textNodes, parentRect),
    ...walkThroughNodes('rect', rectNodes, parentRect)
  ]

  const path = groupElements
    .map((attributes) => toPath({ type: 'element', name: 'rect', attributes }))
    .join(' ')

  const positions = groupNodes.map((node) => {
    // Set same size for groups
    node.style.height = groupNodes[0].offsetHeight + 'px';
    node.style.width = groupNodes[0].width + 'px';

    const { left,top } = getPosition(node, parentRect);
    return {
      x: left - groupRect.left,
      y: top - groupRect.top
    };
  });

  return {
    positions,
    path,
    id: generateID()
  }
}

const getPaths = (type, selector, container, groups) => {
  const parentRect = container.getBoundingClientRect();
  const nodes = Array
    .from(container.querySelectorAll(selector))
    .filter((node) =>
      !groups.find(group => Array.from(group.querySelectorAll(selector)).includes(node))
    );
  
  return walkThroughNodes(type, nodes, parentRect);
}

const getMainDrawing = (container, config) => {
  const containerRect = container.getBoundingClientRect();
  const groupNodes = Array.from(container.querySelectorAll(config.group));
  const groupsHash = groupNodes
    .reduce((acc, node) => {
      const id = config.identifyGroup(node);
      if (!acc[id]) return { ...acc, [id]: [node] };
      return { ...acc, [id]: [...acc[id], node ] };
    }, {});
  
  const groups = Object.keys(groupsHash).map(id => getGroup(groupsHash[id], containerRect, config));
  const singles = [
    ...getPaths('text', config.text, container, groupNodes),
    ...getPaths('rect', config.rect, container, groupNodes)
  ]

  const { width, height } = containerRect;
  return template({ width, height, singles, groups })
}

export default (_config) => {
  const config = { ...defaultConfig, ..._config };
  if (!document) return console.error('Function available only in browser environment!');

  const container = document.querySelectorAll(config.container);
  if (!container) return console.error('No containers was found on the page');

  const res = Array
    .from(container)
    .map(c => getMainDrawing(c, config));

  return res;
}
