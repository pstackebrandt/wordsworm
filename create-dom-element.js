// create-dom-element.js

'use strict';

/* Usage:
import createDOMElement from './createDOMElement.js';

let el = createDOMElement({content: 'Hello', type: 'p'});
*/

const createDOMElement = ({
    content = '',
    type = 'div',
    parent = ausgabe,
    classes = [],
    attr = {},
    listeners = {},
    styles = {},
    amEnde = true,
} = {}) => {
    let neu = document.createElement(type);
    if (content) neu.innerHTML = content;
    if (classes.length) neu.className = classes.join(' ');

    Object.entries(attr).forEach(el => neu.setAttribute(...el));
    Object.entries(listeners).forEach(el => neu.addEventListener(...el));
    Object.entries(styles).forEach(style => neu.style[style[0]] = style[1]);

    if (!amEnde)  parent.prepend(neu);
    else parent.append(neu);

    return neu;
}



export default createDOMElement;
