# styled-box
Yet another box using React and Styled-component that aims to solve all your troubles in life. If you are looking to build quickly throught the pain of a vertical grid, you may have found something useful.

### Prerequisites
React.
You do not really need Styled-component, but maybe you should have a look to it. 

### Requirements
So here are the annoying part of this component.
You need to declare a bunch of CSS variables:
```css
--line-height: 2rem;

--primary-600: #453C77;
--primary-500: #5C509E;
--primary-400: #7364C6;
--primary-300: #8F83D1;
--primary-200: #ABA2DD;

--secondary-600: #994C45;
--secondary-500: #CC655C;
--secondary-400: #FF7E73;
--secondary-300: #FF988F;
--secondary-200: #FFB2AB;

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

--font-light: #F7F8FB;
--font-dark: #3A3743;

--border-width: 2px;
--border-color: currentColor;
--border-radius: 3px;
```
(These are my current values, do whatever you want)

And you also need to inject a breakpoints object with the ThemeProvider
```javascript
{
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  }
}
```

### How does it work
Okay, now that you have a base line-height a some colours, here what you can do:

##### Padding and Margin
Padding and Margin are using an array from 1 to 4 entries. An entry can be:
- an `integer` that will represent one unit of the line-height
- a string `auto`
- `null`, if you do not want to print that properties

```javascript
<Box padding={[1]} />
// translate to:
//   padding-top: calc( 1 * var(--line-height));
//   padding-right: calc( 1 * var(--line-height));
//   padding-bottom: calc( 1 * var(--line-height));
//   padding-left: calc( 1 * var(--line-height));

<Box padding={[1, 2, 3, 4]} />
// translate to:
//   padding-top: calc( 1 * var(--line-height));
//   padding-right: calc( 2 * var(--line-height));
//   padding-bottom: calc( 3 * var(--line-height));
//   padding-left: calc( 4 * var(--line-height));

<Box margin={[null, auto]} />
// translate to:
//   margin-left: auto;
//   margin-right: auto;
```

But wait, there is more.
You can ALSO use the breakpoint object to map your values:

```javascript
<Box padding={{
 xs: [1],
 md: [1.5],
 lg: [2]
}} />
// I'm too lazy to print the whole css of it, but you get the idea
```

Awesome, now that you got the main idea, here some other props:

```javascript
<Box border={[true]} />
<Box border={[1, null]} />
```
Return a fake border using box-shadow so it does not create issue with the vertical rythym
Note that border-color is set to currentColor
You can use an array from 1 to 4 entries where:
- `true` or `1` print a border
- `false` or `null`, if you do not want to print that properties

```javascript
<Box radius={[1, '50%']} />
```
You can use an array from 1 to 4 entries where:
- an `integer` that will represent one unit of the line-height
- a string `50%` to print a percentage
- `null`, if you do not want to print that properties

```javascript
<Box color='primary-400' />
<Box background='primary-400' />
<Box textAlign='center' />
```
Pretty straigh forward to use