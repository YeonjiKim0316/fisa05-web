// 8. Object(객체) 
// -1. 배열(Array)
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작
//   - 배열의 길이는 .length 라는 속성으로 확인
var array1 = [1, '가', NaN, true, [1,2,3], null, undefined]
typeof(array1) // 'object'

var dict1 = {'가': [1,3,4,null]}
typeof(dict1) // object

// 실습: array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.
var array1 = ['apple', 'banana', 'carrot']
typeof array1
console.log(array1[10]) // 0부터 순서가 시작된다. undefined
// push(), pop(): 맨 뒤에 값을 추가/삭제 / unshift(), shift() : 맨 앞에 값을 추가, 삭제  
// donut, able 
array1.push('donut') // 4 : 원소의 개수 리턴 
array1.pop() // 'donut' : 뺀 값을 리턴 
array1

array1.unshift('able')
array1
array1.shift()
array1

// splice라는 명령어로 중간에 값을 삽입, 수정, 삭제 
// 맨 뒤에 donut을 추가해주시고, banana 뒤에 bee를 삽입해주세요.  
// array1.splice(시작위치[, 삭제할원소개수[, 추가할데이터1,2,3,..])
array1.splice(3, 0, 'donut')
array1.splice(2, 2, 'bee', 'betray')
array1[3] = 'carrot' // 방 번호로 해당 원소에 접근해서 값을 수정하는 것도 가능합니다.
array1

// JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요? 
typeof(NaN) // number
var array2 = [-565, -3, 556, 1.3, NaN, undefined, null, 0, true]
array2.sort(function compareNumbers(a, b) {
  return a - b;
})

array2.length // 배열의 길이를 확인하는 속성 


// -2. Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])
var array3 = [1,3,4,5,6,6] // new Array(1,3,4,5,6,6)
array3
var set1 = new Set([1,3,4,5,6,6])
set1.add(6)
set1 // 이미 있는 값이라서 추가 안 됨 
set1.delete(10)
console.log(set1[3]) // set은 방번호로 부를 수 없음 undefined 
typeof(set1) // 'object'

// -3. Object(일반 객체) - key(기본 자료형)로 value를 부르는 종류의 dictionary 타입
//   - key는 기본자료형만 사용 가능합니다. (object, array, function은 불가)
//   - key는 중복될 수 없습니다. (중복된 key로 삽입하면 나중에 삽입한 값으로 덮어씌워집니다.)
//   - key의 순서는 보장되지 않습니다. (입력한 순서대로 출력되지 않습니다.)
//   - key 중심으로 움직입니다. value로 key를 찾을 수 없습니다.
//   - key의 자료형은 string, number, boolean, null, undefined, symbol이 가능합니다.
//   - value는 모든 자료형이 가능합니다. (기본자료형, 참조자료형 모두 가능)

var dict1 = {'가':'가위', '나':'나비', '다':'다람쥐', 1:1010, true:{1:'가'}}

dict1['가']
dict1[1]
dict1[true]
dict1['true'] // 내부적으로 key는 모두 문자열로 관리됩니다.
// key 중심으로 움직입니다.
dict1['가'] = '가랑이' // 있는 key 는 value가 변경 
dict1['라'] = '라디오' // 없는 key 는 value가 삽입 
delete dict1['라'] // true 
'라' in dict1 // '가'라는 key를 true/false로 유무 리턴
'가랑이' in dict1 // value로는 탐색 불가 

Object.keys(dict1) // key만 확인 가능 
Object.values(dict1) // value만 확인 가능 
Object.entries(dict1) // [[key, value], [key, value]]
Object.keys(dict1).length // dict 안에 있는 key-value의 개수를 확인 



/* -4. Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
    - 키로 모든 데이터 타입을 받아줍니다. 
    - 삽입 순서대로 요소를 반복할 수 있습니다.
    - size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
    - set() get()으로 삽입, 조회를 할 수 있습니다.
    - 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
*/

var map1 = new Map()
map1.set('가', '가위')
map1.set('나', '나비')
map1.set({'x':1, '123') // key로 dict를 삽입 
map1.set(true, {1:'가'})
console.log(map1.get(true)) // 자료형을 그대로 key에 저장하기 때문에

    // {'가':'가위', '나':'나비', '다':'다람쥐', 1:1010, true:{1:'가'}}
    // {'가':'가위', '나':'나비', '다':'다람쥐', 1:1010, true:{1:'가'}}


/*
9. 반복문: for/while
-1. for (초기값; 조건; 증감식) {
  반복되어야 할 실행문
}
*/
for (var i = 0; i < 3; i++) {
  console.log(i)
}
console.log('---------------------------')
for (var i = 1; i <= 3; ) {
  console.log(++i)
}

console.log('---------------------------')
// 실습: 5, 3, 1이 출력되도록 변경
for (var i = 5; i >= 1; i-=2) {
  console.log(i)
}

console.log('---------------------------')
// 배열의 길이는 .length 라는 속성으로 확인
var arr = [1, '가', 2, '나']
for (var i =0; i < arr.length; i++) {
  console.log(arr[i]+'이/가 들어있습니다')
}

console.log('---------------------------')
// -2. while문 - 반복할 횟수가 정해지지 않았을 때
// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
// 2. 무한반복으로 작성하고 break, continue로 강제로 흐름을 제어

// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
var i =0

// arr 와 .length 속성을 이용해서 arr의 모든 원소를 출력하는 while문을 만들어보세요.
while ( i < arr.length) {
   console.log(arr[i]+'이/가 들어있습니다')
   i++
}

// forEach (인덱스를 경유하지 않고 바로 값만 출력하는 메서드)
arr
arr.forEach(function test(a) {
  console.log(a+'이/가 들어있습니다')
})

// for ... of : 인덱스를 경유하지 않고 각 원소에 접근해서 특정 동작을 수행합니다.
console.log('---------------------------')
for (var a of arr){
   console.log(a+'이/가 들어있습니다')  
}

/* 10. 함수 : 코드를 재사용하기 위해 씁니다.
- 1. 기본형
  function 함수명(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나    
}

- 2. 익명함수: lambda처럼 쓰고 버리는 걸 기본으로 합니다.
- var 함수명 = function(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나
}

-3. 화살표함수: (a) => { a를 변경시킬 동작(실행문) }
*/

function hello(name) {
  return `${name}아, 안녕!`
}

hello('짱구')
hello() // undefined


var hello2 = function (name) {
  return `${name}아, 안녕!`
}

hello2('짱아')

console.log('-------------------------------')

var arr = ['짱구', '짱아', '훈이']
// arr.forEach(function test(a) {
//   console.log(`${a[0]}가 key ${a[1]}가 value입니다`)
// })

var hello3 = (name) => {
  console.log(`${name}아, 안녕!`)
}

arr.forEach(hello3)

hello2('짱아')

console.log('-------------------------------')

var arr = ['짱구', '짱아', '훈이']
// arr.forEach(function test(a) {
//   console.log(`${a[0]}가 key ${a[1]}가 value입니다`)
// })

var hello3 = (name) => {
  console.log(`${name}아, 안녕!`)
}

arr.forEach(hello3)
console.log('---------------3----------------')
// forEach 문은 각 요소에 같은 값을 '적용'하는 메서드 
// map = 배열의 각 요소를 돌면서 적용한 값을 다시 리턴받아야 하는 경우가 많습니다. 
arr.map((name) => {
   return `${name}아, 안녕!`
})

arr // 원본은 변경되지 않은 상태로 유지 

// 디폴트파라미터를 함수 선언시 작성할 수 있습니다.
function hello(name='무명', age=0) {
  return `${name}아, 안녕! 너 ${age}살이네?`
}

hello()


function hello(name='무명', age=0) {
  return `${name}아, 안녕! 너 ${age}살이네?`
}

function hello_({name='무명', age=0}) {
  return `${name}아, 안녕! 너 ${age}살이네?`
}

hello_({'age':13, 'name':'무명'})

//         변수를 선언하는 방법 : 
//     1) var : 함수 단위(스코프)에서 사용이 됨.(블록스코프는 무시)
//                 변수를 새로 만들고 값을 새로 쓸 수 있음.
//     2) let: 블록 단위에서 사용이 됨. { } 
//                 같은 블록 안에서 변수를 중복해 만들 수는 없지만 값은 바꿀 수 있음.
//     3) const : 블록 단위에서 사용이 됨. { } 
//                 한번 값을 넣으면 바꿀 수 없음. 그러나 객체 내부의 속성 등은 수정 가능


// scope : 변수에 접근할 수 있는 위치를 제어 
var x = '가'; // 함수 범위
let y = '나'; // 블록 범위
const z = '다'; // 블록 범위, 상수 (값 변경 불가)

console.log(x, y, z)

variableExample() // 만들기 전에 호출해도 제대로 동작 

function variableExample() {
    var x = 10; // 함수 범위
    let y = 20; // 블록 범위
    const z = 30; // 블록 범위, 상수 (값 변경 불가)

    if (true) {
        var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
        let y = 50; // 블록 내에서만 유효
        const z = 60; // 블록 내에서만 유효

        console.log('if문 내부:', x, y, z); // 40, 50, 60
    }

    console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
}

variableExample()
console.log(x, y, z)

// import timezone 
// hello()
// def hello():
//    print('안녕')

// console.log(hoist2) // 없는 변수라서 ReferenceError: hoist2 is not defined
console.log(hoist1) // undefined - 선언만 끌어올려지고 값을 올라가지 않아서 
var hoist1 = '가나다'


// 익명함수는 쓰고 버리기 위해서 만들어진 함수: 선언만 되고 값은 끌어올려지지 않은 상태이기 때문에 함수임에도 호이스팅된 것처럼 동작하지 않고 변수로서 인식됩니다.
console.log(variableExample2) // TypeError: variableExample2 is not a function

var variableExample2 = function () {
    var x = 10; // 함수 범위
    let y = 20; // 블록 범위
    const z = 30; // 블록 범위, 상수 (값 변경 불가)

    if (true) {
        var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
        let y = 50; // 블록 내에서만 유효
        const z = 60; // 블록 내에서만 유효

        console.log('if문 내부:', x, y, z); // 40, 50, 60
    }

    console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
}

variableExample2()




/* 11.  클래스: 같은 형식으로 사용하기 위한 자료형을 미리 만들어놓고 계속 객체를 찍어서 재사용 
 - 실제로는 function 으로 만들어집니다.
 - sugar coated 문법: 다른 언어와 호환되다 보니까 class 클래스명으로 만들면 내부적으로 코드를 변환해서 동작시켜줍니다. 
*/

// Person이라는 주제 단위로 자료(속성, attribute)와 동작(메서드, 함수) 함께 관리하기 위한 객체지향프로그래밍의 방법 
function Person(name, age) {
  this.name = name; // this => 새로 만들어진 객체의 메모리 주소 
  this.age = age;
}
Person.prototype.greet = function () {
    console.log('안녕하세요!' + this.name)
  }


김연지 = new Person('연지', 30)
김연지.name
김연지.age // 속성 
김연지.greet() // 메서드 


// static: 클래스를 통해 접근하는 클래스 변수, 클래스 메서드
// 인스턴스를 통해 접근하는 인스턴스 변수(this로 전달), 인스턴스 메서드
// 은닉성 구현: #을 붙인 private 변수를 사용하여 외부에서 접근하지 못하도록 숨길 수 있습니다.
class Person2 {
  
  // __init__ 과 같은 생성자 메서드 - 인스턴스 변수를 선언할 수 있게 됩니다
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
김연지 = new Person2('연지', 30)
