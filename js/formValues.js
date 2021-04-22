
function Item (articulo, precio, tipoEmpaque, cantidad) {
    this.articulo = articulo;
    this.precio = precio;
    this.tipoEmpaque = tipoEmpaque;
};
let items = [
    new Item("ACETATO TAMAÑO CARTA x 25", 1, "PAQUETE"),
    new Item("ACETATO TAMAÑO OFICIO x 25", 1, "PAQUETE"),
    new Item("ALMOHADILLA PARA SELLOS", 1, "UNIDAD"),
    new Item("AZ CARTA", 1, "UNIDAD"),
    new Item("AZ OFICIO", 1, "UNIDAD"),
    new Item("BANDEJA MADERA DOBLE", 1, "UNIDAD"),
    new Item("BANDEJA MADERA SENCILLA", 1, "UNIDAD"),
    new Item("BANDEJA MADERA TRES NIVELES", 1, "UNIDAD"),
    new Item("BISTURI GRANDE PLASTICO", 1, "UNIDAD"),
    new Item("BISTURI PEQUEÑO PLASTICO", 1, "UNIDAD"),
    new Item("BISTURI INDUSTRIAL METÁLICO", 1, "UNIDAD"),
    new Item("BOLIGRAFO AZUL", 1, "UNIDAD"),
    new Item("BOLIGRAFO MORADO", 1, "UNIDAD"),
    new Item("BOLIGRAFO NEGRO", 1, "UNIDAD"),
    new Item("BOLIGRAFO ROJO", 1, "UNIDAD"),
    new Item("BORRADOR NATA", 1, "UNIDAD"),
    new Item("BORRADOR TABLERO ACRILICO", 1, "UNIDAD"),
    new Item("CARPETA PLASTICA OFICIO AMARILLA", 1, "UNIDAD"),
    new Item("CARPETA PLASTICA OFICIO AZUL", 1, "UNIDAD"),
    new Item("CARPETA PLASTICA OFICIO NEGRA", 1, "UNIDAD"),
    new Item("CARPETA PLASTICA OFICIO NARANJA", 1, "UNIDAD"),
    new Item("PAQUETE BANDA ELASTICA", 1, "UNIDAD"),
    new Item("CHINCHES PLANOS", 1, "CAJA"),
    new Item("CINTA 3M MAGICA SCOTCH 19mm x 33m", 1, "UNIDAD"),
    new Item("CINTA CAQUI 48mm x 100m", 1, "UNIDAD"),
    new Item("CINTA DE SEGURIDAD AZUL", 1, "UNIDAD"),
    new Item("CINTA DE SEGURIDAD BLANCA", 1, "UNIDAD"),
    new Item("CINTA DE SEGURIDAD NEGRA", 1, "UNIDAD"),
    new Item("CINTA DE SEGURIDAD VERDE", 1, "UNIDAD"),
    new Item("CINTA ENMASCARAR 12mm x 40m", 1, "UNIDAD"),
    new Item("CINTA ENMASCARAR 24mm x 40m", 1, "UNIDAD"),
    new Item("CINTA ENMASCARAR 48mm x 40m", 1, "UNIDAD"),
    new Item('DOBLE CLIP PEQUEÑO 1/2"', 1, "UNIDAD"),
    new Item('DOBLE CLIP MEDIANO 15/8"', 1, "UNIDAD"),
    new Item('DOBLE CLIP GRANDE 2"', 1, "UNIDAD"),
    new Item("CLIP MARIPOSA x 12 UNIDADES", 1, "PAQUETE"),
    new Item("CLIP GIGANTE MARIPOSA x 50 UNIDADES", 1, "PAQUETE"),
    new Item("CLIP STANDARD x 100 UNIDADES", 1, "PAQUETE"),
    new Item("CINTA TRANSPARENTE 12mm x 40m", 1, "UNIDAD"),
    new Item("CINTA TRANSPARENTE 40mm x 100m", 1, "UNIDAD"),
    new Item("CORRECTOR EN LAPIZ", 1, "UNIDAD"),
    new Item("COSEDORA", 1, "UNIDAD"),
    new Item("CUADERNO ARGOLLADO 105 CUADROS", 1, "UNIDAD"),
    new Item("ESFERO MERCADEO NEGRO", 1, "UNIDAD"),
    new Item("ESTUCHE CUCHILLA BISTURI GRNADE x 10 UNIDADES", 1, "PAQUETE"),
    new Item("ESTUCHE CUCHILLA BISTURI PEQUEÑO x 10 UNIDADES", 1, "PAQUETE"),
    new Item("GANCHO FOLIO LEGAJADOR LARGO x 100", 1, "PAQUETE"),
    new Item("GANCHO LEGAJADOR PLATICO PEQUEÑO x 20", 1, "PAQUETE"),
    new Item("GRAPA GALVANIZADA 23-10", 1, "UNIDAD"),
    new Item("GRAPA GALVANIZADA 23-12", 1, "UNIDAD"),
    new Item("GRAPA GALVANIZADA 23-13", 1, "UNIDAD"),
    new Item("GRAPA GALVANIZADA 23-15", 1, "UNIDAD"),
    new Item("GRAPA GALVANIZADA 26-6", 1, "UNIDAD"),
    new Item("HUELLERO DACTILAR", 1, "UNIDAD"),
    new Item("CUENTA FACIL", 1, "UNIDAD"),
    new Item("LAPIZ NEGRO", 1, "UNIDAD"),
    new Item("LAPIZ ROJO", 1, "UNIDAD"),
    new Item("MARCADOR BORRABLE AZUL", 1, "UNIDAD"),
    new Item("MARCADOR BORRABLE NEGRO", 1, "UNIDAD"),
    new Item("MARCADOR BORRABLE ROJO", 1, "UNIDAD"),
    new Item("MARCADOR BORRABLE VERDE", 1, "UNIDAD"),
    new Item("MARCADOR PERMANENTE AZUL", 1, "UNIDAD"),
    new Item("MARCADOR PERMANENTE NEGRO", 1, "UNIDAD"),
    new Item("MARCADOR PERMANENTE ROJO", 1, "UNIDAD"),
    new Item("MARCADOR PERMANENTE VERDE", 1, "UNIDAD"),
    new Item("MARCADOR SHARPIE", 1, "UNIDAD"),
    new Item("NOTAS MEDIANAS POST IT", 1, "UNIDAD"),
    new Item("PAPEL CARBON CARTA COLOR NEGRO", 1, "PAQUETE"),
    new Item("PEGANE BARRA", 1, "UNIDAD"),
    new Item("PERFORADORA 2 HUECOS", 1, "UNIDAD"),
    new Item("PERFORADORA 3 HUECOS", 1, "UNIDAD"),
    new Item("PILA AA", 1, "UNIDAD"),
    new Item("PILA AAA", 1, "UNIDAD"),
    new Item("REFUERZOS AUTOADHESIVOS", 1, "UNIDAD"),
    new Item("REGLA 30cm ", 1, "UNIDAD"),
    new Item("RESALTADOR AMARILLO", 1, "UNIDAD"),
    new Item("RESALTADOR AZUL", 1, "UNIDAD"),
    new Item("RESALTADOR NARANJA", 1, "UNIDAD"),
    new Item("RESALTADOR ROSADO", 1, "UNIDAD"),
    new Item("RESALTADOR VERDE", 1, "UNIDAD"),
    new Item("HOJA MEMBRETE CARGO", 1, "UNIDAD"),
    new Item("HOJA MEMBRETE EXPRESS", 1, "UNIDAD"),
    new Item("HOJA MEMBRETE REPECEV", 1, "UNIDAD"),
    new Item("HOJA MEMBRETE SIC LOGISTIC", 1, "UNIDAD"),
    new Item("HOJA MEMBRETE STORAGE", 1, "UNIDAD"),
    new Item("ROTULO EXPORTACIONES", 1, "UNIDAD"),
    new Item("ROTULO IMPORTACIONES", 1, "UNIDAD"),
    new Item("SACAGANCHOS", 1, "UNIDAD"),
    new Item("GUIA CLASIFICACION ALFABETICA", 1, "UNIDAD"),
    new Item("SEPARADOR EN CARTULINA BLANCO", 1, "UNIDAD"),
    new Item("SEPARADOR PLASTICO EN COLORES", 1, "UNIDAD"),
    new Item("SEPARADOR NUMERICO 1-6", 1, "UNIDAD"),
    new Item("SOBRE MANILA CARTA", 1, "UNIDAD"),
    new Item("SOBRE MANILA OFICIO", 1, "UNIDAD"),
    new Item("SOBRE MANILA GIGANTE ESPECIAL", 1, "UNIDAD"),
    new Item("SUPERBONDER", 1, "UNIDAD"),
    new Item("TAJALAPIZ METALICO", 1, "UNIDAD"),
    new Item('TIJERAS PARA OFICINA 7"', 1, "UNIDAD"),
    new Item("TINTA DE SELLO CAUCHO AZUL", 1, "UNIDAD"),
    new Item("TINTA DE SELLO CAUCHO NEGRA", 1, "UNIDAD"),
    new Item("TINTA DE SELLO CAUCHO ROJA", 1, "UNIDAD"),
    new Item("TINTA DE SELLO CAUCHO VERDE", 1, "UNIDAD"),
    new Item("TINTA PARA HUELLERO DACTILAR", 1, "UNIDAD"),
    new Item("TINTA RICOH PRIPORT INKJP-30", 1, "UNIDAD"),
    new Item("YOYO PARA CARNET", 1, "UNIDAD"),
    new Item("REVISTERO", 1, "UNIDAD"),
    new Item("CARPETA CARTON TAMAÑO OFICIO", 1, "UNIDAD"),
    new Item("CARPETA CARTON TAMAÑO CARTA", 1, "UNIDAD"),
    new Item("CINTA DE SEGURIDAD AMARILLA", 1, "UNIDAD"),
    new Item("CALCULADORA TRULY 837 12 DIGITOS", 1, "UNIDAD"),
    new Item("CHINCHE CRISTAL", 1, "UNIDAD"),
    new Item("BOLSA TRANSPARENTE 31cm x 51cm", 1, "UNIDAD"),   
    new Item("ADHESIVO AMARILLO", 1, "UNIDAD"),
];

/*<td><label for="item-1-cantidad">Acetato tamaño carta calibre 3</label></td>
<td id="item-1-precio">5625</td>
<td>PAQ x 25</td>
<td><input type="number" name="item-1-cantidad" id="item-1-cantidad"></td>
<td id="total-1"></td>*/

let element = document.getElementById("tabla")
let row, product, price, batch, quantity, total, labelProduct, inputQuantity;
let textProduct, textPrice, textBatch;

for (i = 0; i<items.length; i++){
    row = document.createElement("tr");
    product = document.createElement("td");
    labelProduct = document.createElement("label");
    price = document.createElement("td");
    batch = document.createElement("td");
    quantity = document.createElement("td");
    inputQuantity = document.createElement("input");

    textProduct = document.createTextNode(items[i].articulo);
    textPrice = document.createTextNode(items[i].precio);
    textBatch = document.createTextNode(items[i].tipoEmpaque);

    labelProduct.appendChild(textProduct);
    price.appendChild(textPrice);
    batch.appendChild(textBatch);

    product.appendChild(labelProduct);
    quantity.appendChild(inputQuantity);

    row.appendChild(product);
    row.appendChild(price);
    row.appendChild(batch);
    row.appendChild(quantity);
    element.appendChild(row);

    labelProduct.setAttribute("id","item-"+i);
    price.setAttribute("id", "precio-"+i);
    batch.setAttribute("id", "tipo-"+i);

    labelProduct.setAttribute("class","item");
    price.setAttribute("class", "precio");
    batch.setAttribute("class", "tipo");
}


