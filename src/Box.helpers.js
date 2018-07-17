import * as boxProps from './Box.props';

export const isObject = (variable) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
}

export const intersectedKeys = (Object1, Object2) => {
  return Object.keys(Object1).filter(k => k in Object2)
}

export const intersectBoxKeys = (props) => intersectedKeys(props, boxProps);

export const intersectBoxProps = (props) => {
  const intersectedBoxProps = {};

  intersectedKeys(props, boxProps).map(key => {
    intersectedBoxProps[key] = props[key];
  });

  return intersectedBoxProps;
}

export const parseCSSArray = (arr) => {
  switch(arr.length) {
    case 1:
      return [arr[0],arr[0],arr[0],arr[0]];

    case 2:
      return [arr[0],arr[1],arr[0],arr[1]];

    case 3:
      return [arr[0],arr[1], arr[2],arr[1]];

    case 4:
      return arr;

    default: 
      return null;
  }
}

export const cleanHtmlAttribute = (originalProps) => {
  const whiteList = {
    'accept': ['form', 'input'],
    'accept-charset': ['form'],
    'action': ['form'],
    'alt': ['applet', 'area', 'img', 'input'],
    'async': ['script'],
    'autocomplete': ['form', 'input', 'textarea'],
    'autofocus': ['button', 'input', 'keygen', 'select', 'textarea'],
    'autoplay': ['audio', 'video'],
    'buffered': ['audio', 'video'],
    'challenge': ['keygen'],
    'charset': ['meta', 'script'],
    'checked': ['command', 'input'],
    'cite': ['blockquote', 'del', 'ins', 'q'],
    'code': ['applet'],
    'codebase': ['applet'],
    'cols': ['textarea'],
    'colspan': ['td', 'th'],
    'content': ['meta'],
    'controls': ['audio', 'video'],
    'coords': ['area'],
    'crossorigin': ['audio', 'img', 'link', 'script', 'video'],
    'data': ['object'],
    'datetime': ['del', 'ins', 'time'],
    'default': ['track'],
    'defer': ['script'],
    'dirname': ['input', 'textarea'],
    'disabled': ['button', 'command', 'fieldset', 'input', 'keygen', 'optgroup', 'option', 'select', 'textarea'],
    'download': ['a', 'area'],
    'enctype': ['form'],
    'for': ['label', 'output'],
    'form': ['button', 'fieldset', 'input', 'keygen', 'label', 'meter', 'object', 'output', 'progress', 'select', 'textarea'],
    'formaction': ['input', 'button'],
    'headers': ['td', 'th'],
    'high': ['meter'],
    'href': ['a', 'area', 'base', 'link'],
    'hreflang': ['a', 'area', 'link'],
    'http-equiv': ['meta'],
    'icon': ['command'],
    'integrity': ['link', 'script'],
    'ismap': ['img'],
    'keytype': ['keygen'],
    'kind': ['track'],
    'label': ['track'],
    'language': ['script'],
    'list': ['input'],
    'loop': ['audio', 'bgsound', 'marquee', 'video'],
    'low': ['meter'],
    'manifest': ['html'],
    'max': ['input', 'meter', 'progress'],
    'maxlength': ['input', 'textarea'],
    'minlength': ['input', 'textarea'],
    'media': ['a', 'area', 'link', 'source', 'style'],
    'method': ['form'],
    'min': ['input', 'meter'],
    'multiple': ['input', 'select'],
    'muted': ['audio', 'video'],
    'name': ['button', 'form', 'fieldset', 'iframe', 'input', 'keygen', 'object', 'output', 'select', 'textarea', 'map', 'meta', 'param'],
    'novalidate': ['form'],
    'open': ['details'],
    'optimum': ['meter'],
    'pattern': ['input'],
    'ping': ['a', 'area'],
    'placeholder': ['input', 'textarea'],
    'played': ['audio', 'video'],
    'poster': ['video'],
    'preload': ['audio', 'video'],
    'radiogroup': ['command'],
    'readonly': ['input', 'textarea'],
    'rel': ['a', 'area', 'link'],
    'required': ['input', 'select', 'textarea'],
    'reversed': ['ol'],
    'rows': ['textarea'],
    'rowspan': ['td', 'th'],
    'sandbox': ['iframe'],
    'scope': ['th'],
    'scoped': ['style'],
    'selected': ['option'],
    'shape': ['a', 'area'],
    'size': ['input', 'select'],
    'sizes': ['link', 'img', 'source'],
    'span': ['col', 'colgroup'],
    'src': ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
    'srcdoc': ['iframe'],
    'srclang': ['track'],
    'srcset': ['img'],
    'start': ['ol'],
    'step': ['input'],
    'summary': ['table'],
    'target': ['a', 'area', 'base', 'form'],
    'type': ['button', 'input', 'command', 'embed', 'object', 'script', 'source', 'style', 'menu'],
    'usemap': ['img', 'input', 'object'],
    'value': ['button', 'option', 'input', 'li', 'meter', 'progress', 'param'],
    'wrap': ['textarea'],
    'accesskey': '*',
    'autocapitalize': '*',
    'contenteditable': '*',
    'contextmenu': '*',
    'dir': '*',
    'draggable': '*',
    'dropzone': '*',
    'hidden': '*',
    'id': '*',
    'itemprop': '*',
    'lang': '*',
    'slot': '*',
    'spellcheck': '*',
    'title': '*',
    'translate': '*',
    'tabindex': '*',
    'className': '*',
    'children': '*',
  };

  const cleanAttributes = {};

  intersectedKeys(originalProps, whiteList).map(key => {
    if (key === 'children'
       || key.startsWith('data')
       || key.startsWith('aria')
       || whiteList[key] === '*'
       || whiteList[key].includes(originalProps.as)) {
      cleanAttributes[key] = originalProps[key];
    }
  });

  return cleanAttributes;
}