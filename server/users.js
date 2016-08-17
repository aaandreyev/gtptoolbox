import {
    Accounts
}
from 'meteor/accounts-base';
import {
    SHA256
}
from 'meteor/sha';
let Future = Npm.require('fibers/future');
Meteor.methods({
    "findUserByEmail": function(email) {
        console.log(email);
        console.log(Accounts.users.find().fetch());
        return Accounts.findUserByEmail(email);
    },
    "changeUserPassword": function(user, password, callback) {
        let future = new Future();
        let resolver = future.resolver();
        var id = user._id;
        //var pass = SHA256(password);
        Accounts.setPassword(id, password);
    },
    "removeUser": function(user){
        return Meteor.users.remove({_id:user._id});
    },
    "registerUser": function(user){
        return Meteor.users.update(user._id, {$set: {"profile.registered": true}});
    }
});

