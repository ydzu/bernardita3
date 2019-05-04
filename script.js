window.onresize = function(){ location.reload();}
var productosEst = 0, ilustracionesEst = 0, canvasEst = 0;

var fP = document.getElementById("productosCuadro");
var fI = document.getElementById("ilustracionesCuadro");

function okta() {

  //FUNCION PARA PRENDER FRAMES ////////////////////////

  function turnOnFrame(fX){

      if (fX.style.display == "none"){
        fX.style.display = "block";
      }
      else{
        fX.style.display = "none";
      }
  }

  //VARIABLES PARA RECONOCER PRIMER CLICK ////////////////////////

  var clickEnProductos = 0;
  var clickEnIlustraciones = 0;

  //PRODUCTOS ////////////////////////

  document.getElementById("productos").onclick = function()
  {
    clickEnProductos = 1;
    if (clickEnIlustraciones == 1){
      turnOnFrame(fI);
    }
    turnOnFrame(fP);

    if(productosEst==0){
      //general
      document.getElementById("menuContainerMacro").style.height = "calc(100% - 8px)";
      document.getElementById("blue").style.top = "-84vh";
      document.getElementById("textoMasInfo").style.textDecoration = "none";
      document.getElementById("textoMasInfo").style.color = "#EE1D23";
      document.getElementById("masinfo").style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
      //productos
      document.getElementById("textoProductos").style.textDecoration = "line-through";
      document.getElementById("textoProductos").style.color = "white";
      document.getElementById("productos").style.backgroundColor = "#EE1D23";
      //ilustraciones
      document.getElementById("textoIlustraciones").style.textDecoration = "none";
      document.getElementById("textoIlustraciones").style.color = "#EE1D23";
      document.getElementById("ilustraciones").style.backgroundColor = "white";

      productosEst = 1;
      ilustracionesEst = 0;
      canvasEst = 0;
    }
    else{
      //general
      document.getElementById("menuContainerMacro").style.height = "124px";
      document.getElementById("blue").style.top = "4px";
      //productos
      document.getElementById("textoProductos").style.textDecoration = "none";
      document.getElementById("textoProductos").style.color = "#EE1D23";
      document.getElementById("productos").style.backgroundColor = "white";
      //ilustraciones
      document.getElementById("textoIlustraciones").style.textDecoration = "none";
      document.getElementById("textoIlustraciones").style.color = "#EE1D23";
      document.getElementById("ilustraciones").style.backgroundColor = "white";

      productosEst = 0;
      ilustracionesEst = 0;
      canvasEst = 1;

    }

  };


  //ILUSTRACIONES ////////////////////////

  document.getElementById("ilustraciones").onclick = function()
  {
    clickEnIlustraciones = 1;
    if (clickEnProductos == 1){
      turnOnFrame(fP);
    }
    turnOnFrame(fI);

    if(ilustracionesEst==0){
      //general
      document.getElementById("menuContainerMacro").style.height = "calc(100% - 8px)";
      document.getElementById("blue").style.top = "-84vh";
      document.getElementById("textoMasInfo").style.textDecoration = "none";
      document.getElementById("textoMasInfo").style.color = "#EE1D23";
      document.getElementById("masinfo").style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
      //productos
      document.getElementById("textoProductos").style.textDecoration = "none";
      document.getElementById("textoProductos").style.color = "#EE1D23";
      document.getElementById("productos").style.backgroundColor = "white";
      //ilustraciones
      document.getElementById("textoIlustraciones").style.textDecoration = "line-through";
      document.getElementById("textoIlustraciones").style.color = "white";
      document.getElementById("ilustraciones").style.backgroundColor = "#EE1D23";

      productosEst = 0;
      ilustracionesEst = 1;
      canvasEst = 0;
    }
    else {
      //general
      document.getElementById("menuContainerMacro").style.height = "124px";
      document.getElementById("blue").style.top = "4px";
      //productos
      document.getElementById("textoProductos").style.textDecoration = "none";
      document.getElementById("textoProductos").style.color = "#EE1D23";
      document.getElementById("productos").style.backgroundColor = "white";
      //ilustraciones
      document.getElementById("textoIlustraciones").style.textDecoration = "none";
      document.getElementById("textoIlustraciones").style.color = "#EE1D23";
      document.getElementById("ilustraciones").style.backgroundColor = "white";

      productosEst = 0;
      ilustracionesEst = 0;
      canvasEst = 1;
    }
  };

  //MAS INFO ////////////////////////

  document.getElementById("masinfo").onclick = function()
  {
    if(canvasEst==0){
      //general
      document.getElementById("menuContainerMacro").style.height = "calc(100% - 8px)";
      document.getElementById("blue").style.top = "-84vh";
      document.getElementById("textoMasInfo").style.textDecoration = "line-through";
      document.getElementById("textoMasInfo").style.color = "white";
      document.getElementById("masinfo").style.backgroundColor = "#EE1D23";
      document.body.style.backgroundColor = "#EE1D23";
      //productos
      document.getElementById("textoProductos").style.textDecoration = "none";
      document.getElementById("textoProductos").style.color = "#EE1D23";
      document.getElementById("productos").style.backgroundColor = "white";
      //ilustraciones
      document.getElementById("textoIlustraciones").style.textDecoration = "none";
      document.getElementById("textoIlustraciones").style.color = "#EE1D23";
      document.getElementById("ilustraciones").style.backgroundColor = "white";

      productosEst = 0;
      ilustracionesEst = 0;
      canvasEst = 1;
    }
    else {
      //general
      document.getElementById("menuContainerMacro").style.height = "124px";
      document.getElementById("blue").style.top = "4px";
      document.getElementById("textoMasInfo").style.textDecoration = "none";
      document.getElementById("textoMasInfo").style.color = "#EE1D23";
      document.getElementById("masinfo").style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
      //productos
      document.getElementById("textoProductos").style.textDecoration = "none";
      document.getElementById("textoProductos").style.color = "#EE1D23";
      document.getElementById("productos").style.backgroundColor = "white";
      //ilustraciones
      document.getElementById("textoIlustraciones").style.textDecoration = "none";
      document.getElementById("textoIlustraciones").style.color = "#EE1D23";
      document.getElementById("ilustraciones").style.backgroundColor = "white";

      productosEst = 0;
      ilustracionesEst = 0;
      canvasEst = 0;
    }


  };

}

okta();
