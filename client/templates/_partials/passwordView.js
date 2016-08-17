import {
    viewFuncs
}
from "./mainPageView.js";

Template.createPasswordView.events({
    'click #btn-createPassword': function(e, t) {

        var psOne = $(".createPassword-body #passwordOne");
        var psTwo = $(".createPassword-body #passwordTwo");

        if (psOne.val() && psTwo.val()) {
            if (psOne.val() == psTwo.val()) {
                Meteor.users.update(Meteor.userId(), {$set: {"profile.registered": true}});
                $(".panel-container").css("transform", "translateY(-170%)");
                Router.go("/home", {
                    message: "Welcome"
                });
            }
            else {
                viewFuncs.toggleNotify("Sorry, passwords doesn't mutch, try again.");
                psOne.addClass("invalid");
                psTwo.addClass("invalid");
            }
        }
        else {
            viewFuncs.toggleNotify("Passwords can't be empty");
            psOne.addClass("invalid");
            psTwo.addClass("invalid");
        }
    }
})