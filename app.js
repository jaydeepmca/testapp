//Testing on github

/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}
//Titanium.include('Resources/js/login.js');



/*
 
 //new webview function
var win = Ti.UI.currentWindow;    
Ti.App.fireEvent('show_indicator'); //display loading spinner until webview gets loaded
var fbUrl = "http://www.facebook.com";
var extwebview = Titanium.UI.createWebView({
     top:0,
     left:0,
     right:0,
     url:fbUrl,
     height:440,
     width:320,
     backgroundColor:'#ccc'
});
win.add(extwebview); //adding webview in current window
win.open();
 
extwebview.addEventListener('load', function() {
    Ti.App.fireEvent('hide_indicator'); //Hide the Loading indicator after the webview loaded
})
 
var space = Titanium.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
   
var buttonClose = Titanium.UI.createButton({
    title:"Done",
    style:Titanium.UI.iPhone.SystemButtonStyle.DONE 
});
 
var bottomToolbar = Titanium.UI.createToolbar({
    left : 0,
    bottom: 0,
    height : 40,
    width : 320,
    items: [space,space, space,space, space, space,buttonClose]
})
win.add(bottomToolbar); // add close button at the bottom tabbar to close the webview 
   
buttonClose.addEventListener('click', function (e) {
    win.remove(extwebview);
    win.remove(bottomToolbar);
});   

*/

// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	new Window().open();
})();
