import {trimInput} from './register';
import {isValidPassword} from './register';

Template.passwordRecovery.helpers({
    resetPassword: function(t){
        if(Accounts._resetPasswordToken){
            Session.get('resetPassword', Accounts._resetPasswordToken);
        }
        return Session.get('resetPassword');
    }
});

Template.passwordRecovery.events({
    'submit #recovery-form': function(e,t){
        e.preventDefault();
        var email = trimInput(t.find('#recovery-email').value);
        
        if(true){ //isNotEmpty(email) && isEmail(email)
            Session.set("loding", true);
            Accounts.forgotPassword({email:email}, function(err){
                if(err){
                    Session.get('displayMessage', 'Password reset error');
                }
                else {
                    Session.set('displayMessage', 'Email sent, please check yoru mail');
                }
                Session.set("loging", false);
            });
        }
        return false;
    },
    
    'submit #new-password': function(e, t){
        e.preventDefault();
        var pw = t.find("#new-password-password").value;
        if( isValidPassword(pw)) //isNotEmpty(pw)
        {
            Session.set("loading", true);
            Accounts.resetPassword(Session.get("resetPassword"), pw,
            function(err) {
                if(err){
                    Session.set("displayMessage", "Password resest error");
                }
                else {
                    Session.set('resetPassword', null);
                }
                Session.set('loading', false);
            });
        }
        return false;
    }
});