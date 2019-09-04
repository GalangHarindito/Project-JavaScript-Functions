// Project JavaScript Functions

function balikString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(balikString("hello world"));
console.log(balikString("KUD Kegelapan"));
console.log(balikString("Hai Suparman"));

const triangle = function(number) {
  let star = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j < i + 1; j++) {
      star += j;
    }
    if (i < number) {
      star += "\n";
    }
  }
  return star;
};

console.log(triangle(5));
console.log(triangle(10));
console.log(triangle(15));
console.log(triangle(20));

const changeChar = (string, character, character2) => {
  let newString = "";
  let flag = false;

  for (let i = 0; i < string.length; i++) {
    flag = false;
    if (string[i] === character) {
      newString += character2;
      flag = true;
    }
    if (flag === false) {
      newString += string[i];
    }
  }
  return newString;
};

console.log(changeChar("Slayer,Raining Blood", ",", " - "));
console.log(changeChar("Lamb of God & Sacrament", "&", " Album : "));
console.log(changeChar("BURTAN,Pacul Pusaka Dari Pak Kades", ",", " Song : "));



