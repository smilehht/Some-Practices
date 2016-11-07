//加载包配置
require.config({
	paths:{
		js_util:"js_util"
	}
});

require(["js_util"],function(js){
	js.log(11,"44535");
});