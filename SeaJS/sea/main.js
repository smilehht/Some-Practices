// seajs.config({

// });
define(function(require,exports,module){

	var math=require("math");
	var common=require("helper/common");
	//调用jquery包
	var $=require("jquery_sea");

	exports.fun=function(){

		$(".add").click(function(){

			var a=parseFloat($("#value1").val());
			var b=parseFloat($("#value2").val());
			var sum=0;
			common.log((sum=math.sum(a,b)));
			$("#sum").html(sum);

			//判断module.exports==exports否
			console.log("\"module.exports==exports\":"+(module.exports==exports));

		});
	}



});