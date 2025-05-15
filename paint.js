   // <canvas width="600" height="400"></canvas>
    const canvas = document.getElementById("miCanvas");
    
    var botonAumentar = document.getElementById("botonAumentar");
    var botonDisminuir = document.getElementById("botonDisminuir");
    var botonGuardar = document.getElementById("botonGuardar");

    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

    pincel.fillStyle = '#F2F3F4';
    pincel.fillRect(0, 0, 600, 400);

    var puedoDibujar = false;
    var colores =["black","grey","#641E16","red","orange",
                "yellow","green","blue","darkblue","purple"];
    var colores1 =["white","lightgrey","brown","pink","gold",
                "lightyellow","lightgreen","lightblue","#1F618D","violet"];            
    var auxiliar = 0;
    var coloresAuxiliar = colores;
    var radio = 1.5;

    //funcion para dibujar circulos
    function dibujarCirculo(x,y) {
        if(puedoDibujar) {
            /*var x = evento.pageX - pantalla.offsetLeft;
            var y = evento.pageY - pantalla.offsetTop;*/
            pincel.fillStyle = coloresAuxiliar[auxiliar];
            pincel.beginPath();
            pincel.arc(x, y, radio, 0, 2 * 3.14);
            pincel.fill();
        }
    }
    //funcion que dibuja cuadrados
    function dibujarRectangulo(x, y, base, altura, color) {
        var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");

        pincel.fillStyle = color;
        pincel.strokeStyle = "white";//es el color del borde
        pincel.fillRect(x,y, base, altura);
        pincel.strokeRect(x,y,15,15);// dibuja el borde del cuadrado
    }
    //funcion que permite habilitar el dibujar
    function habilitarDibujar() {

        puedoDibujar = true;
    }
    //funcion que deshabilita el dibujar
    function deshabilitarDibujar() {

        puedoDibujar = false;
    }
    //funcion que habilita un espacio para escoger el color
    function obtenerPosicionColor(evento){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;

        if ((x < 15 )&&(x >= 0)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 0;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 0;
                    coloresAuxiliar = colores1;
                }
            }    
        if ((x < 30 )&&(x >= 15)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 1;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 1;
                    coloresAuxiliar = colores1;
                }
            }
        if ((x < 45 )&&(x >= 30)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 2;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 2;
                    coloresAuxiliar = colores1;
                }
            } 
        if ((x < 60 )&&(x >= 45)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 3;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 3;
                    coloresAuxiliar = colores1;
                }
            }  
        if ((x < 75 )&&(x >= 60)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 4;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 4;
                    coloresAuxiliar = colores1;
                }
            }
        if ((x < 90 )&&(x >= 75)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 5;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 5;
                    coloresAuxiliar = colores1;
                }
            }
        if ((x < 105 )&&(x >= 90)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 6;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 6;
                    coloresAuxiliar = colores1;
                }
            } 
        if ((x < 120 )&&(x >= 105)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 7;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 7;
                    coloresAuxiliar = colores1;
                }
            }              
        if ((x < 135 )&&(x >= 120)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 8;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 8;
                    coloresAuxiliar = colores1;
                }
            } 
        if ((x < 150 )&&(x >= 135)){
                if((y > 0)&&(y <=15 )){
                    auxiliar = 9;
                    coloresAuxiliar = colores;
                }
                else if((y > 15)&&(y <= 30 )){
                    auxiliar = 9;
                    coloresAuxiliar = colores1;
                }
            }        

    }
    //funcion que dibuja la paleta de colores
    function dibujarPaletaColores(y,escalaColores){
        for(var x = 0; x < (colores.length*15); x = x+15){
            dibujarRectangulo(x,y,15,15,escalaColores[x/15]);
        }
    }
    //Función para delimitar el área
    function puedeDisenharArea(xCoordenada,yCoordenada){
        if (xCoordenada >= 0 && (xCoordenada < (colores.length*15+20)) && 
            (yCoordenada >=0 && yCoordenada < (30+20))) {
            return false;
        } else{
            return true;
        }
    }    
    //captura la posicion del mouse
    function capturarMovimientoDelMouse(evento){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;
        if (puedeDisenharArea(x,y)){
            dibujarCirculo(x,y);
        }
    }
    //funcion que aumenta el tamaño de los circulos
    function botonAumento(){
        if(radio >=0.5 && radio < 20 ){
            radio = radio + 0.5;
            console.log(radio);
        } 
    }
    //funcion que disminuye el tamaño de los circulos
    function botonReduccion(){
        if(radio > 0.5 && radio <= 20 ){
            radio = radio - 0.5;
            console.log(radio);
        } 
    }

    function guardar(){
    const enlace = document.createElement("a");
    enlace.download = "mi_dibujo.png";
    enlace.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    enlace.click();        
    }

    botonDisminuir.onclick = botonReduccion;
    botonAumentar.onclick = botonAumento;
    pantalla.onmousemove = dibujarCirculo;
    pantalla.onmousemove = capturarMovimientoDelMouse;
    pantalla.onmousedown = habilitarDibujar;
    pantalla.onmouseup = deshabilitarDibujar;
    pantalla.onclick = obtenerPosicionColor;
    dibujarPaletaColores(0,colores);
    dibujarPaletaColores(15,colores1);
