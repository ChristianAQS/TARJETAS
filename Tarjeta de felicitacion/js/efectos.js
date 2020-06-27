function generar(){
    document.getElementById("resultado").style.display="block";
    
    var primero = document.getElementById("titu").value;
    document.getElementById("primero").innerHTML = primero;

    var segundo= document.getElementById("sub").value;
    document.getElementById("segundo").innerHTML= segundo;

    var tercero= document.getElementById("nom").value;
    document.getElementById("tercero").innerHTML= tercero;

    var textolong= document.getElementById("men").value;
    document.getElementById("textolong").innerHTML= textolong;


    var i;

    var a = document.getElementsByName("opcion");
    var b = document.getElementsByName("i");
    var c = document.getElementsByName("c");

    for(i=0; i<a.length; i++)
    {
        if (a[i].checked){
            var e= a[i].value;
        }

        
    }

    for(i=0; i<b.length; i++)
    {
        if (b[i].checked){
            var f= b[i].value;
        }

        
    }

    for(i=0; i<c.length; i++)
    {
        if (c[i].checked){
            var g= c[i].value;
        }

        
    }

    switch (e){
        case 's':
            document.getElementById("temple").src="../img/sanva.png";
            break;

        case 'f':
            document.getElementById("temple").src="../img/FELIZ CUMPLEAÑOS.png";
            break;

        case 'm':
            document.getElementById("temple").src="../img/motivacional.png";
            break;
    }

    switch(f){
        case 'a':
            document.getElementById("imagen").src="../img/cora.jpg";
            break;

        case 'b':
            document.getElementById("imagen").src="../img/fipi.jpg";
            break;

        case 'c':
            document.getElementById("imagen").src="../img/go.jpg"
            break;
    }

    switch (g){
        case'x':
            document.getElementById("resultado").style.backgroundColor="#e67e22";
        break;

        case'y':
            document.getElementById("resultado").style.backgroundColor="#8e44ad";
        break;

        case'z':
            document.getElementById("resultado").style.backgroundColor="#c0392b";
        break;
    }
    
}