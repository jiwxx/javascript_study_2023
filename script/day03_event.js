//1. 변수생성
const btn2 = document.querySelector('#button2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const input_id = document.querySelector ('#user_id')
console.log (input_id); //정상확인
//2.이벤트 작성
//btn3 클릭했을 때 경고창 띄우기
//객체.이벤트리스너('이벤트 종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error');});
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua';});
//btn4(변수).addEventListener('mouseover(이벤트)',function(실행),(){결과})

btn5.addEventListener('click',function(){
    btn4.style.transform = 'skew(10deg)';
    btn3.style.backgroundColor = 'blue';
    btn2.innerHTML = 'dd';
});
input_id.addEventListener('focus',function(){this.style.backgroundColor = 'lime'})
input_id.addEventListener('blur',function(){this.style.backgroundColor = 'skyblue'})
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});

