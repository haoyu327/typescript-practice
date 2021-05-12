//type some basic js to see the environment
var person = {
 nickName:'Amos'
}

let personName = person.nickName;

function abc(){
 return 'abc'
}

//let & const problem
const b = abc()
b = 'def'  //wrong, typescript will help you to check mention

let c =abc()
c = 'def'//right

//exercise 1
//分別用 for loop 以及 while 迴圈，印出 1 ~ 9
for(let i=0;i<10;i++){
 console.log(i)
}

let i = 0
while(i<10){
console.log(i)
i++
}

// 綜合練習二
// 請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n。
// 1
// 2
// ...
// n

let print = (n) => {
for(let i=0;i<n;i++){
 console.log(i+1)
}
}

// 綜合練習三
// 寫一個函式 star，接收一個參數 n，並印出 n 個 *
// star(1) 預期輸出：
// *
// star(5) 預期輸出：
// *****

//寫法1：用陣列再轉成字串
const star=(n) => {
  let arr = []
  for (i=1; i<=n; i++) {
    arr.push('*')
  }
  console.log(arr.join(''))  //join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
}

star(1)

//字串用陣列概念,以字串處理
const star=(n)=>{
 var str= ""
 for (i=1;i<=n;i++){
  str +="*"
 }
 console.log(str)
}
star(2)


// 綜合練習五
// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
// isUpperCase("abcd") 正確回傳值：false
// isUpperCase("Abcd") 正確回傳值：true
const isUpperCase=(str) => {
  var asciiCode = str[0].charCodeAt();
  console.log(asciiCode)
  if(asciiCode >= 97) {
    return('false');
  } else {
    return('true');
  }
}


console.log(isUpperCase("abcd"))
console.log(isUpperCase("Abcd"))
console.log(isUpperCase("ABCD"))
console.log(isUpperCase("aBCD"))


