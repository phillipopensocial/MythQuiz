var Nexmo = require('nexmo');

var nexmo = new Nexmo({
  //apiKey: 'API_KEY',
  //apiSecret: 'API_SECRET',

  apiKey: '3382a98e',
  apiSecret: '35c0eefbec927ab6',
},{
  debug: true,
  //hosts: 'rest-nexmo-com-hr1bcb1qg77g.runscope.net',
});

//var from = 'Nexmo';
var from = '12016728823';
//var to = 'TO_NUMBER';
//var to = '14084802818';
//var to = '14436171959';
//var to = '13055028338';
var to = '18645028338';
//var to = process.env.TO_NUMBER;
var text = 'Test Win!';

//nexmo.message.sendSms(from, to, text, {host:'rest-nexmo-com-hr1bcb1qg77g.runscope.net'}, function(){} );


const https = require('https');

  https.get('https://rest-nexmo-com-hr1bcb1qg77g.runscope.net/sms/json?api_key=755c42fc&api_secret=0901a1735e2f4674&to=18645028338&from=12016728579&text=MESSAGE', () => {


  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

  
console.log( "Sent SMS to %s", to );
