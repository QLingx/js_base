function parlindromes(str){
	if(str == str.split('').reverse().join('')){
		return true;
	}else{
		return false;
	}
}

function parlindromes_arr(str){
	for (var i = str.length - 1,j = 0; i >= 0 && j <= i; i--,j++) {
		if(str[i] != str[j]){
			return false;
		}
	}
	return true;
}

var str = 'abcba';
var stre = 'glianyi';
console.log(parlindromes_arr(str));
console.log(parlindromes_arr(stre));