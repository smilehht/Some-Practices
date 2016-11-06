define(function(){

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


	return {
		sum:sum,
		max:max
	};


});
