//함수
//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수 결과를 볼 수 없다!
//1. 생성 : function 함수명(매개변수명){재사용함수문법}
//2. 호출 : 함수명()
function func1(str){//접속 회원에 맞춤형 인사 함수생성
    console.log(`${str}님 어서오세요!`)
}//생성함수 end
func1('홍길동')
func1('abc1234') //호출
//-----------------------------------------------------
//함수 기능 : 리턴 (return) 함수 결과값 외부로 반환 명령
function func2 (a){
    return a+1 //리턴을 활용해서  결과값만 외부로 반환
}
func2(50)//함수결과값을 출력하는 메서드가 없어 출력x
console.log(func2(50)) //함수결과를 호출 앞 메서드가 출력o
// window.alert(func2(100))
document.write(func2(10))
//-------------------------------------------------------
function func3(a,b){
    return a*b //함수 내 return 1개만 존재
}
console.log(func3(10,20))
//무조건 두자리 수 곱하기 100

//--------------------------------------------------------
let total = 0
function func4(a){
    total = a
    total++ //리턴 앞에 있어서 인식이 가능하다.
    return total
    total++ //리턴 뒤에 있는 js라인은 읽히지 않아서 실행하지 못한다.
}
console.log(func4(10))
//-------------------------------------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 //30
    num2 = a+b //6
    num1 += num2 //36
    return num1 //36
}
console.log(func5(2,4)) //함수호출
//------------------------------------
const txtInput =  document.querySelectorAll('.box .txt')
console.log (txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0], 'yellow')//노랑
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1], 'blue') //파랑
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2],'pink') //분홍
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target,color){
    return target.style.backgroundColor = color
    
}
//----------------------------------------
//관심상품,알림설정 이미지에 마우스를 올렸을 대
// off -> on 이미지 변경
// 마우스를 나갓을 때 on -> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg,ideaImg)
likeImg.addEventListener('mouseover',function(){
    // console.log('over') //이벤트정상확인
    onoff(likeImg, 'heart','on')
})
likeImg.addEventListener('mouseout',function(){
    // console.log('out') //정상 확인
    onoff(likeImg, 'heart','off')
})
ideaImg.addEventListener('mouseover',function(){
    // console.log('over') //이벤트정상확인
    onoff(ideaImg,'idea','on')
})
ideaImg.addEventListener('mouseout',function(){
    // console.log('out') //정상 확인
    onoff(ideaImg,'idea','off')
})
function onoff(target,name,status){
    return target.src = `./image/${name}_${status}.png`
}