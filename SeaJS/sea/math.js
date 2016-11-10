define(function(require,exports,module){
	var $=require("jquery.min");
	
	//求和
	exports.sum=function(a,b){
		return a+b ;
	}
	//控制台输出
	exports.log=function(str){
		console.log(str);
	}

	//比较求较大的值
	exports.compare=function(a,b){
		if (a>b) {
			return a;
		}
		return b;
	}


});