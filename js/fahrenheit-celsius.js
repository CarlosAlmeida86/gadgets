function fahrenheit_to_celsius(){
    var fahrenheit_celsius = $('#fahrenheit-celsius').val();
    var result = parseFloat((fahrenheit_celsius) - 32) * .5556
    $('#result').val(result.toFixed(0)+"º C");
};


function celsius_to_fahrenheit(){
    var celsius_fahrenheit = $('#celsius-fahrenheit').val();
    var result = parseFloat(celsius_fahrenheit) * 1.8 + 32
    $('#result-2').val(result.toFixed(0)+"º F");
};
