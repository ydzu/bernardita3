const leftCont = document.getElementsByClassName("left")[0];
const rightCont = document.getElementsByClassName("right")[0];

function addElement () {

  for(var i=0; i<cantidad; i++){
    var newDiv = document.createElement("div");//crea un elemento del tipo div
    var newDivName = document.createElement("p");
    var newContent = document.createTextNode(productos[i].name);//nodo del texto que tiene adentro
    newDivName.appendChild(newContent); //añade texto al div creado.
    newDiv.appendChild(newDivName);
    newDiv.setAttribute("class", "oneProduct");//para que sea de clase onProduct
    newDiv.style.backgroundImage = "url(" + productos[i].imageURL + ")";
    if(i < cantidad/2){
      leftCont.appendChild(newDiv);//lo agrego al left
    }
    else {
      rightCont.appendChild(newDiv);
    }
  };

};

const productos = [
  {
    name: "Esponja Azul",
    price: 120,
    purchaseLink: "http://falopa.com",
    imageURL: "https://www.beter.es/1836-large_default/esponja-de-malla-peeling.jpg"
  },
  {
    name: "Producto 2",
    price: 120,
    purchaseLink: "http://falopa.com",
    imageURL: "https://falabella.scene7.com/is/image/Falabella/5132658_1?$producto308$&wid=472&hei=472"
  },
  {
    name: "Producto 3",
    price: 120,
    purchaseLink: "http://falopa.com",
    imageURL: "https://promart.vteximg.com.br/arquivos/ids/284594-1000-1000/106207.jpg?v=636899275999030000"
  },
  {
    name: "Producto 4",
    price: 120,
    purchaseLink: "http://falopa.com",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFshnu0E4ESzuk8XrtE9IWv5Ct1I4HtB7ooXypoi9J3bQo434"
  },
  {
    name: "Producto 5",
    price: 120,
    purchaseLink: "http://falopa.com",
    imageURL: "https://www.farmaciasdirect.com/14449-large_default/suavinex-esponja-bano-infantil-rizo-suave.jpg"
  },
  {
    name: "Producto 6",
    price: 120,
    purchaseLink: "http://falopa.com",
    imageURL: "https://ae01.alicdn.com/kf/HTB1B1WNPpXXXXXAaFXXq6xXFXXXR/WOFO-ba-o-del-Loofah-Oval-suave-esponja-de-ba-o-cepillo-de-lavado-Scrubber-ducha.jpg"
  },
]

const cantidad = productos.length;

addElement();
