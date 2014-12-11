function memoize(fn){
	var cache = {};
	return function(){
		var key = window.JSON.stringify(arguments);
		console.log(key);
		if (typeof cache[key] !== "undefined"){
			console.log("from cache..");
			return cache[key];
		}
		cache[key] = fn.apply(this,arguments);
		console.log("juz processed");
		return cache[key];
	}
}