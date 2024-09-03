function calculate_trip_cost() {
    var gas_price = $('#gas_price-2').val(); 
    var mpg = $('#mpg-2').val(); 
    var miles = $('#miles-2').val(); 

    // Verifica se todos os valores são válidos
    if (gas_price === "" || mpg === "" || miles === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Converte para float
    gas_price = parseFloat(gas_price);
    mpg = parseFloat(mpg);
    miles = parseFloat(miles);

    // Verifica se as conversões foram bem-sucedidas
    if (isNaN(gas_price) || isNaN(mpg) || isNaN(miles)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    // Cálculo do custo da viagem
    var result = gas_price / mpg * miles;

    // Atualiza o resultado no campo de entrada
    $('#result-2').val('$' + result.toFixed(2));

    // Para debug, descomente a linha abaixo
    // console.log(result.toFixed(2));
};