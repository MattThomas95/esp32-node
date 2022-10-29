function App() {
    let savedRespone;
    const options = { method: "GET", headers: { accept: "application/json" } };
    const interval = setInterval(() => {
  
      console.log("This will run every 10 seconds!");
      fetch(
        "http://shielded-bastion-43828.herokuapp.com/https://streamlabs.com/api/v1.0/donations?access_token=3p9XMiyCYlkZQT28dUGjE1EjfpogTKediFp2xPxc",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          savedRespone = response;
          console.log("response", savedRespone["data"][0]);
        })
        .catch((err) => console.error(err));
    }, 10000);
    return () => clearInterval(interval);
    console.log()
}
    export default App;