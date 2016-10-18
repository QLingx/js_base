function repeatString(str,num){
	var re_str = '';
	for (var i = 0; i < num; i++) {
		re_str += str;
	}
	return re_str;
}

console.log(repeatString("glianyi",3));