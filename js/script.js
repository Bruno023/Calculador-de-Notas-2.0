function ObtenerRef()
{
    var Mate=parseInt(document.getElementById('NotaMate').value);
    var Lengua=parseInt(document.getElementById('NotaLengua').value);
    var EFSI=parseInt(document.getElementById('NotaEFSI').value); 
    var Notas=[Mate,Lengua,EFSI];
    return Notas;
}

function SubirNota()
{
    var Notas=ObtenerRef();
    var Mate = Notas[0];
    var Lengua = Notas[1];
    var EFSI = Notas[2];

    if(Mate <= 10 && Lengua<=10 && EFSI<=10 && Mate >0 && Lengua>0 && EFSI>0)
    {
        var elemento=document.getElementById('1');
        elemento.innerHTML= "MATEMATICA: "+Notas[0];
        var elemento=document.getElementById('2');
        elemento.innerHTML= "LENGUA: "+Notas[1];
        var elemento=document.getElementById('3');
        elemento.innerHTML= "EFSI: "+Notas[2];
    }else{alert('Ingrese valores del 1 al 10');}  

}


function Promedio()
{
    var Notas=ObtenerRef();
    var Mate = Notas[0];
    var Lengua = Notas[1];
    var EFSI = Notas[2];
    var elemento = document.getElementById('texto2');
    var background=document.getElementById('bg');
    if(Mate <= 10 && Lengua<=10 && EFSI<=10 && Mate >0 && Lengua>0 && EFSI>0)
    {
        var i=0;
        var Prom = (Notas[0] + Notas[1] + Notas[2])/3;
        if(Prom>=6)
        {
            elemento.style.color="green";
        }else{elemento.style.color="red";}
        elemento.innerHTML=""+Prom;
    
    }else{alert('Ingrese valores del 1 al 10');}   
}

function Mayor()
{
    var Notas=ObtenerRef();
    var Mate = Notas[0];
    var Lengua = Notas[1];
    var EFSI = Notas[2];
    var strNotas=["Matematica","Lengua","EFSI"];
    var elemento = document.getElementById('texto');

    if(Mate <= 10 && Lengua<=10 && EFSI<=10 && Mate >0 && Lengua>0 && EFSI>0)
    {
        var masalta=0;
        var resultado=" ";

        for(var i=0;i<3;i++)
        {
            if(Notas[i] > masalta)
            {
                masalta=Notas[i];
                resultado=""+strNotas[i];
            }else if(Notas[i]==masalta)
            {
                resultado+=" y "+strNotas[i];
            }
            
        }
        elemento.innerHTML=""+resultado;
    }else
        {
            alert('Ingrese valores del 1 al 10');
        }
       

}