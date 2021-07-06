window.onload = function () {
    let rowCount = $('#tabla tr').length;
    let order = [];
    $(function () {
        $("#enviar").click(function () {
            const enviarForm = window.confirm("¿Está seguro que desea enviar el formulario con la información del pedido de papelería?")
            if (enviarForm) {
                for (i = 0; i < rowCount - 1; i++) {
                    if ($("#input-" + i).val() != "") {
                        let total = parseInt($("#precio-" + i)[0].childNodes[0].nodeValue) * parseInt($("#input-" + i).val());
                        let formData = {
                            id: i + 1,
                            Articulo: $("#item-" + i)[0].childNodes[0].nodeValue,
                            Precio: parseInt($("#precio-" + i)[0].childNodes[0].nodeValue),
                            TipoDeEmpaque: $("#tipo-" + i)[0].childNodes[0].nodeValue,
                            CantidadPedido: parseInt($("#input-" + i).val()),
                            Total: total,
                            UsuarioSolicitante: $("#nombreU").val(),
                            AreaSolicitante: $("#areaE").val(),
                            sucursal: $("#sucursal").val(),
                            Empresa: $("#Empresa").val(),
                        }
                        order.push(formData);
                    };
                }
            }
            sendData(order);
            console.log(order);
        });
    });
}


function sendData(datos){
    for(i=0; i < datos.length; i++){
        $.ajax({
            contentType: 'application/json',
            type: "POST",
            url: "https://prod-61.westus.logic.azure.com:443/workflows/09a0d7c340bf4ca880fad49b94efb3c7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=okc_L4zAB8ypmJqw9bA-SVvKx8wpZh7vBo1X9QUrLXI",
            data: JSON.stringify(datos[i]),
        });
    }

    let dateObj = new Date();
    let month = dateObj.getMonth() + 1;
    let mon = month + 1 <= 12 ? month + 1 : month - 11;
    document.write("<body style='background-color:orange; display:flex; align-items:center; justify-content:center;'></body>");
    document.write(`<div style='display:flex; padding:100px; flex-direction: column; background-color:white; border-radius: 5px;'><h2 style='color:#071d49; text-align:center;'>Su pedido fue enviado satisfactoriamente</h2><h3 style='color:darkgoldenrod; text-align:center;'>Fecha estimada de entrega: 06/${mon}/2021</h3></div>`);
}