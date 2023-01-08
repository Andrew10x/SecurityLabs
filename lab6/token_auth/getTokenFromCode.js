const axios = require('axios')
const code = 'oWqGcr4SV6IoCrRaN9urMmhwfzPKbSSj0U0j0YvaRN5bJ';
async function a(code) {
   
      var options = {
        method: 'POST',
        url: 'https://kpi.eu.auth0.com/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
          code: `${code}`,
          redirect_uri: "http://localhost:3000",
          client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
        })
      };
      
      axios.request(options).then(function (response) {
        const user = response.data;
        
        console.log(user);
      }).catch(function (error) {
        console.error(error);
      });
      return;
    }

a(code);