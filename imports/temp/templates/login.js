if(Meteor.isClient){
    Template.login.events({
        'submit #login-form': function(e, t){
            e.preventDefault();
            
            var email = t.find("#login-email").value;
            var password = t.find("#login-passowrd").value;
            
            Meteor.loginWithPassword(email, password, function(err){
                //The user might not have been found, or their password
                //count be incorrent. Inform the user that their
                //login attempt has failed
                if(err){
                    
                }else {
                    
                }
            });
            return false;
        }
    });
}