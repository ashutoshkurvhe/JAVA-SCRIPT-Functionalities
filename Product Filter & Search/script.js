const productCont = document.querySelector('.product-container');
const searchInputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');



const products = {
  data: [
    {
      id: 1,
      name: "pink-hood",
      image: "images/hood1.png",
      price: "450",
      category: "hood",
    },
    {
      id: 2,
      name: "white-hood",
      image: "images/hood2.png",
      price: "400",
      category: "hood",
    },
    {
      id: 3,
      name: "black-hood",
      image: "images/hood3.png",
      price: "500",
      category: "hood",
    },
    {
      id: 4,
      name: "cotton-pants",
      image: "images/pants1.png",
      price: "320",
      category: "pants",
    },
    {
      id: 5,
      name: "denim-pants",
      image: "images/pants2.png",
      price: "340",
      category: "pants",
    },
    {
      id: 6,
      name: "trendy-shirts",
      image: "images/shirt1.png",
      price: "360",
      category: "shirts",
    },
    {
      id: 7,
      name: "funky-shirts",
      image: "images/shirt2.png",
      price: "300",
      category: "shirts",
    },
    {
      id: 8,
      name: "gray t-s",
      image: "images/t-shirts1.png",
      price: "350",
      category: "t-shirts",
    },
    {
      id: 9,
      name: "blue t-s",
      image: "images/t-shirts2.png",
      price: "400",
      category: "t-shirts",
    },
    {
      id: 10,
      name: "white t-s",
      image: "images/t-shirts3.png",
      price: "500",
      category: "t-shirts",
    },
    {
      id: 11,
      name: "watch1",
      image: "images/watch1.png",
      price: "500",
      category: "watch",
    },
    {
      id: 12,
      name: "watch2",
      image: "images/watch2.png",
      price: "500",
      category: "watch",
    },
    {
      id: 13,
      name: "watch3",
      image: "images/watch3.png",
      price: "500",
      category: "watch",
    },
  ],
};


for (const i of products.data) {
    let product = document.createElement('div');
    product.classList.add('product',i.category,'hide')

    let productImg = document.createElement('div');
    productImg.className = 'productImg';

    let img = document.createElement('img');
    img.setAttribute('src', i.image);

    productImg.appendChild(img);

    product.appendChild(productImg)


    let details = document.createElement('div');
    details.className = 'details';

    let productName = document.createElement('h3');
    productName.classList.add('product-name')
    productName.textContent = i.name;

    let productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${i.price}`;

    details.appendChild(productName);
    details.appendChild(productPrice)
    product.appendChild(details)
    
    productCont.appendChild(product)
}


function filterProduct(value) {
    filterBtns.forEach((btn) => {
        if (value.toUpperCase() === btn.innerText.toUpperCase()) {
            btn.classList.add('active')
        }
        else {
            btn.classList.remove('active')
        }
    })

    const productEl = document.querySelectorAll('.product');

    productEl.forEach((element) => {
        if (value === "all") {
            element.classList.remove('hide');
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove('hide');
            }
            else {
                element.classList.add('hide')
            }
        }
    })
}

searchBtnEl.addEventListener('click', () => {
    let searchValue = searchInputEl.value.toLowerCase();

    let productName = document.querySelectorAll('.product-name');
    
    let productEl = document.querySelectorAll('.product');

    productName.forEach((element, index) => {
        
        if (element.innerText.includes(searchValue)) {
            productEl[index].classList.remove('hide');
        }
        else {
            productEl[index].classList.add('hide');
        }
    })

})


window.onload = () => {
    filterProduct('all')
}
