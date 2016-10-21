function sumAll(arr){
	var sum = 0;
	for(var i = Math.min(arr[0],arr[1]);i <= Math.max(arr[0],arr[1]);i++){
		sum += i;
	}
	return sum;
}

function sumAll_arr(arr){
	var sum = 0;
	for(var i = Math.min.apply(null,arr);i <= Math.max.apply(null,arr);i++){
		sum += i;
	}
	return sum;
}

console.log(sumAll([1,4]));
console.log(sumAll_arr([1,4]));