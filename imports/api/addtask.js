Template.addTask.events({
	'click .js-saveMe'(event, instance){
		console.log("add a task");
		var myList = $("#listName").val();
		var myTask = $("#taskName").val();
		publicTasksdb.insert({
			"list": myList,
			"task": myTask,
			"createdOn": new Date().getTime()
		});
		console.log("saving");
		$("#AddTaskModal").modal("hide");
		var myList = $("#listName").val("");
		var myTask = $("#taskName").val("");
	},
	'click .js-closeMe'(event, instance){
		console.log("close add a task");
		var myList = $("#listName").val("");
		var myTask = $("#taskName").val("");
	},
	'click .js-newTask'(event, instance){
		console.log("new");
	}
});
