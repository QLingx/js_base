function factorialize(num){
	var result = 1;
	if(0 == num){
		return result;
	}
	for (var i = num; i > 0; i--){
		result = result * i;
	}
	return result;
}

function factorialize_recu(num){
	var result = 1;
	if(0 == num){
		return result
	}else if(1 == num){
		return result;
	}else{
		return num * factorialize_recu(num-1);
	}
}

console.log(factorialize(5));
console.log(factorialize_recu(5));