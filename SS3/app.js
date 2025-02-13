let products = {
  data: [
    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
      price: "35000",
      image:
        "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg",
    },

    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
      price: "34000",
      image:
        "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg",
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
      price: "35000",
      image:
        "https://shop.localbrand.vn/wp-content/uploads/2021/08/ao-thun-levents-floral-black.jpg",
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ BLACK",
      price: "22000",
      image:
        "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg",
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
      price: "38000",
      image:
        "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg",
    },

    {
      productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
      price: "42000",
      image:
        "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg",
    },

    {
      productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
      price: "37000",
      image:
        "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg",
    },

    {
      productName: "LEVENTS® EARTH TEE/ PURPLE",
      price: "36000",
      image:
        "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg",
    },

    {
      productName: "LEVENTS® PLAY LOGO TEE/ PINK",
      price: "29000",
      image:
        "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("text-center");

  let image = document.createElement("img");
  image.classList.add("card-img-top");
  image.setAttribute("src", i.image);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let name = document.createElement("h5");
  name.classList.add("card-title");
  name.innerText = i.productName.toUpperCase();
  cardBody.appendChild(name);

  let price = document.createElement("p");
  price.classList.add("card-text");
  price.innerText = i.price + " VND";
  cardBody.appendChild(price);

  card.appendChild(cardBody);
  document.getElementById("products").appendChild(card);
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let cards = document.querySelectorAll(".card");
  let productsName = document.querySelectorAll(".card-title");

  productsName.forEach((items, index) => {
    if (items.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
