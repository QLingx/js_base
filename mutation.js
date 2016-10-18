function mutation(array){
	var flag = 0;
	for(var i = 0 ;i < array[1].length;i++){
		for(var j = 0; j < array[0].length;j++){
			if(array[1][i] == array[0][j]){
				flag = flag + 1;
				break; 
			}
		}
	}
	console.log(flag);
	return flag == array[1].length;
}

var array = ["hello","hell"];
console.log(mutation(array));