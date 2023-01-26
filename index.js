/*
1. array 선언 [1 ~ 100]
for문, push 사용 ✅

2. 짝수만 걸러서 출력
filter 사용 ✅

3. 26의 인덱스값 뽑아보기
findIndex 사용 ✅

4. 마지막에 200을 추가
push 사용 ✅
*/







let arr = [];
for (let i = 1; i < 101; i++) {
    arr.push(i)
}
let result = arr.filter(number => number % 2 === 0);
let find = arr.findIndex(number => number === 26);
arr.push(200);

console.log(arr);
console.log(find);
console.log(result);

