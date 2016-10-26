function myReplace(str, before, after){
	var arr = str.split(" ");
	for(var i = 0;i < arr.length;i++){
		if(arr[i] == before){
			arr[i] = after;
		}
	}
	return arr.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));