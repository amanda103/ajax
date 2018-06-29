"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function (results) {
        $('#fortune-text').html(results);
    });
    // $.get('/fortune', (results) => {$('#fortune-text').html(results)});
    
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, formData, function (results) {
        console.log(results);
        console.log(results['forecast']);
        $('#weather-info').html(results['forecast']);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    
    let formInputs = {
        "qty" : $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val(),
    };

    $.post("/order-melons.json", formInputs, function (results) {
        console.log(results)
        let order_code = results['code']
        let order_msg = results['msg']
        console.log(order_msg)
        console.log(order_code)

        if (order_code === "ERROR"){
            $("#order-status").html(order_msg).addClass("order-error")
        } else {
            $("#order-status").html(order_msg).removeClass("order-error")
        }
    })
}

$("#order-form").on('submit', orderMelons);


