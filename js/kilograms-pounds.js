function pounds_kilograms(){
    var pounds_kilograms = $('#pounds-kilograms').val();
    var result = pounds_kilograms * 0.45359237
    $('#result').val(result.toFixed(3)+" kg");
};


function kilograms_pounds(){
    var kilograms_pounds = $('#kilograms-pounds').val();
    var result = kilograms_pounds * 2.20462
    $('#result-2').val(result.toFixed(3)+"lbs");
};
