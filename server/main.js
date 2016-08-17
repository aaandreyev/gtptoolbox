import {
    Meteor
}
from 'meteor/meteor';
import {
    Accounts
}
from 'meteor/accounts-base';
import './users.js';

Meteor.startup(() => {
    Meteor.startup(function() {
        Meteor.users.remove({});

        var pendingRegs = [{
            email: "one@one.com",
            password: "default",
            profile: {
                email: "one@one.com",
                firstname: "One",
                lastname: "One",
                company: "One",
                position: "One",
                phone: "One",
                registered: false,
                date: moment().format('D MMM, YYYY HH:mm')
            }
        }, {
            email: "two@two.com",
            password: "default",
            profile: {
                email: "two@two.com",
                firstname: "Two",
                lastname: "Two",
                company: "Two",
                position: "Two",
                phone: "Two",
                registered: false,
                date: moment().format('D MMM, YYYY HH:mm')
            }
        }, {
            email: "three@three.com",
            password: "default",
            profile: {
                email: "three@three.com",
                firstname: "Three",
                lastname: "Three",
                company: "Three",
                position: "Three",
                phone: "Three",
                registered: false,
                date: moment().format('D MMM, YYYY HH:mm')
            }
        }, {
            email: "four@four.com",
            password: "daefaulasdft",
            profile: {
                email: "four@four.com",
                firstname: "Four",
                lastname: "Four",
                company: "Four",
                position: "Four",
                phone: "Four",
                registered: false,
                date: moment().format('D MMM, YYYY HH:mm')
            }
        }, {
            email: "five@five.com",
            password: "deafausdflt",
            profile: {
                email: "five@five.com",
                firstname: "Five",
                lastname: "Five",
                company: "Five",
                position: "Five",
                phone: "Five",
                registered: false,
                date: moment().format('D MMM, YYYY HH:mm')
            }
        }, {
            email: "six@six.com",
            password: "deafault",
            profile: {
                email: "six@six.com",
                firstname: "six",
                lastname: "six",
                company: "six",
                position: "six",
                phone: "six",
                registered: true,
                date: moment().format('D MMM, YYYY HH:mm')
            }

        }, {
            email: "seven@seven.com",
            password: "deafault",
            profile: {
                email: "seven@seven.com",
                firstname: "seven",
                lastname: "seven",
                company: "seven",
                position: "seven",
                phone: "seven",
                registered: true,
                date: moment().format('D MMM, YYYY HH:mm')
            }

        }, {
            email: "eight@eight.com",
            password: "eight",
            profile: {
                email: "eight@eight.com",
                firstname: "eight",
                lastname: "eight",
                company: "eight",
                position: "eight",
                phone: "eight",
                registered: true,
                date: moment().format('D MMM, YYYY HH:mm')
            }

        }];
        if (Meteor.users.find().count() === 0) {

            pendingRegs.forEach((u) => {
                Accounts.createUser(u);
            });
            console.log("seeded");
        }
    });
});

if (Meteor.isServer) {
    // Meteor.publish('regsteredUsers', function() {
    //     return Accounts.users.find({
    //         "profile.registered": true
    //     });
    // });
    // Meteor.publish('pendingRegistrations', function() {
    //     return Accounts.users.find({
    //         "proflie.registered": false
    //     });
    // })
}
