function largestNum(nums){
	var flag = nums[0][0];
	var position = 0;
	for(var i = 0; i < nums.length; i++){ 
		for (var j = 0; j < nums[i].length; j++) {
			if(flag < nums[i][j]){
				position = i;
				flag = nums[i][j];
			}
		};
	};
	return nums[position];
}

console.log(largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));