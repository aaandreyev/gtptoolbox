Template.homePage.events({
    'click #btn-logout': function(e, t) {
        Meteor.logout(function(err){
            if(err){
                
            }else {
                Router.go("/login");
            }
        });
    }
})