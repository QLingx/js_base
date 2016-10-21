function diffArray(arr1,arr2){
	var result = new Array();
	if(arr1.length < arr2.length){
		for(var i = 0;i < arr2.length;i++){
			var flag = true;
			for(var j = 0;j < arr1.length;j++){
				if(arr2[i] == arr1[j]){
					flag = false;
					break;
				}
			}
			if(flag){
				result.push(arr2[i])
			}
		}
	}else{
		for(var i = 0;i < arr1.length;i++){
			var flag = true;
			for(var j = 0;j < arr2.length;j++){
				if(arr1[i] == arr2[j]){
					flag = false;
					break;
				}
			}
			if(flag){
				result.push(arr1[i])
			}
		}
	}
	return result;
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/*
Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*/