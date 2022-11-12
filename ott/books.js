let products = {
  data: [
    {
      productName: "You Are Still the One ",
      subject:"love",
      author:"shashank",
      price: "30",
      image: "book1.png",
      date : "11-03-2019"
    },
    {
      productName: "Life's Amazing Secrets",
      subject:"action",
      author:"shashank",
      price: "49",
      image: "book2.png",
      date: "17-07-2022"
    },
    {
      productName: "The Power of Your Subconscious Mind",
      subject:"action",
      author:"shashank",
      price: "99",
      image: "book3.png",
      date: "17-07-2022"
    },
    {
      productName: "high School English Grammar",
      subject:"thriller",
      author:"sravani",
      price: "29",
      image: "book4.png",
      date: "17-07-2021"
    },
    {
      productName: "Black Leather Jacket",
      subject:"thriller",
      author:"sravani",
      price: "129",
      image: "book5.png",
      date: "17-07-2020"
    },
    {
      productName: "Stylish Pink Trousers",
      subject:"thriller",
      author:"sravani",
      price: "89",
      image: "book6.png",
      date: "17-07-2018"
    },
    {
      productName: "Brown Men's Jacket",
      subject:"peace",
      author:"chaitu",
      price: "189",
      image: "book7.png",
      date: "17-07-2018"
    },
    {
      productName: "Comfy Gray Pants",
      subject:"peace",
      author:"chaitu",
      price: "149",
      image: "book1.png",
      date: "17-07-2018"
    },
    {
      productName: "Comfy Gray Pants",
      subject:"thriller",
      author:"shashank",
      price: "249",
      image: "book2.png",
      date: "17-07-2022"
    },
    {
      productName: "Comfy Pants",
      subject:"thriller",
      author:"chaitu",
      price: "9",
      image: "book3.png",
      date: "17-07-2022"
    },
    {
      productName: "life of ram ",
      subject:"peace",
      author:"sravani",
      price: "8",
      image: "book4.png",
      date: "17-07-2017"
    },
    {
      productName: "Leather Jacket",
      subject:"action",
      author:"shashank",
      price: "40",
      image: "book5.png",
      date: "17-07-2001"
    },
    {
      productName: "Comfy Gray Pants",
      subject:"thriller",
      author:"chaitu",
      price: "70",
      image: "book6.png",
      date: "17-07-2022"
    },
    {
      productName: "Subconscious Mind",
      subject:"peace",
      author:"sravani",
      price: "60",
      image: "book7.png",
      date: "17-07-2021"
    },
    {
      productName: "Stylish Pink",
      subject:"peace",
      author:"shashank",
      price: "50",
      image: "book8.png",
      date: "17-07-2021"
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.subject, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  //author
  let author = document.createElement("h5");
  author.classList.add("author-name");
  author.innerText=i.author.toUpperCase();
  container.appendChild(author);
  // date
  let date = document.createElement("h5");
  date.classList.add("date");
  date.innerText=" published date:" + i.date.toUpperCase();
  container.appendChild(date);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  console.log(elements)
  console.log(authors)
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
document.getElementById("author").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("author").value;
  let authors= document.querySelectorAll(".author-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  authors.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
document.getElementById("search1").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("published").value.toString();
  let stringg=searchInput.slice(8,10)+"-"+searchInput.slice(5,7)+"-"+searchInput.slice(0,4);
  let datee= document.querySelectorAll(".date");
  let cards = document.querySelectorAll(".card");
  console.log(stringg);
  console.log(datee);
  //loop through all elements
  datee.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(stringg.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
