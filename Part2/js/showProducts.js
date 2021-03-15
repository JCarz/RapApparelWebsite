window.onload = function () {
  show_products(products);
};
//runs the function and shows all the products in the array

function show_products(product_list) {
  //get search query text
  var search_term = window.location.search.split("text=")[1];
  if (search_term === undefined) {
    //This is a variable that window.location.search gives the address bar parameters, This splits the text by the charaters in the search bar everything on the right of the equals sign is what the user types
    //add search query into search box

    search_term = "";
    document.querySelector("#search_box").value = search_term;
  }
  // this puts the search term back in the search box
  // ensure the term isnt empty

  var product_template = `
    <div class="product">
        <h3><a href="productPage.html?id=<ID>"><TITLE></a></h3>
        <a href="productPage.html?id=<ID>"><img src="<IMAGE>" style="width: 100%";></a>
        <p>Price: $<PRICE></p>
        <p>Rating: <RATING>/5</p>
        <a href="#" class="btn btn-outline-dark md">Add to Cart</a>
    </div>`;
  //Product template for the results
  document.querySelector("#product_list").innerHTML = " ";
  //before products are added they are taken away first
  //loop though all prod
  product_list.forEach(function (product) {
    //check id the product title matchs with query
    if (product.title.toLowerCase().includes(search_term.toLowerCase())) {
      //use the product template to match
      var product_html = product_template.replaceAll("<ID>", product.id);
      product_html = product_html.replace("<TITLE>", product.title);
      product_html = product_html.replace("<IMAGE>", product.image);
      product_html = product_html.replace("<PRICE>", product.price);
      product_html = product_html.replace("<RATING>", product.rating);

      document.querySelector("#product_list").innerHTML += product_html;
    }
  });
}
function clear() {
          document.querySelector("#search_box").value = ''
}
function sort(field, order) {
  if (field == "price") {
    if (order == "l2h") {
      show_products(
        products.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    } else if (order == "h2l") {
      show_products(
        products.sort(function (a, b) {
          return b.price - a.price;
        })
      );
    }
  } else if (field == "rating") {
    if (order == "l2h") {
      show_products(
        products.sort(function (a, b) {
          return a.rating - b.rating;
        })
      );
    } else if (order == "h2l") {
      show_products(
        products.sort(function (a, b) {
          return b.rating - a.rating;
        })
      );
    }
  }
}
function filter(field) {
  if (field == "price") {
    var low = document.querySelector("#f-p-low").value || 0;
    var high = document.querySelector("#f-p-high").value || 9999;

    show_products(
      products.filter(function (a) {
        if (a.price >= low && a.price <= high) {
          return true;
        } else {
          return false;
        }
      })
    );
  } else if (field == "rating") {
    var low = document.querySelector("#f-r-low").value || 0;
    var low = document.querySelector("#f-r-high").value || 5;

    show_products(
      products.filter(function (a) {
        if (a.rating >= low && a.rating <= high) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
