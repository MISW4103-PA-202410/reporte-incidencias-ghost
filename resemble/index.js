$(document).ready(function() {
    var image1Path = '../puppeteer-cucumber/output/screenshots/3.42.0/crear-page_escenario_1_paso_1.png';
    var image2Path = '../puppeteer-cucumber/output/screenshots/5.82.2/crear-page_escenario_1_paso_1.png';

    // Llamada a la función en index.js para comparar las imágenes
    resemble(image1Path)
        .compareTo(image2Path)
        .onComplete(function(data) {
            console.log(data);
            $('#results').html('Porcentaje de diferencia: ' + data.rawMisMatchPercentage);
            $('#diffImage').attr('src', data.getImageDataUrl());
        });

    $('#image1').attr('src', image1Path);
    $('#image2').attr('src', image2Path);
});