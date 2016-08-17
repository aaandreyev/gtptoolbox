Template.godView.helpers({
    pendingRegs(){
        return Accounts.users.find({"profile.registered": false}, {sort: {"profile.date": -1}});
    },
    registeredUsers(){
      return Accounts.users.find({"profile.registered": true}, {sort: {"profile.date": -1}});
    }
});

Template.godView.events({
    'click #btn-allow': function(e, t){
        Meteor.call("registerUser", this);
    },
    'click #btn-deny': function(e, t){
        Meteor.call("removeUser", this);
    }
});

Template.godView.onCreated(function() {
  Meteor.subscribe('registeredUsers');
  Meteor.subscribe('pendingRegistrations');
});