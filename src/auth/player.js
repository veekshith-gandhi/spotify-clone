const APIController = function () {
  let ClientId = "4cfbaa0af245425193ce399fddb84303";
  let ClientSecret = "7b71ecc87b044d43a8692aebf7a6e49e";
  var axios = require("axios").default;

  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: "akon" },
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "26f4c28537msh422e935be458bbdp138014jsnf6042a752e71",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
APIController();
