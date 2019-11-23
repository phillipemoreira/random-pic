  function changeImage() {
      var keyword = "monster";

      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
              tags: keyword,
              tagmode: "any",
              format: "json"
          },
          function (data) {
              var rnd = Math.floor(Math.random() * data.items.length);
              var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
              document.getElementById("the-image").src = image_src;

          });

      document.getElementById("the-image").src = "https://images-eu.ssl-images-amazon.com/images/I/71oIx-9zYXL.png";
  }

  document.getElementById("the-button").addEventListener("click", function () {
      changeImage();
  });

  window.onload = function () {
      changeImage();
  };