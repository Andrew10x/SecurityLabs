var request = require("request");

var options = { method: 'POST',
url: 'https://kpi.eu.auth0.com/api/v2/users',
headers: { 
    'content-type': 'application/json',
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVCZTlBZFhrMERaUjhmR1dZYjdkViJ9.eyJpc3MiOiJodHRwczovL2twaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiSkl2Q081YzJJQkhsQWUycGF0bjZsNnE1SDM1cXh0aTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3BpLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjcyODM5MzEyLCJleHAiOjE2NzI5MjU3MTIsImF6cCI6IkpJdkNPNWMySUJIbEFlMnBhdG42bDZxNUgzNXF4dGkwIiwic2NvcGUiOiJyZWFkOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.pEc7Axdmw98BkBH09BRp1WjHdnH9DyATAKiHt_A-M_INM9F7feSrGC2bMYbYgNLjlkAVID706Nc_amyo_-hKFpiK8U3c3h924kwWxZtuRhpd8Qyu97MfpmmqKeMjFUmEnVA5jUG1NyJuoPIgwUFT4W8C_0bAeuV52sS4dqXIog3Kirr_7syCb4HGv1GQ4dfTya3NqR8LBrkQkzGo3_xEtVD74EzyORrF4cQefeDgb99VF5jC3hDTo4OShPUTrkTrjOlGrKoUhZdtBH4j-og7eaGcK6DnIEqRnt-5m89M2y48ErP7qmqvQ6svqj45bcnKuombZrXDWsRPReMWGVvStQ'
},
body: JSON.stringify({
    "email": "svt.andrey1631@gmail.com",
    "user_metadata": {},
    "blocked": false,
    "email_verified": false,
    "app_metadata": {},
    "given_name": "Andriy",
    "family_name": "Kulyk",
    "name": "Andriy Kulyk",
    "nickname": "Andrew10x",
    "picture": "https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png",
    "user_id": "AndriyKulykIP-9612",
    "connection": 'Username-Password-Authentication',
    "password": "kulykPassword1!",
    "verify_email": false
  })
};

request(options, function(error, response, body) {
if(error) throw new Error(error);

console.log(body);
});