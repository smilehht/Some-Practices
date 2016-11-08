define(function(require,exports,module){

	var math=require("math");
	var common=require("common");

	exports.fun=function(a,b){

		common.tips(math.sum(a,b));
	}

});