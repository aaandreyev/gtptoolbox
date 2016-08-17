Template.welcomePage.events({
    'click #login': function(e, t){
        Router.go("/login");
    },
    'click #signup': function(e, t){
        Router.go("/register");
    }
})