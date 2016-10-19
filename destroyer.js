function destroyer(par){
	var arr = Array.from(arguments);
	var slice_arr = arr.slice(1,arr.length);
	function container(item){
		for(var i = 0;i < slice_arr.length;i++){
			if(item == slice_arr[i]){
				return false;
			}
		}
		return true;
	}
	return arr[0].filter(container);
}

var test = [1,2,3,4,5,1,4,3];
console.log(destroyer(test,1,3));
