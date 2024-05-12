const url = "https://6640b322a7500fcf1a9e76e0.mockapi.io/products";
const prod = document.getElementById("product");

getData();

async function getData() {
  const response = await fetch(url);
  if (response.ok) {
    try {
      const data = await response.json();
      getProducts(data);
    } catch (error) {
      console.error(error);
    }
  }
}

function getProducts(products) {
  products.forEach((item) => {
    prod.innerHTML += `
    <div class="col-md-3 cardItem">
    <div class="card mt-5" style="width: 18rem">
    <img src="${item.image}" class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title productName">${item.productName}</h5>
        <p class="card-text">${item.price}</p>

    <a href="#" class="btn btn-primary">Add To Cart</a>
    <a href="#" class="btn btn-dark">Dark Mode</a>
    </div>
    </div>
</div>
    `;
  });
}
