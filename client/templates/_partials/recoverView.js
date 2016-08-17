import "./mainPageView.js";

import {
    viewFuncs
}
from './mainPageView.js';
export var UUser = " ";
Template.recoverView.events({
    'click #btn-recover': function(e, t) {

        var email = $(".forgottenPassword-panel #emailF");

        if (email.val()) {

            var user = Meteor.users.find({"profile.email": email.val()}).fetch();

            if (user.length > 0) {
                $(".mailSimulation .resetP").toggleClass("hide");
                viewFuncs.toggleSimulation();
                UUser = user[0];
            } else {
                viewFuncs.toggleNotify("Sorry, such user simply doesn't exist yet");
            }
        } else {
             viewFuncs.toggleNotify("Sorry, but we need your email, to reset a password");
        }
    }
});