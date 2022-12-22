function miles_to_kilometers(){
    var miles_km = $('#miles-km').val(); // document.getElementById('gas_price-2');
    var result = parseFloat(miles_km) * 1.60934
    $('#result').val(result.toFixed(3)+" Km");
    //console.log(result.toFixed(2));
};


function kilometers_to_miles(){
    var km_miles = $('#km-miles').val(); // document.getElementById('gas_price-2');
    var result = parseFloat(km_miles) * 0.621371
    $('#result-2').val(result.toFixed(3)+" Miles");
    //console.log(result.toFixed(2));
};
