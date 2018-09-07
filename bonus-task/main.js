

const checkColor = index => {
    if(index >= 0 && index <= 5) {
        return 'green';
    } else if(index >= 6 && index <= 10) {
        return 'yellow'
    } else if(index > 10) {
        return 'red';
    } else {
        return null;
    }
};
const createBarElement = index => {
    let element = document.createElement('li');
    element.style.background = checkColor(index);
    element.style.color = 'transparent';
    element.style.border = '1px solid #000';
    element.style.height = index * 20 + 'px';
    return element;
}
const createBarList = arr => {
    let wrap = document.createDocumentFragment();
    arr.forEach(item => {
        let element = createBarElement(item);
        wrap.appendChild(element)
    })
    return wrap;
}
( () => {
    const arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]
    const list = createBarList(arr);
    let wrap = document.querySelector('.axes');
    wrap.appendChild(list)
})()