//method 1
// function Phone(name){
// 	this.name = name;
// }

// Phone.prototype = {category:'intelligence phone'};
// android = new Phone("android");
// iphone = new Phone("iphone");

// console.log(iphone.name,android.name);
// console.log(iphone.category,android.category);

//method 2
// function Phone(){
// 	this.category = "phone";
// }

// function Iphone(name,os){
// 	Phone.apply(this,arguments);
// 	this.name = "iphone";
// 	this.os = 'ios';
// }

// iphone = new Iphone('iphone7','ios');

// function Android(name,os){
// 	this.name = name;
// 	this.os = os;
// }

// Android.prototype = new Phone();
// Android.prototype.constructor = Android;
// console.log(Android.prototype.constructor);

// htc = new Android("htc",'android4');
// console.log(htc.constructor,Android.prototype.constructor);

//method 3
// console.log("------------------method 3-------------------");

// function Phone(){}

// Phone.prototype.category = "phone";

// console.log(Phone.prototype.constructor);//Phone
// function Android(name,os){
// 	this.name = name;
// 	this.os = os;
// }

// Android.prototype = Phone.prototype;
// Android.prototype.constructor = Android;
// htc = new Android("htc",'android5');
// console.log(htc.category);
// console.log(Phone.prototype.constructor);//Android
// console.log(htc.category);

//method 4

// function extend(Child,Parent){
// 	var Temp = function(){};
// 	Temp.prototype = Parent.prototype;
// 	Child.prototype = new Temp();
// 	Child.prototype.constructor = Child;
// }

// function Phone(){
// 	this.category = "phone";
// }

// function Android(name){
// 	this.name = name;
// }

// Phone.prototype.category = "phone";
// extend(Android,Phone);
// htc = new Android('htc');
// console.log(htc.category);

//method 5

// function Phone(){}

// Phone.prototype.category = "phone";

// function Android(name){
// 	this.name = name;
// }

// function extend(Child,Parent){
// 	var p = Parent.prototype;
// 	var c = Child.prototype;

// 	for(var i in p){
// 		c[i] = p[i];
// 	}
// }

//非构造函数继承
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

function extendCopy(p){
	var c = {};
	for(var i in p){
		c[i] = p[i];
	}
	return c;
}

function deepCopy(p,c){
	var c = c || {};
	for(var i in p){
		if(typeof p[i] === 'object'){
			c[i] = (p[i].constructor === Array) ? [] : {};
			deepCopy(p[i],c[i]);
		}else{
			c[i] = p[i];
		}
	}
	return c;
}
