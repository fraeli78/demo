// leaflet-locatecontrol
// https://github.com/domoritz/leaflet-locatecontrol


// add location control to global name space for testing only
// on a production site, omit the "lc = "!

//Add Location Options - override the plugin default popup and circle
var locOptions = {
    drawCircle: true,
    showPopup: true,
    follow:true,
    strings: {
        title: "Show me where I am, yo!"
    },
};

//Add Location
var loc = L.control.locate(locOptions).addTo(map);
//Endable Location at page load and do things once the location is found
loc.start();