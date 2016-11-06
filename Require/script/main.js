
require.config({
	paths:{
		"jquery":"jquery.min",
		"math":"math",
		"util":"helper/util"
	}
});

require(['math'] , function(math){
	alert(math.sum(1,2));
});
// require(['math'], function (math){
// 　　alert(math.sum(1,1));
// });