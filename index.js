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
  return {
    lines: (height < lineHeight * 2) ? 1 : Math.ceil(height / lineHeight),
    lineHeight: lineHeight
  };
}

const getRange = (node) => {
  const range = document.createRange();
  range.selectNode(node);
  return range.getClientRects();
}

const elements = {
  text(node, containerRect) {
    if (isHidden(node)) return;
    const position = getPosition(node, containerRect);
    const { lines, lineHeight } = countLines(node);

    if (lines === 1) {
      const rangeOffset = getRange(node);
      position.left = rangeOffset[1].x - 20;
      position.width = rangeOffset[1].width;
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
    const style = getNodeStyles(node);
    const paddingLeft = parseInt(style.getPropertyValue("padding-left"));
    const paddingRight = parseInt(style.getPropertyValue("padding-right"));
    const { left, top, width, height } = position;

    return [{
      x: left + paddingLeft,
      y: top,
      width: width + paddingRight,
      height
    }]
  },
}

const walkThroughNodes = (type, nodes, parentRect) =>
  Array.from(nodes)
    .map((node) => elements[type](node, parentRect))
    .filter(i => !!i)
    .reduce((acc, item) => [...acc, ...item] ,[]);

const getGroup = (groupNodes, config) => {
  const fistNode = groupNodes[0];
  const groupRect = fistNode.getBoundingClientRect();
  const textNodes = fistNode.querySelectorAll(config.text);
  const rectNodes = fistNode.querySelectorAll(config.rect);

  const groupElements = [
    ...walkThroughNodes('text', textNodes, groupRect),
    ...walkThroughNodes('rect', rectNodes, groupRect)
  ]

  const path = groupElements
    .map((attributes) => toPath({ type: 'element', name: 'rect', attributes }))
    .join(' ')

  const positions = groupNodes.map((node) => {
    const { x, y } = node.getBoundingClientRect();
    return { x, y };
  });

  return {
    positions,
    path,
    id: generateID()
  }
}

const getPaths = (type, selector, container, groups) => {
  const parentRect = container.getBoundingClientRect();
  const groupsArray = Array.from(groups);
  const nodes = Array
    .from(container.querySelectorAll(selector))
    .filter((node) =>
      !groups.find(group => Array.from(group.querySelectorAll(selector)).includes(node))
    );
  
  return walkThroughNodes(type, nodes, parentRect);
}

const getMainDrawing = (container, config) => {
  const { width, height } = container.getBoundingClientRect();
  const groupNodes = Array.from(container.querySelectorAll(config.group));
  const groupsHash = groupNodes
    .reduce((acc, node) => {
      const id = config.identifyGroup(node);
      if (!acc[id]) return { ...acc, [id]: [node] };
      return { ...acc, [id]: [...acc[id], node ] };
    }, {});
  
  const groups = Object.keys(groupsHash).map(id => getGroup(groupsHash[id], config));
  const singles = [
    ...getPaths('text', config.text, container, groupNodes),
    ...getPaths('rect', config.rect, container, groupNodes)
  ]

  return template({ width, height, singles, groups })
}

export default (_config) => {
  const config = { ...defaultConfig, ..._config };
  if (!document) return console.error('Function available only in browser environment!');

  const container = document.querySelectorAll(config.container);
  if (!container) return console.error('FNo containers was found on the page');

  const res = Array
    .from(container)
    .map(c => getMainDrawing(c, config));

  return res;
}
