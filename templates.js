export const trim = string => props => string(props)
  .replace(/(\r\n|\n|\r)/gm, "")

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

const rect = ({ x, y, width, height }) => `
  <rect rx="3" ry="3" x="${x}" y="${y}" width="${width}" height="${height}" />
`
const use = ({ id, x, y }) => `
  <use href="#${id}" x="${x}" y="${y}" />
`
const path = ({ path, id }) => `
  <path id="${id}" d="${path}" />
`

const renderRefs = (groups) =>
  groups.reduce(
    (acc, group) => acc + group.positions.map(
      (position) => use({ ...group, ...position })
    ).join('')
  , '')

export const template = trim(({
  width,
  height,
  singles,
  groups
}) => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
  <rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip)" style='fill: url("#fill");'></rect>
  <defs>
    ${groups.map(path).join('')}
    <clipPath id="clip">
      ${renderRefs(groups)}
      ${singles.map(rect).join('')}
    </clipPath>
    ${animation}
  <defs>
</svg>
`)
