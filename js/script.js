$(document).ready(function(){

// counter
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// counter

// wow js
new WOW().init();
// wow js

 /**
     * Demo 4
     */
    var spiral = function (t)
    {
        var s = t + 1.0;

        return {
            x: 300.0 + 50.0 * s * Math.cos(2.0 * Math.PI * s - 0.5 * Math.PI),
            y: 300.0 + 50.0 * s * Math.sin(2.0 * Math.PI * s - 0.5 * Math.PI)
        };
    };

    $('#text4').curvedText({
        curve:    spiral,
        domain:   [0.0, 3.0],
        viewport: { x: 0.0, y: 0.0, width: 600.0, height: 600.0 }
    });










})