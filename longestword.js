function longestword(str){
	var str2arr = str.split(' ');
	var length = 0;
	var position = 0;
	for (var i = str2arr.length - 1; i >= 0; i--) {
		if(length < str2arr[i].length){
			length = str2arr[i].length;
			position = i;
		}
	};
	return str2arr[position];
}

function longestword_arr(str){
	return str.split(' ').sort(function(a,b){
		return b.length - a.length;
	})[0];
}

var str = "The quick brown fox jumped over the lazy dog";
console.log(longestword(str));
console.log(longestword_arr(str));