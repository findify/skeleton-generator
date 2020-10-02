# skeleton-generator
Automatically generates beautiful SVG content loader with animations
<img src="https://raw.githubusercontent.com/findify/skeleton-generator/master/skeleton-generator.jpg" alt="Content loader" align="center" />

## Browser

```javascript
(() => {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/findify/skeleton-generator@master/dist/skeleton-generator.umd.js';
  document.head.appendChild(script);
  script.onload = function() {
    console.log( // Array of SVG's
      generatePlaceholder({
        // props
      })
    )
  };
})()
```

## Node/Yarn

```bash
yarn add @findify/skeleton-generator
```

```javascript
import generatePlaceholder from '@findify/skeleton-generator';

const placeholders = generatePlaceholder();
```

## About
This library is similar to [react-content-loader](https://github.com/danilowoz/react-content-loader) but generates paths based on actual DOM. It works perfectly with frameworks where you have specific CSS selectors for text, images and other blocks.
Also, this script allows you to reduce size of svg by using `group` for repeating components, where sample of groups is its first member

## Properties
| Prop Name | Default | Description |
|-----------|---------|-------------|
| `container` | `[data-draw=\'container\']` | Container selector, viewbox for svg. All sizes and elements position will be calculated relative to this container. The generator returns array of SVG strings for each container on the page |
| `group` | `[data-draw=\'group\']` | Repeating items could be combined in group to reduce size of SVG. The sample of group is its first representative |
| `text` | `[data-draw=\'text\']` | Text nodes selector calculates number of lines and its width |
| `rect` | `[data-draw=\'rect\']` | Simple rect node - could be any element, generator will calculate its width and height |
| `border` | `[data-draw=\'border\']` | Not yet implemented :(
| `identifyGroup` | `n => node.dataset['draw-id']` | Function to identify what group the element is belong to. Provides DOMNode and await for unique for group string ID | 


## Development 

```bash
yarn # Install dependencies
yarn build # Build library
yarn dev # Run dev server

```

## License (MIT)
