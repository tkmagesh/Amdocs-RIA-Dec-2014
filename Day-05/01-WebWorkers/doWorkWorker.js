function doWork(){
	for(var i=0;i<10000;i++){
		for(var j=0;j<10000;j++)
			for(var k=0;k<100;k++){

			}
		if (i%100 === 0){
			//console.log(i/100);
			self.postMessage({
				type : "progress",
				percentCompleted : i/100
			});
		}
	}
}
self.addEventListener("message", onMessageFromMainWorker);
function onMessageFromMainWorker(msgEvt){
	var message = msgEvt.data;
	if (message === "start"){
		doWork();
		self.postMessage({type : "completed"});
		console.log("work completed [from worker]");
	} else {
		console.log("unknown message ", msgEvt);
	}
}
/*doWork();
console.log("work completed [from worker]");*/