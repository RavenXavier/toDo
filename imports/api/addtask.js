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
		var myTask = $("#taskName").val();
		testCodedb.insert({
			"task": myTask
		
		});
	},
	'click .js-delTask'(event, instance){
		var myId = this._id;
		testCodedb.remove({_id:myId});
	}
});

Template.addTask.helpers({
	taskNew(){
		return testCodedb.find();
	}
});
