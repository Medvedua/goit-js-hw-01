function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    const sizeElement = content + padding * 2 + border * 2;
    return Number.parseFloat(sizeElement)
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
