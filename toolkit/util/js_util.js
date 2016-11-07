define(function(){

	function log(str){
		console.log.apply(console,arguments);
	}

	return {
		log:log
	}
});