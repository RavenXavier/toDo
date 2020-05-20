publicTasksdb = new Mongo.Collection('Public');
privateTasksdb = new Mongo.Collection('Private');

publicTasksdb.allow({
	insert: function(userId, doc){
		// if (userId){ //user has logged in
			return true;
		// }
		// else{
		// 	// return false;
		// }
	},
	remove: function(userId, doc){
		if (userId == doc.createdById){ //edit only what i own
			return true;
		}
		else{
			return false;
		}
	},
	update: function(userId, doc, fields){
		// if (userId){
			return true;
		// }
		// else{
			// if (fields[0] == "ratings"){
			// 	return true;
			// }
			// else {
	// 			return false;
	// 		}
	// 	}
	}
});

privateTasksdb.allow({
	insert: function(userId, doc){
		if (userId){ //user has logged in
			return true;
		}
		else{
			return false;
		}
	},
	remove: function(userId, doc){
		if (userId == doc.createdById){ //edit only what i own
			return true;
		}
		else{
			return false;
		}
	},
	update: function(userId, doc, fields){
		// if (userId){
			return true;
		// }
		// else{
			// if (fields[0] == "ratings"){
			// 	return true;
			// }
			// else {
	// 			return false;
	// 		}
	// 	}
	}
});

