define(function(require,exports,module){
	var $=require("jquery.min");
	
	//求和
	exports.sum=function(a,b){
		return a+b ;
	}

	exports.log=function(str){
		console.log(str);
	}
});