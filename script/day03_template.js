// 자바스크립트 = 객체지향언어
// 객체구분 > 변수생성 >변수활용 속성, 이벤트, 메소드
//---------------------------------------getElement 객체 방법
const ulWrap = document.getElementById('wrap')
const liTag = document.getElementsByTagName('li')
const aTag = document.getElementsByTagName('a')
//---------------------------------------querySelector 객체방법
const ulWrapQ = document.querySelector('#wrap') 
const liTagQ = document.querySelectorAll('#wrap li')
const aTagQ = document.querySelectorAll('#wrap li a')
// const aTagQ1 = document.querySelectorAll('#wrap a:nth:-child(1)')
//----------------------------------------변수 정상출력확인
console.log ();
//--------------------------------------------
console.log('--------------------------------')
console.log ('li태그 변수 값은 '+liTagQ[0]+'입니다.')
console.log('1+1='+(1+1));
console.log('7x4='+(7*4));
console.log(`1+1=${1+1}`);
console.log(`7x4=${7*4}`);
console.log(`li태그 변수 값은 ${liTagQ[0]}입니다`);