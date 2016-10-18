function titleCase(str){
	var str2arr = str.split(' ');
	for (var i = str2arr.length - 1; i >= 0; i--) {
		str2arr[i] = str2arr[i].toLowerCase()[0].toUpperCase() + str2arr[i].slice(1, str2arr[i].length);
	};
	return str2arr.join(' ');
}

var str = "my name is glianyi";
console.log(titleCase(str));