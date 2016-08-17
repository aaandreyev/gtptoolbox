import {
    viewFuncs
}
from './mainPageView.js';

Template.registerView.events({
    'click #signup-submit': function(e, t) {


        var email = $("#signup-email");
        var lastname = $("#signup-lastname");
        var firstname = $("#signup-firstname");
        var company = $("#signup-company");
        var position = $("#signup-position");
        var phone = $("#signup-phone");
        var date = moment().format('D MMM, YYYY HH:mm');

        var terms = $(".signup-panel #terms").is(":checked");

        var fields = [email, lastname, firstname, company, position, phone];

        var userObj = {
            email: email.val(),
            password: "default",
            profile: {
                lastname: lastname.val(),
                firstname: firstname.val(),
                company: company.val(),
                position: position.val(),
                phone: phone.val(),
                date: date,
                registered: false
            }
        }
        if (email.val() && lastname.val() && firstname.val() && company.val() &&
            company.val() && position.val() && phone.val()) {

            var b = true;
            for (var field in fields) {
                if (fields[field].hasClass("invalid")) {
                    viewFuncs.toggleNotify(("Sorry, some field's are not valid."))
                    b = false;
                    break;
                }
            }
            if (!terms) {
                viewFuncs.toggleNotify("Please, accept our terms and conditions");
                b = false;
            }

            if (b) {

                var user = Meteor.users.find({"profile.email": email.val()}).fetch();

                if (user.length == 0) {
                    Accounts.createUser(userObj, function(err){
                       
                       if(err){
                           viewFuncs.toggleNotify("Sorry, " + err.reason);
                       } else {
                           viewFuncs.slideRegistered();
                       }
                    });

                }
                else {
                    viewFuncs.toggleNotify("Sorry, email is already in use.")
                    email.addClass("invalid");
                }
            }
        }
        else {
            for (var field in fields) {
                if (!fields[field].val()) {
                    fields[field].addClass("invalid");
                }
            }
            viewFuncs.toggleNotify("Sorry, some fields are empty.");
        }
    }
});