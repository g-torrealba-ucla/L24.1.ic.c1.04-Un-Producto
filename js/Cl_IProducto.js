export default class CL_IProducto {
  leerCodigo() {
    return prompt("ingrese el Codigo");
  }

  leerCosto() {
    return prompt("ingrese el Costo");
  }
  leerTipo() {
    return prompt("ingrese el Tipo   1: Dama 2: caballero 3 : niño");
  }

  reporteProducto(c,p,d,pf){
    return `
     <br> Codigo: ${c}
     <br> Precio Base de Venta :$ ${p}
     <br> Descuento :$ ${d}
     <br> Precio Final :$ ${pf}
    `
  }
}
