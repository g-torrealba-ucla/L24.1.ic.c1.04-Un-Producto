/**
 * Analasis de datos
 *  * Un producto codigo, costo tipo (1: Dama 2: caballero 3 : niño)
 * preciobaseVenta resulta de incrementar un 30% del costo
 * descuento del 10% si es para niño
 * Reporte codigo, precio base de venta , descuento y precio final.
 * )
 **/

import Cl_Producto from "./Cl_Producto.js";
import Cl_IProducto from "./Cl_IProducto.js";

let iProd = new Cl_IProducto(),
  c = iProd.leerCodigo(),
  ct = iProd.leerCosto(),
  t = iProd.leerTipo(),
  prod = new Cl_Producto(c, ct, t),
  salida = document.getElementById("salida");

salida.innerHTML = iProd.reporteProducto(
  prod.codigo,
  prod.precioBaseVenta(),
  prod.descuento(),
  prod.precioFinal()
);
