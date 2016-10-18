function chunkArrayInGroups(array,num){
	var result = [];
	var item = [];
	for(var i = 1;i <= array.length;i++){
		if((i % num) == 0){
			item.push(array[i-1])
			result.push(item);
			item = [];
		}else{
			item.push(array[i-1]);
		}
	}
	return result;
}

var array = [0,1,2,3,4,5];
console.log(chunkArrayInGroups(array,2));