function TaskStorage(){
		this.storage = window.localStorage;
	}
	TaskStorage.prototype.add  = function addTaskToStorage(taskName){
		var newTask = {
			id : new Date().getTime().toString(),
			name : taskName,
			isCompleted : false
		};
		this.storage.setItem(newTask.id, window.JSON.stringify(newTask));
		return newTask;			
	}
	TaskStorage.prototype.toggle  = function toggleTaskInStorage(taskId){
		var taskAsString =this.storage.getItem(taskId);
		var task = window.JSON.parse(taskAsString);
		task.isCompleted = !task.isCompleted;
		this.storage.setItem(task.id, window.JSON.stringify(task));
	}
	TaskStorage.prototype.remove  = function removeTaskFromStorage(taskId){
		this.storage.removeItem(taskId);
	}
	TaskStorage.prototype.getAll  = function getAllTasksFromStorage(){
		var result = [];
		for(var i=0;i<this.storage.length;i++){
			var key = this.storage.key(i);
			var taskAsString =this.storage.getItem(key);
			var task = window.JSON.parse(taskAsString);
			result.push(task);
		}
		return result;
	}
