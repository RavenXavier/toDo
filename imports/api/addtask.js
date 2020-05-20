// Template.addTask.helpers({
// 	userField(){//ceck to see if image has a saved user
// 		if (!(this.createdBy == undefined)){
// 			return true;
// 		}
// 		else{
// 			return false;
// 		}
// 	}
// });

Template.addTask.events({
// 'click #p1': function(event){
//   	var taskLoc = $("#p1:checked").val();
//   	console.log(taskLoc);
//   	// publicTasksdb.insert({
//    //  	"status": taskLoc
//   	// });
// 	},
// 	'click #p2': function(event){
//     var taskLoc = $("#p2:checked").val();
//     console.log(taskLoc);
//     // privateTasksdb.insert({
//   		// "status": taskLoc
//     // });
// 	},

	'click .js-saveMe'(event, instance){
		var myList = $("#listName").val();
		var myTask = $("#taskName").val();
		var myStat1 = $("#p1:checked").val();	
		var myStat2 = $("#p2:checked").val();			
		// var myStat2 = $("#p2").val('status');
		if (myStat1){
			console.log("saved to: " + myStat1);
			publicTasksdb.insert({
				"list": myList,
				"task": myTask,
				"completed": false,
				"status": myStat1,
				"createdOn": new Date().getTime(),
				"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).username,
	 			"createdById": Meteor.userId()
			});
		}else if(myStat2) {
			console.log("saved to: " + myStat2);
			privateTasksdb.insert({
				"list": myList,
				"task": myTask,
				"completed": false,
				"status": myStat2,
				"createdOn": new Date().getTime(),
				"createdBy": Meteor.users.findOne({_id:Meteor.userId()}).username,
	 			"createdById": Meteor.userId()
			});
		}
		$("#AddTaskModal").modal("hide");
		var myList = $("#listName").val("");
		var myTask = $("#taskName").val("");
	},
	'click .js-closeMe'(event, instance){
		console.log("close add a task");
		var myList = $("#listName").val("");
		var myTask = $("#taskName").val("");
	},
	'click .js-delTask'(event, instance){
		var myId = this._id;
		testCodedb.remove({_id:myId});
	}

});
