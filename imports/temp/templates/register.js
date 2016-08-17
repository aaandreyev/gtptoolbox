if(Meteor.isClient){
    Meteor.autorun(function() {
        var message = Session.get("displayMessage");
        if(message){
            var stringArray = message.slit("&amp;");
            ui.notify(stringArray[0], stringArray[1])
                .effect('slide')
                .closable();
                
            Session.set('displayMessage', null);
        }
    })
    
    Template.register.events({
        'submit #register-form': function(e, t){
            
            var email = t.find("#account-email").value;
            var password = t.find("#account-password").value;
            
            if(isValidPassword(password)){
                            Accounts.createUser({email: trimInput(email), password: trimInput(password)}, 
            function(err){
                if(err){
                    //Inform the user that account creation faild
                } else {
                    //Success.Account has been create and tje user
                    //has logged in successfully
                }
            });
            }
            else {
                
                Session.set('displayMessage', 'Error &amp; too short.' );
                return false;
                //password is less that 6 chars long
                //not cool, dude
            }
            return false;
        }
    });
}

export var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g, "");
}

export var isValidPassword = function(val){
    return val.length >= 6 ? true :  false;
}