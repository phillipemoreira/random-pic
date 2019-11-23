  function changeImage() {
      var keyword = "monster";

      document.getElementById('spinner-div').classList.remove('invisible');
      document.getElementById('image-container').classList.add('withOverlay');

      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
              tags: keyword,
              tagmode: "any",
              format: "json"
          },
          function (data) {
              var rnd = Math.floor(Math.random() * data.items.length);
              var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
              document.getElementById("the-image").src = image_src;

              setTimeout(() => {
                document.getElementById('spinner-div').classList.add('invisible');
                document.getElementById('image-container').classList.remove('withOverlay');
              }, 500);
          });
  }

  document.getElementById("the-button").addEventListener("click", function () {
      changeImage();
  });

  window.onload = function () {
      changeImage();
  };