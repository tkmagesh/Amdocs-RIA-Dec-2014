
	$(function(){
		var storage = new TaskStorage;

		var allTasks = storage.getAll();
		$.each(allTasks, function(index,task){
			addTaskToList(task);
		});

		$("#btnAddTask").click(function(){
			var taskName = $("#txtTask").val();
			var newTask = storage.add(taskName);
			addTaskToList(newTask);
		});
		$("#olTaskList").on("click","li",function(){
			$(this).toggleClass("completed");
			storage.toggle($(this).attr("task-id"));
		})
		function addTaskToList(task){
			$("<li>")
				.attr("task-id", task.id)
				.html(task.name)
				.addClass(task.isCompleted ? "completed" : "")
				.appendTo("#olTaskList");
		}
		$("#btnRemoveCompleted").click(function(){
			$("li.completed").each(function(index,elem){
				var $elem = $(elem);
				var taskIdToRemove = $elem.attr("task-id");
				storage.remove(taskIdToRemove);
			}).remove();
		})
		
	});