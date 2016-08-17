import viewFuncs from "./main.js";

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'nothing'
});

Router.route('/', {
    name: "welcomePage",
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.redirect('/home');
        }
        this.next();
    }
});

Router.route("/login", {
    name: "loginPage",
    template: "mainPageView",
    // onBeforeAction: function() {
    //     if (Meteor.user()) {
    //         this.redirect('/home');
    //     }
    //     this.next();
    // }
});

Router.route("/register", {
    name: "registerPage",
    template: "mainPageView",
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.redirect('/home');
        }
        this.next();
    }
});

Router.route("/password-recover", {
    name: "recoverPage",
    template: "mainPageView",
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.redirect('/home');
        }
        this.next();
    }
});

Router.route("/password-reset", {
    name: "resetPage",
    template: "mainPageView",
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.redirect('/home');
        }
        this.next();
    }
});

Router.route("/create-password", {
    name: "passwordPage",
    template: "mainPageView",
    onBeforeAction: function() {
        var user = Meteor.user();
        if (user) {
            var reg = user.profile.registered;
            if (!reg) {
            }
            else {
                this.redirect('/home');
            }
            this.next();
        }
        else {
            this.redirect('/login');
            this.next();
        }
    }
});

Router.route("/home", {
    name: "homePage",
    template: "homePage",
    onBeforeAction: function() {
        var user = Meteor.user();

        if (!user) {
            this.redirect("/login");
        }
        this.next();
    },
    data: function() {
        var message = this.params.message || "Welcome back";
        return {
            message: message,
            user: Meteor.user()
        }
    }
});