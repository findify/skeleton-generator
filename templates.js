export const trim = string => props => string(props)
  .replace(/(\r\n|\n|\r)/gm, "")
  .replace(/ +(?= )/g,'')

export const animation = `
  <linearGradient id="fill">
    <stop
      offset="0.599964"
      stop-color="#f3f3f3"
      stop-opacity="1"
    >
      <animate
        attributeName="offset"
        values="-2; -2; 1"
        keyTimes="0; 0.25; 1"
        dur="2s"
        repeatCount="indefinite"
      ></animate>
    </stop>
    <stop
      offset="1.59996"
      stop-color="#ecebeb"
      stop-opacity="1"
    >
      <animate
        attributeName="offset"
        values="-1; -1; 2"
        keyTimes="0; 0.25; 1"
        dur="2s"
        repeatCount="indefinite"
      ></animate>
    </stop>
    <stop
      offset="2.59996"
      stop-color="#f3f3f3"
      stop-opacity="1"
    >
      <animate
        attributeName="offset"
        values="0; 0; 3"
        keyTimes="0; 0.25; 1"
        dur="2s"
        repeatCount="indefinite"
      ></animate>
    </stop>
  </linearGradient>
`

const render = {
  rect({ x, y, width, height }) {
    return ` <rect rx="3" ry="3" x="${x}" y="${y}" width="${width}" height="${height}" />`
  },
  use({ id, x, y }) {
    return `<use href="#${id}" x="${x}" y="${y}" />`
  },
  path({ path, id }) {
    return `<path id="${id}" d="${path}" />`
  },
  circle({ r, cx, cy }) {
    return `<circle r="${r}" cx="${cx}" cy="${cy}" />`
  }
}

const renderRefs = (groups) =>
  groups.reduce(
    (acc, group) => acc + group.positions.map(
      (position) => render.use({ ...group, ...position })
    ).join('')
  , '')

const renderSingleElement = ({ type, ...props }) => render[type](props);

export const template = trim(({
  width,
  height,
  singles,
  groups
}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
  <rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip)" style='fill: url("#fill");' />
  <defs>
    ${groups.map(render.path).join('')}
    <clipPath id="clip">
      ${renderRefs(groups)}
      ${singles.map(renderSingleElement).join('')}
    </clipPath>
    ${animation}
  </defs>
</svg>
`)
