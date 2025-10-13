// https://runjs.app/play

/*
여러
줄
주석
*/


// 한 줄 주석
// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.

/* 
1. 변수 
선언과 할당으로 변수를 만들 수 있습니다. 
- var: variable(변수) 언제든지 재선언, 재할당이 가능합니다.
- let: 선언은 한번만, 값은 얼마든지 재할당 가능 
- const: 선언도 한번만, (기본자료형) 값도 한번만 할당 가능  
*/
let a = 1;
a
a = 2;


// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙
- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.*/


/*
3. 자료형 
- 기본자료형(primitive, 원시자료형), 참조자료형(reference, JS에서는 모두 object로 찍힘)  
  - number(숫자)
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값. 
  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식
*/
var num1 = 1.3
var num1 = -1.3
typeof(num1)

var str1 = "문자열 '작은따옴표'"
// str1 = '문자열2 "큰따옴표"'
// 파이썬의 f-string처럼 f'답: {1+1}' 
// js에서는 `답: ${1+1}` (백틱) 안에 작성합니다.
str1 = `답: ${1+1}`
typeof(str1)
str1

// -3. boolean - 소문자로 작성합니다: true / false
var bool1 = true
typeof(bool1)

// -4. null
var null1 = null
typeof(null1) // 'null'은 선언도 되고, null이 할당이 되어있는 상태. 'object'타입으로 간주됩니다. -> 자바스크립트의 초기 버그 
// null 여부를 js에서 확인할 때는 Boolean으로 형변환해서 false가 나오는지 여부로 null 타입을 체크합니다.
Boolean(null1) 

var undef1;
typeof(undef1) // 'undefined'는 선언은 되었으나 아직 할당이 되지 않은 상태를 의미합니다. 
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.

// JS의 형변환 함수는 Boolean() Number() String() 처럼 대문자로 시작하는 자료형명()을 함수처럼 사용합니다. 

// 문자열 -> 숫자로 형변환
String(num1)
// 숫자 -> 문자열로 형변환: 불가능한 경우 NaN 를 리턴 
Number(str1) // NaN - Not a Number 
var str2 = '-1.32'
Number(str2)
// Boolean으로 형변환 -> false : 0, false, 빈문자열, null, undefined, NaN / JS에서는 [], {} 처럼 비어있는 참조자료형들은 true를 리턴합니다. (파이썬과 차이가 있다.) 
Boolean(0)


var mathScore = prompt('수학점수: ');
var engScore = prompt('영어점수: ');;
var avgScore = (mathScore+engScore)/2;
console.log(avgScore)

/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

mathScore 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 

var mathScore = prompt('수학점수: ');
var engScore = prompt('영어점수: ');
var avgScore = (Number(mathScore)+Number(engScore))/2;
console.log(avgScore)

1. 기본적으로 웬만한 데이터는 string으로 받습니다. 
2. 형변환이 자동으로 되는 언어이기 때문에 자료형에 따라 의도치 않은 결과가 나오기도 합니다.
3. 형변환 해주고, 연산을 해주면 됩니다.
 */ 
var mathScore = 90;
var engScore = 80;
(mathScore+engScore)/2 


/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/
var nums = 0;
nums++; // 가져다 쓸때는 0, 되돌려놓으면서 1을 더합니다. 후위연산자
nums++;
nums--;
nums;

var nums2 = 0;
++nums2; // 가져와서 쓰기 전에 1을 더해서 씁니다. 전위증가연산자 
--nums2;

/* 5. 비교연산자
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
*/
var str3 = '1'
var num3 = 1
var str4 = '1'
str3 == num3 // == : 항등연산자 true 
str3 === num3 // === : 자료형, 값이 모두 일치하지 않으므로 false
str3 == str4 // == : 항등연산자 true 
str3 === str4 // === : 자료형, 값이 모두 일치하지 않으므로 true

/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/
true && false // and - 둘 다 참이어야만 true 
true || false // or -  둘 중 하나만 참이면 true 
!true // not - 지금 상황과 반대

// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 
if (false) {
  console.log('참1일때 실행문')
} else if (false) {
  console.log('참2일때 실행문')
} else {
  console.log('참이 아닌 모든 경우')
}

/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
let date = new Date() // 현재 날짜와 시간 기준으로 생성
// date = new Date("2025/12/25"); // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
date.getFullYear();
date.getMonth()+1; // 월이 0부터 시작함 
date.getDate();
date.getDay(); // 0(일) ~ 6(토)
date.getHours(); // 0 ~ 23
date.getMinutes(); // 0 ~ 59

var hour = date.getHours(); // 0 ~ 23
var mins = date.getMinutes(); // 0 ~ 59

if (hour < 12) {
  console.log(`AM ${hour}시 ${mins}분`)
} else {
  console.log(`PM ${hour-12}시 ${mins}분`)
}

var hour = date.getHours(); // 0 ~ 23
var mins = date.getMinutes(); // 0 ~ 59

switch (hour < 12) {
  case (false):
    console.log(`PM ${hour-12}시 ${mins}분`)
    break;
  case (true):
    console.log(`AM ${hour}시 ${mins}분`)
    break;
}

switch (hour < 12) {
  case (true):
    console.log(`AM ${hour}시 ${mins}분`)
    break;
  default:
    console.log(`PM ${hour-12}시 ${mins}분`)
}


// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 
if (false) {
  console.log('참1일때 실행문')
} else if (false) {
  console.log('참2일때 실행문')
} else {
  console.log('참이 아닌 모든 경우')
}

/* swtich (명제) {
    case (1) : 조건 만족시 실행문
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/

/* 실습2: if ~ else if ~
          if ( || || ) 다중조건문 
/ switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */

var menu = '라면'
menu = '짬뽕'

if (menu == '짜장면') {
    console.log(`${menu}를 드시는군요.`)
  } else if  (menu == '짬뽕') {
    console.log(`${menu}를 드시는군요.`)
  } else if  (menu == '샐러드') {
    console.log(`${menu}를 드시는군요.`)
  } else {
      console.log(`그럼 뭐 드실래요?`)
  }

console.log('--------------')
if (menu == '짜장면' || menu == '짬뽕' || menu == '샐러드') {
    console.log(`${menu}를 드시는군요.`)
  } else {
      console.log(`그럼 뭐 드실래요?`)
  }

console.log('---- switch 단일값을 비교하기 위해 만들어진 문법 ----------')


var menu = '라면'
// menu = '짬뽕'


console.log('---- switch 단일값을 비교하기 위해 만들어진 문법 ----------')
switch (menu) {
  // case ('짜장면' || '짬뽕'|| '샐러드'): 
  case ('짜장면'):
  case ('짬뽕'):
  case ('샐러드'): 
    console.log(`${menu}를 드시는군요.`)
    break;
  default:
    console.log(`그럼 뭐 드실래요?`)
  }


