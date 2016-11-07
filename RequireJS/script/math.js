define(['util'],function(util){

	function sum(a,b){
		return a+b;
	};

	function max(arr){

		if(arr.length>0){
			var max=arr[0];
		}

		for (var i = 1; i < arr.length; i++) {
			if(arr[i]>max){
				max=arr[i];
			}
		}
		return max;
	};

	//加载其他模块并调用
	util.tip(1);

	return {
		sum:sum,
		max:max
	};


});
