function convertToRoman(num){
	var arr = num.toString().split("");
    var values = [["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
            ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]];
    for (var i = 0; i < arr.length; i++)
        arr[i] = values[arr.length - i - 1][arr[i] - 1];
    return arr.join("");
}

console.log(convertToRoman(999));