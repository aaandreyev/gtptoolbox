import {
    UUser
}
from './recoverView.js';
import {
    viewFuncs
}
from './mainPageView.js';

Template.resetView.events({
    'click #btn-reset': function(e, t) {

        var psOne = $(".resetPassword-body #passwordOne");
        var psTwo = $(".resetPassword-body #passwordTwo");

        if (psOne.val() && psTwo.val()) {
            if (psOne.val() == psTwo.val()) {
                var usr = UUser;
                console.log(UUser);
                Meteor.call("changeUserPassword", usr, psOne.val(), function() {
                    Meteor.loginWithPassword(UUser.profile.email, psOne.val(), function(err) {
                        console.log("client");
                        if (err) {
                            viewFuncs.toggleNotify("Sorry something went wrong");
                            Router.go("/password-recover");
                        }
                        else {
                            $(".panel-container").css("transform", "translateY(-170%)");
                            Router.go("/home", {
                                message: "Welcome back"
                            });
                        }
                    })
                })
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
    },
})