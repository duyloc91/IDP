// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var calendar = myApp.addView('#weather', '#log', '#run', '#calendar', '#friends',{
    dynamicNavbar: true
});

//For left panel
$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
});
