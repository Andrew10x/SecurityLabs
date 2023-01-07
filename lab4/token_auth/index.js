const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const userId = getUserId(token);

    var options = {
      method: 'GET',
      url: `https://kpi.eu.auth0.com/api/v2/users/${userId}`,
      headers: {ContentType: 'application/json', authorization: token}
    };
    
    axios.request(options).then(function (response) {
      const user = response.data;
      
      return res.json({
        username: user.name,
        logout: "http://localhost:3000/logout",
      });
    }).catch(function (error) {
      console.error(error);
    });
    return;
  }
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/login", async (req, res) => {
  const { login, password } = req.body;

  const options = makeAuthOptions(login, password);
  
  axios.request(options).then(function (response) {
    if (response.status === 200) {
      const { access_token, refresh_token, expires_in } = response.data;
      res.json({ success: true, access_token });
      return;
    }
    res.status(400).json(response.data);

  }).catch(function (error) {
    if(error.response.statusText === 'Too Many Requests' || error.response.statusText === 'Forbidden') 
      res.status(error.response.status).json();
    else
      console.error(error);
  });
});


function makeAuthOptions(login, password) {
  var options = {
    method: 'POST',
    url: 'https://kpi.eu.auth0.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      audience: 'https://kpi.eu.auth0.com/api/v2/',
      scope: 'offline_access',
      client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
      client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
      realm: 'Username-Password-Authentication'
    })
  };

  options.data.append('username', login);
  options.data.append('password', password);

  return options;
}

function getUserId(token) {
  return parseJwt(token).sub;
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
