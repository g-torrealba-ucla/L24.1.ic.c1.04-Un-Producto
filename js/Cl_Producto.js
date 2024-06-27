export default class Cl_Producto{
    constructor (codigo,costo,tipo){
        this.codigo = codigo;
        this.costo = costo;
        this.tipo = tipo;
    }

    set codigo( c){
      this._codigo = c;
    }

    get codigo(){
      return this._codigo;
    }

    set costo(ct){
      this._costo = +ct;
    }
     
    get costo (){
      return this._costo;   
    }

    set tipo(t){
      this._tipo = +t;
    }   

    get tipo (){
      return this._tipo;   
    }       

precioBaseVenta(){
     return (this.costo *0.30) + this.costo;
}
    descuento(){
        if (this.tipo == 3) 
             return this.precioBaseVenta()* 0.10;
            else
             return 0;
    }

    precioFinal(){  
        return this.precioBaseVenta() - this.descuento();
    }

}