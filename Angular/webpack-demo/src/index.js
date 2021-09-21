import _ from 'lodash';

function component(params) {
    const element = document.createElement('div');

    
    element.innerHTML=_.join(['hello', 'webpack'],'');
    return element;

}

document.body.appendChild(component());