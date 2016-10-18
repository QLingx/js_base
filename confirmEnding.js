function confirmEnding(str,target){
	console.log(str.slice(str.length-target.length,str.length));
	if(target == str.slice(str.length-target.length,str.length)){
		return true;
	}else{
		return false;
	}
}

var str = "glianyi";
var target = "i";
console.log(confirmEnding(str,target));