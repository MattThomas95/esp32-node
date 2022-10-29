// fetch(
//   `https://shielded-bastion-43828.herokuapp.com/https://streamlabs.com/api/v1.0/donations?access_token=${message}`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log("response", response);
//   })
//   .catch((err) => console.error(err));

// let request = new XMLHttpRequest();
// request.open("GET", `https://shielded-bastion-43828.herokuapp.com/https://streamlabs.com/api/v1.0/donations?access_token=3p9XMiyCYlkZQT28dUGjE1EjfpogTKediFp2xPxc`);
// request.send();
// request.onload = () => {
//     console.log(request);
//     if(request.status === 200){
//         console.log(JSON.parse(request.response));
//     }else {
//         console.log(`error ${request.status} ${request.statusText}`)
//     }
// }

const https = require('https')
const url = "https://streamlabs.com/api/v1.0/donations?access_token=3p9XMiyCYlkZQT28dUGjE1EjfpogTKediFp2xPxc";
https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data["data"][0]["amount"]);
  })
}).on('error', err => {
  console.log(err.message);
})
