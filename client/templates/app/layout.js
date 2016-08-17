import viewFuncs from "../../main.js";


if (Meteor.isClient) {
    Template.layout.events({
        'click .godviewIcon': function() {
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
        }
    })
}