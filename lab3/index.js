var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://kpi.eu.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
    username: 'svt.andrey1631@gmail.com',
    password: 'kulykPassword1!',
    audience: 'https://kpi.eu.auth0.com/api/v2/',
    scope: 'offline_access',
    client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
    client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
    realm: 'Username-Password-Authentication'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});