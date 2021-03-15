window.onload = function () {
  //get product ID
  var url_id = window.location.search.split("id=")[1];

  //ensure prod id is not empty
  if (url_id !== "") {
    //loop through each prod

    products.forEach(function (product) {
      //check if the current product Id matches from URL
      if (product.id == url_id) {
        // add product data to webpage
        document.querySelector("#title").innerHTML = product.title;
        document.querySelector("#price").innerHTML = product.price;
        document.querySelector("#rating").innerHTML = product.rating;
        document.querySelector("#image").src = product.image;
        document.querySelector("#description").innerHTML = product.description;
      }
    });
  }
};
