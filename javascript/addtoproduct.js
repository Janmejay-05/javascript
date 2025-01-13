//declaration of variables
let text = document.getElementById("text");
let name = document.getElementById("name");
let price = document.getElementById("price");
let btn = document.getElementById("btn");
let cointainer = document.getElementById("cointainer");

//linking array to localStorge

let mainproduct = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];

//storing value
function store() {
  mainproduct.push({
    url: text.value,
    proName: name.value,
    proPrice: price.value,
  });
  localStorage.setItem("products", JSON.stringify(mainproduct));
  console.log(mainproduct);
}

//showing and adding element
function show() {
  cointainer.innerHTML = "";
  mainproduct.forEach((element, index) => {
    //declaring element
    let card = document.createElement("div");
    let image_cointainer = document.createElement("div");
    let image = document.createElement("img");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let einput = document.createElement("div");
    let eurl = document.createElement("input");
    let ename = document.createElement("input");
    let eprice = document.createElement("input");
    let change = document.createElement("button");
    let butt = document.createElement("div");
    let edit = document.createElement("button");
    let addtocart = document.createElement("button");
    let addedtocart = document.createElement("p");

    //css
    // cointainer.style.display = "flex";
    // cointainer.style.justifyContent = "space-between";
    // card.style.width = "50%";
    // card.style.height = "500px";
    // card.style.border = "1px solid black";
    // image_cointainer.style.width = "300px";
    // image_cointainer.style.height = "70%";
    // image.style.width = "100%";
    // image.style.height = "100%";
    eurl.type = "text";
    eurl.placeholder = "url";
    ename.type = "text";
    ename.placeholder = "name";
    eprice.type = "text";
    eprice.placeholder = "price";
    // einput.style.display = "none";
    // addedtocart.style.display = "none";

    //giving classes
    card.id = "card";
    image_cointainer.id = "image_cointainer";
    image.id = "image";
    para1.id = "para1";
    para2.id = "para2";
    einput.id = "einput";
    eurl.id = "eurl";
    ename.id = "ename";
    eprice.id = "eprice";
    change.id = "change";
    edit.id = "edit";
    addtocart.id = "addtocart";
    addedtocart.id = "addedtocart";
    butt.id = "butt";

    //implimenting
    image.src = element.url;
    para1.innerText = element.proName;
    para2.innerText = `$ ${element.proPrice}`;
    change.innerText = "Change";
    addtocart.innerText = "ADD to Cart";
    edit.innerText = "Edit";
    addedtocart.innerText = "Added to cart";

    //add cart listner
    addtocart.addEventListener("click", () => {
      console.log(element);
      cart.push({ ...element, quantity: 1 });
      console.log(cart);
      localStorage.setItem("cartProducts", JSON.stringify(cart));
      addtocart.style.display = "none";
      addedtocart.style.display = "block";
    });

    //add edit listner
    edit.addEventListener("click", () => {
      einput.style.display = "grid";
    });

    //add change listner
    change.addEventListener("click", () => {
      if (eurl.value === "" || ename === "" || eprice === "") {
        alert("edit something");
        return;
      } else {
        element.url = eurl.value;
        element.proName = ename.value;
        element.proPrice = eprice.value;
        localStorage.setItem("products", JSON.stringify(mainproduct));

        einput.style.display = "none";
        show();
      }
    });

    //appending
    image_cointainer.append(image);
    einput.append(eurl, ename, eprice, change);
    butt.append(edit, addtocart);
    card.append(image_cointainer, para1, para2, butt, einput, addedtocart);
    cointainer.append(card);
  });
}

btn.addEventListener("click", () => {
  if (text.value === "" || name.value === "" || price.value === "") {
    alert("enter the value");
    return;
  } else {
    store();
    show();
    text.value = "";
    name.value = "";
    price.value = "";
  }
});

show();
