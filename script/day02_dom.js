//dom == document object model
//자바스크립트 = 객체지향언어
//bom = browser object model 웹브라우저의 기본 객체
// let hello = 'hello js';
// window.alert(hello);
// let qa = window.prompt('1+1=?')
// window.alert('정답은 '+qa+'입니다.');
// let ox = window.confirm('자바스크립트는 객체지향언어다.')
// window.alert(ox);
// 객체. 속성
// 객체.메소드 ()
// 객체.속성.메소드()

//아이디 객체 변수 대입하기
//변수 선언키워드 변수명 대입연산자 대입객체 문법
const btn1 = document.getElementById('btn1')
// console.log(btn1);
btn1.style.color = 'red';
// const login =document.getElementById('login')
// console.log(login)
// const pay = document.getElementById('pay')
// console.log(pay)
const price = document.getElementById('price')
// console.log(price)

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first')
// console.log(li_first);
const li_second = document.getElementsByClassName('second')
// console.log(li_second);
const li_last = document.getElementsByClassName('last')[0]
// console.log(li_last,li_second,li_first);
// console.log(li_first[0])
// console.log(li_first[1])
//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header')
const h1 = document.getElementsByTagName('h1')
const nav = document.getElementsByTagName('nav')
const atag = document.getElementsByTagName('a')
console.log(header,h1,nav,atag)
console.log(atag[0]);
//innerHTML 속성 활용
//객체.속성 // 읽기
//객체. 속성 = 대입값 // 수정 or 삭제
console.log(header.innerHTML) //unfined
console.log(header[0].innerHTML) //첫번째 헤더를 잡고싶을 때
console.log(h1[0].innerHTML)
console.log(li_second[0].innerHTML)
console.log(li_first[0].innerHTML)
console.log(atag[0].innerHTML,nav[0].innerHTML)

h1[0].innerHTML = '로고';
btn1.innerHTML = '전송';
atag[2].innerHTML = '';

nav[0].style.backgroundColor = 'aqua';
nav[0].style.border = '2px solid black';
nav[0].style.border = '1px dashed red';
nav[0].style.transform = 'rotate(10deg)';
price.style.backgroundColor = 'pink';
price.style.background = 'linear-gradient(180deg,pink,blue)';
price.style.width = '100px'
price.style.height = '100px'
price.style.color = 'white'