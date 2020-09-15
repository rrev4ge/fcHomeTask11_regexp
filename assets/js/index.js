const str1 = "azza aca aea abba adca abea"
const regexp1 =/a.{2}a/g;
console.log(str1.match(regexp1));

const str2 = "azza acxca azxza wwxwwa";
const regexp2 = /\ba\w+a\b/g;
console.log(str2.replace(regexp2, '!'));
