function getIndexToIns(arr,num){
	var arr_order = arr.sort(function(a,b){
		return a > b;
	});
	for(var i = 0;i < arr_order.length;i++){
		if(num < arr_order[i]){
			return i;
		}
	}
	return arr.length;
}

var arr = [6,2,7,5,9,10];
// console.log(getIndexToIns(arr,1));
console.log(getIndexToIns(arr,8));
// console.log(getIndexToIns(arr,11));

