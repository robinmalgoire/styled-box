# styled-box

Yet another box using React and Styled-component that aims to reinvent the wheel.

## Intend

The intend behind this styled-component is to quickly build proptotypes on a vertical grid without writing css.
Please, don't use in production (really).

## Quick Start

1 - Set a css variable named --line-height 
```css
import { injectGlobal } from 'styled-components';

injectGlobal`
  :root { --line-height: 2rem; }
`
```

2 - Import the magic box and add marginTop property
```javascript
import Box from '@rmalgoire/styled-box';

<Box marginTop={1}>I'm a box</Box>
```

3 - Here your export
```css
.bSYwGn {
  margin-top: calc(var(--line-height) * 1);
}
```
Okay, it's cool, but you will quickly realise that you need to write responsive css.

## Responsive object

1 - Inject a breakpoints object by using the ThemeProvider from styled-components
```javascript
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={{ breakpoints: { desktop: 500 } }}>
  <MyApp />
</ThemeProvider>
```

2 - When setting a value for your props, just match the breakpoints object
```javascript
<Box marginTop={{mobile: [1], desktop: [2]}}>
  I'm a box with responsive margin
</Box>
```

3 - Boom
```css
.bSYwGn {
  margin-top: calc(var(--line-height) * 1);
}

@media (min-width: 31.25em) {
  .bSYwGn {
    margin-top: calc(var(--line-height) * 2);
  }
}
```
Notes:
- The breakpoint value for desktop has been converted into "em".
- If you are using a key that does not exist in breakpoints object, no media query will be printed.

## Properties available

| prop | type | example | notes |
|------|------|---------|-------|
| `display` | string | `'flex'`, `'block'`, `'grid'`... | |
| `width` | number, string | `1`, `'100%'`, `'auto'`... | number will return a multiple of `--line-height` |
| `minWidth` | number, string | `1`, `'100%'`, `'auto'`... | number will return a multiple of `--line-height` |
| `maxWidth` | number, string | `1`, `'100%'`, `'auto'`... | number will return a multiple of `--line-height` |
| `height` | number, string | `1`, `'100%'`, `'auto'`... | number will return a multiple of `--line-height` |
| `minHeight` | number, string | `1`, `'100%'`, `'auto'`... | number will return a multiple of `--line-height` |
| `maxHeight` | number, string | `1`, `'100%'`, `'auto'`... | number will return a multiple of `--line-height` |
| `padding` | array* | `[1, null]`, `[1, 'auto', 1]`... | number will return a multiple of `--line-height`. null will not print anything |
| `paddingTop` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` |
| `paddingRight` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` |
| `paddingBottom` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` |
| `paddingLeft` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` ||
| `margin` | array* | `[1, null]`, `[1, 'auto', 1]`... | number will return a multiple of `--line-height`. null will not print anything |
| `marginTop` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` |
| `marginRight` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` |
| `marginBottom` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` ||
| `marginLeft` | number, string | `1`, `'20%'` | number will return a multiple of `--line-height` |
| `borderRadius` | array* | `[1, null]`, `[1, '50%', 1]`... | number will return a multiple of `--border-radius`. null will not print anything |
| `color` | string | `'primary'` | will refer to a css variable for consistency like `var(--${value})` |
| `textAlign` | string | `'center'`, `'left'` | |
| `flexDirection` | string | `'row'`, `'column'`... | |
| `flexWrap` | string | `'wrap'`, `'nowrap'`... | |
| `justifyContent` | string | `'flex-start'`, `'center'`... | |
| `alignItems` | string | `'flex-start'`, `'center'`... | |
| `alignContent` | string | `'flex-start'`, `'center'`... | |
| `gridTemplateAreas` | string | `'A C''B C'` | |
| `gridTemplateColumns` | string, number | `3`, `'1fr 2fr 1fr'` | number will return `repeat(${value}, 1fr)` |
| `gridTemplateRows` | string, number | `3`, `'1fr 2fr 1fr'` | number will return `repeat(${value}, 1fr)` |
| `gridArea` | string | `'A'`, `'header'` | |
| `gridColumn` | string | `'2 span'`, `'3 / span 2'` | |
| `gridRow` | string | `'2 span'`, `'3 / span 2'` | |
| `gridColumnGap` | number | `.25`, `1` | number will return a multiple of `--line-height` |
| `gridRowGap` | number | `.25`, `1` | number will return a multiple of `--line-height` |
| `gridGap` | number | `.25`, `1` | generate `grid-column-gap` and `grid-row-gap` with the same value |

*array  
Array are used to behave like shorthand properties. They can be from 1 to 4 entries: 
```javascript
<Box marginTop={[1, 'auto']} padding={[1, 1, 1, 2]} />
```
You certainly understand the idea at first sight.
However, styled-box do not render shorthand properties. It renders a deconstruct version of it:
- It's a good practice in css
- It will save you time

Example: 

```javascript
<Box padding={[1, 1, 1, 2]} />
<Box margin={[null, 'auto']} />
```
```css
.bSYwGn {
  padding-top: calc(var(--line-height) * 1);
  padding-right: calc(var(--line-height) * 1);
  padding-bottom: calc(var(--line-height) * 1);
  padding-left: calc(var(--line-height) * 2);
}
.eTGHnk {
  margin-right: auto;
  margin-left: auto;
}
```

## Colours

The current background colours solution is shameful. I recommend you to do not use it, as I am working on a refactoring.
But If you are still interested, you need to set these variables:

```css
:root {
  /* primary */
  --primary-600: #453C77;
  --primary-500: #5C509E;
  --primary-400: #7364C6;
  --primary-300: #8F83D1;
  --primary-200: #ABA2DD;

  /* secondary */
  --secondary-600: #994C45;
  --secondary-500: #CC655C;
  --secondary-400: #FF7E73;
  --secondary-300: #FF988F;
  --secondary-200: #FFB2AB;

  /* accent colours */
  --dark-600: #2C2932;
  --dark-500: #3A3743;
  --dark-400: #494554;
  --dark-300: #6D6A76;
  --dark-200: #928F98;

  --light-600: #939496;
  --light-500: #C4C5C8;
  --light-400: #F5F6FA;
  --light-300: #F7F8FB;
  --light-200: #F9FAFC;

  /* font colours */
  --font-light: #F7F8FB;
  --font-dark: #3A3743;
}
```
Then when using a variable, the font color will be set automatically.
Well it's currently hardcoded, so depending of your primary and secondary colours, it mays look weird.

```javascript
<Box background='primary-400' />
```
It will return:
```css
.bSYwGn {
  background-color: var(--primary-400);
  color: var(--font-light);
}
```

## White list on createComponent

As you understand, the main idea is to use props as a mix of inline/functional css. The issue is that React or Styled-component is printing a lot of these props into the final markup. I am not a big fan of it (I like my html to be neat). It mays not be a great idea, but I'm white listing the props when rendering the Box component. It means that only official html attribute or React attributes will go through. 
- pro: clean html for my OCD
- cons: may cause issue hahaha #yolo

## from 0.XX to 1.XX

Okay so the main change between 0.XX and 1.XX is that most properties are not using shortcut anymore.  
Here the props that have changed:
- `radius` => `borderRadius`
- `row` => `gridRow`
- `templates` => `gridTemplateAreas`
- `columnGap` => `gridColumnGap`
- `rowGap` => `gridRowGap`
- `columns` => `gridTemplateColumns`
- `column` => `gridColumn`