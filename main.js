const valorEntrada=200

function calcularTotal() {
    let cantidad= parseInt(document.getElementById("cantidad").value)
    let categoria= parseInt(document.getElementById("categoria").value)

    let descuento;
    if (categoria==1){
        descuento=80
    } else if(categoria==2){
        descuento=50
    } else{
        descuento=15
    }

    let total=cantidad*valorEntrada
    total-= total*descuento/100

    document.getElementById("total").innerHTML=total
}