define(function(require,exports,module){

	exports.tips=function(){
		alert.apply(window,arguments);
	}

	
	//控制台输出
	exports.log=function(str){
		console.log(str);
	}

});