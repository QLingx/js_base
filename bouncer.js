// console.log(Boolean(0));        // false
// console.log(Boolean(-0));       // false
// console.log(Boolean('0'));      // true
// console.log(Boolean(false));    // false
// console.log(Boolean('false'));  // true
// console.log(Boolean(true));     // true
// console.log(Boolean('true'));   // true
// console.log(Boolean(null));     // false
// console.log(Boolean(NaN));      // false
// console.log(Boolean(undefined));// false
// console.log(Boolean(''));       // false
// console.log(Boolean(1));        // true
// console.log(Boolean(-1));       // true
// console.log(Boolean(3));        // true
// console.log(Boolean("w3cplus"));// true

function bouncer(argument) {
	function isFalsy(arg){
		return Boolean(arg);
	}
	return argument.filter(isFalsy)
}

var mishMash = [4, "cookies", true, "cake", 18, "peppermints", 0];
console.log(bouncer(mishMash));

/*
实现思路

通过 Boolean 对象创建一个函数 isFalsy(value) ，判断值 value 是不是一个falsy值
通过 Array.prototype.filter() 过滤掉数组 arr 中的falsy值，并且将遍历后的值存在一个 result 变量中,并且返回这个 result 值
思路清楚了就好处理了。在继续完成后面的任务之前，先来简单了解 Boolean 对象和 Array.prototype.filter() 的知识。

Boolean 对象是一个包装了布尔值的对象。如果 Boolean 构造函数的参数不是一个布尔值，则该参数会被转换成一个布尔值。
如果参数是falsy值(也就是 0 ， -0 ， null ， false ， NaN ， undefined 或者空字符串 "" )，
生成的 Boolean 对象的值为 false 。
其他任何值，包括任何对象或者字符串 "0" 或 "false" 都会创建一个值为 true 的 Boolean 对象。
*/