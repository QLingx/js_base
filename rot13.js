function rot13(str){
	var reslut = str.toUpperCase();
	for(var i = 0;i<reslut.length;i++){
		if(reslut[i] !== " "){
			reslut[i] = String.fromCharCode(65 + (reslut[i].charCodeAt(0)+13)%65);
			console.log(reslut[i]);
		}
	}
	return reslut;
}

var str = "SERR PBQR PNZC";
console.log(rot13(str));