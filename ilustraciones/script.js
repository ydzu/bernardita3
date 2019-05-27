const cont = document.getElementsByClassName("unic")[0];

function addElement () {

  for(var i=0; i<cantidad; i++){
    var newDiv = document.createElement("div");//crea un elemento del tipo div
    var newDivName = document.createElement("p");
    var newDivPrice = document.createElement("p");
    newDivPrice.setAttribute("class", "price");
    var newContent = document.createTextNode(ilustraciones[i].name);
    var newPrice = document.createTextNode(ilustraciones[i].price);//nodo del texto que tiene adentro
    newDivName.appendChild(newContent); //añade texto al div creado.
    newDiv.appendChild(newDivName);
    newDivPrice.appendChild(newPrice); //añade texto al div creado.
    newDiv.appendChild(newDivPrice);
    newDiv.setAttribute("class", "oneIlus");//para que sea de clase onProduct
    newDiv.style.backgroundImage = "url(" + ilustraciones[i].imageURL + ")";
    cont.appendChild(newDiv);

  };

};

const ilustraciones = [
  {
    name: "Zapaz",
    price: "120$",
    purchaseLink: "http://falopa.com",
    imageURL: "https://bit.ly/2Qpqr27"
  },
  {
    name: "Lentes",
    price: "180$",
    purchaseLink: "http://falopa.com",
    imageURL: "https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/60801115_2366345263641086_3780610993407655936_o.jpg?_nc_cat=100&_nc_pt=1&_nc_ht=scontent.fscl6-1.fna&oh=d2ad4acf313d3e60034ec127251a30e4&oe=5D9EE706"
  },
  {
    name: "Seda boutique",
    price: "520$",
    purchaseLink: "http://falopa.com",
    imageURL: "https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/53732558_2320534068222206_6637239801206538240_o.jpg?_nc_cat=105&_nc_pt=1&_nc_ht=scontent.fscl6-1.fna&oh=399b92a184fadcd91747c74d8c6c91b1&oe=5D51D4F8"
  },
  {
    name: "Selfie",
    price: "300$",
    purchaseLink: "http://falopa.com",
    imageURL: "https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/60912655_2369120953363517_2249561929565601792_o.jpg?_nc_cat=105&_nc_pt=1&_nc_ht=scontent.fscl6-1.fna&oh=ea5948bdf7eac59d65b8a654d22f759f&oe=5D9555B3"
  },
  {
    name: "Arma",
    price: "160$",
    purchaseLink: "http://falopa.com",
    imageURL: "https://scontent.fscl6-1.fna.fbcdn.net/v/t31.0-8/25790990_2023302917945324_8630555252042188140_o.png?_nc_cat=109&_nc_pt=1&_nc_ht=scontent.fscl6-1.fna&oh=b98561c78e8f6be74f0c1d8429ae5b14&oe=5D5C9B6E"
  },
  {
    name: "Rosa",
    price: "220$",
    purchaseLink: "http://falopa.com",
    imageURL: "https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/47443226_2255974884678125_2529613403790508032_o.jpg?_nc_cat=107&_nc_pt=1&_nc_ht=scontent.fscl6-1.fna&oh=42f7ee08e535454d935c0dbab121c698&oe=5D9A3E10"
  },
]

const cantidad = ilustraciones.length;

addElement();
