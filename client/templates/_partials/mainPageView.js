if (Meteor.isClient) {
    Template.mainPageView.events({
        'click  .flip': function(e, t) {
            flipToLogin();
        },
        'click .flip-signup': function(e, t) {
            flipToRegister();
        },
        'click .forgottenPassword': function(e, t) {
            slideToForgotten();
        },
        'click #godviewIcon': function() {
            var isMainFull = $(".mainPage").hasClass("s12");
            $(".mainPage").toggleClass("s12").toggleClass("s9");
            $(".godView").toggleClass("s3");
            var trans = $(document).width() / 12 * 3;
            if (isMainFull) {
                $(".godviewIcon").css("transform", "translateX(-" + trans + "px)");
            }
            else {
                $(".godviewIcon").css("transform", "translateX(" + 0 + "px)");
            }
        },
        'click .goToReset': function(e, t) {
            slideReset();
            toggleSimulation();
        },
        'click .goToPassword': function(e, t) {
            slidePassword();
            toggleSimulation();
        }
    });
}

Template.mainPageView.rendered = function() {
    var route = Router.current().route.getName();
    console.log(route);
    if (route == "registerPage") {
        flipToRegister();
    }
    if (route == "recoverPage") {
        slideToForgotten();
    }
    if(route == "passwordPage"){
        flipToRegister();
        slidePassword();
    }
};


var userEmail = "fuckyou";
Template.mainPageView.helpers({
    setUserEmail(email){
    console.log('setting users email');
    userEmail = email;
    }
})

var flipToRegister = function() {
    $("#card").toggleClass("flipped");
    $("#text-card").toggleClass("text-flipped");
    $("#text-card figure").toggleClass("text-card-flipped");
    $(".panel-container").css("min-height", "550px");
    $(".mainPage .valign").css("padding-top", "9%");
    doHistory("registerPage");

}

var flipToLogin = function() {
    $("#card").toggleClass("flipped");
    $("#text-card").toggleClass("text-flipped");
    $("#text-card figure").toggleClass("text-card-flipped");
    $(".panel-container").css("min-height", "420px");
    $(".mainPage .valign").css("padding-top", "20%");
    doHistory("loginPage");
}

var slideToForgotten = function() {
    $(".login-panel").toggleClass("forgottenPass");
    $(".forgottenPassword-panel").toggleClass("forgottenPass");
    doHistory("recoverPage");
}

var toggleSimulation = function() {
    $(".mailSimulation").toggleClass("hidden");
}

var openSimulation = function() {
    $(".mailSimulation").addClass("hidden");
}

var closeSimulation = function() {
    $(".mailSimulation").removeClass("hidden");
}

var slideReset = function() {
    $(".resetPassword-panel").toggleClass("resetPassword");
    $(".forgottenPassword-panel").toggleClass("forgottenPass");
}

var slidePassword = function() {
    // $(".createPassword-panel").toggleClass("createPassword");
    // $(".registered-panel").toggleClass("regSuccess");
    $(".registered-panel").animate({
        height: 0
    }, 400, function() {
        $(this).hide();
    });
}

var slideRegistered = function() {
    console.log("hey hey");
    $(".panel-container").css("min-height", "420px");
    $(".mainPage .valign").css("padding-top", "20%");
    // $(".signup-panel").toggleClass("regSuccess");
    // $(".registered-panel").toggleClass("regSuccess");
    $(".signup-panel").animate({
        height: 0
    }, 400, function() {
        $(this).hide();
    });
    $("#card").css("transform", "translateX(0) rotateY(180deg)");
    $("#text-card").toggleClass("text-flipped").css("transform", "trasnlateX(0%) !imortant");
    $(".mailSimulation .registered").toggleClass("hide");
    toggleSimulation();
}

var toggleNotify = function(message) {
    $(".info-notify #message").text(message);
    $(".info-notify").addClass("hidden").delay(3000).
    queue(function() {
        console.log("hide");
        $(".info-notify").removeClass("hidden");
        $( this ).dequeue();
    });
}

export var viewFuncs = {
    flipToRegister: flipToRegister,
    flipToLogin: flipToLogin,
    slideToForgotten: slideToForgotten,
    toggleSimulation: toggleSimulation,
    openSimulation: openSimulation,
    closeSimulation: closeSimulation,
    slideReset: slideReset,
    slidePassword,
    slideRegistered: slideRegistered,
    toggleNotify: toggleNotify
}

function doHistory(name) {
    var path = Router.path(name);
    var current = Router.path(Router.current().route.name);
    //Router.go(path, {}, {replaceState: true});
    window.history.pushState({}, "", current);
    window.history.replaceState({}, null, path);
}