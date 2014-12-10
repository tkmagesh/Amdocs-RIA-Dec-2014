
function getPrimeFinder(){
	function checkPrime(n){
		if (n <= 3) return true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0) return false;
		return true;
	}
	var cache = {};
	function isPrime(n){
		if (typeof cache[n] !== "undefined"){
			console.log("from cache");
			return cache[n];
		}
		cache[n] = checkPrime(n);
		console.log("juz processed");
		return cache[n];
	}
	return isPrime;
}
