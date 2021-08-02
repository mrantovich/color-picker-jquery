$( function() {

    function updateColor() {
        let red = $('#red').slider('value'),
            green = $('#green').slider('value'),
            blue = $('#blue').slider('value');
        $('.work__text').css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    };

    function updateBg() {
        let red = $('#red').slider('value'),
            green = $('#green').slider('value'),
            blue = $('#blue').slider('value');
        $('.work__text').css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
    };

    $('#red, #green, #blue').slider({
        orientation: "horizontal",
        range: "max",
        max: 255,
        value: 127,
        slide: updateColor,
        change: updateColor
    });

    function setSlidersWorkWithText(event) {
        event.preventDefault();
        $('.button_bg').removeClass('is-active');
        $('.button_color').addClass('is-active');
        $('#red, #green, #blue').slider({
            slide: updateColor,
            change: updateColor
        });
    };

    function setSlidersWorkWithBackground(event) {
        event.preventDefault();
        $('.button_color').removeClass('is-active');
        $('.button_bg').addClass('is-active');
        $('#red, #green, #blue').slider({
            slide: updateBg,
            change: updateBg
        });
    }

    $('.button_color').click(function(event) {
        setSlidersWorkWithText(event)
    });
    $('.button_bg').click(function(event) {
        setSlidersWorkWithBackground(event)
    });

});