function calculate_trip_cost(){
    var gas_price = $('#gas_price-2').val(); // document.getElementById('gas_price-2');
    var mpg = $('#mpg-2').val(); //document.getElementById('mpg-2');
    var miles = $('#miles-2').val(); //document.getElementById('mpg-2');
    var result = parseFloat(gas_price) / parseFloat(mpg) * parseFloat(miles)
    $('#result-2').val('$'+ result.toFixed(2));
    //console.log(result.toFixed(2));
};

