//getElement... 방법
const mainTag = document.getElementsByTagName('main') [0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box')
const aTag = document.getElementsByTagName('a');
console.log(mainTag,hTag[0],contentsCls[0],boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2]);

//[ES6]quertSelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents')
const boxIdQ = document.querySelector('#box')
const aTagQ = document.querySelectorAll('a')
const alast = document.querySelector('.last')
const afirst = document.querySelector('first')
console.log(mainTagQ,hTagQ,boxIdQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTag[2]);
console.log('.first')
console.log('.last')