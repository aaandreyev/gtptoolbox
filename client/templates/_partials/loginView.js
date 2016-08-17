import {viewFuncs} from "./mainPageView.js";

Template.loginView.events({
    'click #btn-login': function(e, t) {
        var email = $(".login-panel #email");
        var password = $(".login-panel #password");
        var remember = $(".login-panel #rememberMe").is(":checked");

        if (email.val() && password.val()) {
            Meteor.loginWithPassword(email.val(), password.val(), function(err) {
                if (err) {
                    viewFuncs.toggleNotify("Email or Password are incorrect: " + err.reason);
                    password.addClass("invalid");
                    email.addClass("invalid");
                    console.log(err, email, password);
                }
                else {
                    $(".panel-container").css("transform", "translateY(-170%)");
                    Router.go("/home", {
                        message: "Welcome back"
                    });
                }
            });
        }
        else {
            viewFuncs.toggleNotify("Email or Password can't be empty: ");
            password.addClass("invalid");
            email.addClass("invalid");
        }
    }
})