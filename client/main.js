import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// var flipToRegister = function() {
//     $("#card").toggleClass("flipped");
//     $("#text-card").toggleClass("text-flipped");
//     $("#text-card figure").toggleClass("text-card-flipped");
//     $(".panel-container").css("min-height", "550px");
//     $(".mainPage .valign").css("padding-top", "9%");
//     doHistory("registerPage");  
    
// }

// var flipToLogin = function() {
//     $("#card").toggleClass("flipped");
//     $("#text-card").toggleClass("text-flipped");
//     $("#text-card figure").toggleClass("text-card-flipped");
//     $(".panel-container").css("min-height", "420px");
//     $(".mainPage .valign").css("padding-top", "20%");
//     doHistory("loginPage");
// }

// var slideToForgotten = function() {
//     $(".login-panel").toggleClass("forgottenPass");
//     $(".forgottenPassword-panel").toggleClass("forgottenPass");
//     doHistory("recoverPage");
// }

// export default viewFuncs = {
//     flipToRegister: flipToRegister,
//     flipToLogin: flipToLogin,
//     slideToForgotten: slideToForgotten
// }

// function doHistory(name) {
//     var path = Router.path(name);
//     var current = Router.path(Router.current().route.name);
//     //Router.go(path, {}, {replaceState: true});
//     window.history.pushState({}, "", current);
//     window.history.replaceState({}, null, path);
// }
  