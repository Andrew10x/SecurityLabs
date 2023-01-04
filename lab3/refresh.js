var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://kpi.eu.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
    client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
    refresh_token: 'dhmtbGiSSQC73PZmurlqH1D_WHI8L0aQf2rWo3V-1T1CQ'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});