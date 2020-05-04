Template.mainBody.helpers({
	publicTask(){
		return publicTasksdb.find();
	}
});

Template.mainBody.events({
	'click .js-delTask'(event, instance){
		// console.log(this._id);
		var myId = this._id;
		$("#"+myId).fadeOut('slow',function(){
		publicTasksdb.remove({_id:myId});
		});
	},
	'click .js-editTask'(event, instance){
		console.log(this._id);
	}
});