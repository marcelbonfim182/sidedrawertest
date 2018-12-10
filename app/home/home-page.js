/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const HomeViewModel = require("./home-view-model");
Feedback = require("nativescript-feedback").Feedback;
feedback = new Feedback();
color = require("color");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

var view = require("ui/core/view");
var drawer;

exports.pageLoaded = function(args) {
    var page = args.object;
    drawer = view.getViewById(page, "sideDrawer");
};

exports.toggleDrawer = function() {
    drawer.toggleDrawerState();
}

exports.callfeedback = function() {
    	feedback.success({
		  title: "Awesome",
		  message: "That was great!"
    });
	

}


