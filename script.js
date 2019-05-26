window.onresize = function(){ location.reload();}
var productosEst = 0, ilustracionesEst = 0, canvasEst = 1;

var fP = document.getElementById("productosCuadro");
var fI = document.getElementById("ilustracionesCuadro");

function apagar() {
  fP.style.display = "none";
  fI.style.display = "none";
  clickEnProductos = 0;
  clickEnIlustraciones = 0;
}

function okta() {

  //PRODUCTOS ////////////////////////

  document.getElementById("productos").onclick = function()
  {
    if(productosEst==0){
      //cuadros
      if(canvasEst == 1){
        setTimeout(function(){fP.style.display = "block"}, 1000);}
      else {
        fP.style.display = "block";
      }
      fI.style.display = "none";
      //general
      document.getElementById("superior").style.bottom = "calc(100% - 64px)";
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
      //cuadros
      fP.style.display = "none";
      fI.style.display = "none";
      //general
      document.getElementById("superior").style.bottom = "68px";
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
    if(ilustracionesEst==0){
      //cuadros
      fP.style.display = "none";
      if(canvasEst == 1){
        setTimeout(function(){fI.style.display = "block"}, 1000);}
      else {
        fI.style.display = "block";
      }
      //general
      document.getElementById("superior").style.bottom = "calc(100% - 64px)";
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
      //cuadros
      fP.style.display = "none";
      fI.style.display = "none";
      //general
      document.getElementById("superior").style.bottom = "68px";
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
    apagar();

    if(canvasEst==1 || ilustracionesEst == 1 || productosEst == 1){
      //cuadros
      fP.style.display = "none";
      fI.style.display = "none";
      //general
      document.getElementById("superior").style.bottom = "calc(100% - 64px)";
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
      canvasEst = 0;
    }
    else {
      //cuadros
      fP.style.display = "none";
      fI.style.display = "none";
      //general
      document.getElementById("superior").style.bottom = "68px";
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
      canvasEst = 1;
    }


  };

}

okta();
