Template.header.events({
	'click #login-buttons-logout': function(e){
		//e.preventDefault();
		Router.go('postsList');
	}
});