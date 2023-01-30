/*
객체를 선언
value 에 데이터타입의 종류 string, number(2개 이상), boolean, null, undefined, Object, array, function

함수를 만듬
1. 객체의 value 의 데이터타입이
2. number 인 [key, value] 만 뽑아서
3. 새로운 객체를 return 
*/

const user = {
    name: "cho",
    age: 30,
    birth: 1993,
    married: false,
    baby: null,
    died: undefined,
    study: {
        javascript: "bad",
        java: "bad",
        swift: "bad",
    },
    hobby: ["computer", "baseball"],
    doing: function doing() {
        console.log("하는중");
    },
};
// [ [age, 30], [birth, 1993]]
function chep(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === "number") {
            acc[key] = value;
        }
        return acc;
    }, {});
};

console.log(chep(user));


// const getOnlyNumberObj = (obj) => {
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//       if (typeof value === "number") {
//         acc[key] = value;
//       } // 동적할당
//       return acc;
//     }, {});
//   };