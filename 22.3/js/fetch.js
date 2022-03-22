let url = "http://fs1.co.il/bus/bitcoin.php";
let elem = document.getElementById("root");

fetch(url)
  .then((res) => res.json())
  .then((crypto) => {
    console.log(crypto);
    render(crypto);
  })
  .catch((err) => {
    console.log(err);
    console.log("it not work");
  });
//create a div
// in the div place coin name, renk and price
let render = (data) => {
  console.log(data);
  let expensiveCoin = data.filter((coin) => coin.price_usd > 100);
  expensiveCoin.map((item) => {
    elem.innerHTML += `<div>
      <h3>${item.name}</h3>
      <h4>${item.price_usd}</h4>
      <h5>${item.rank}</h5>;
    </div>`;
    color();
  });
};

let changeColor = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      elem.style.backgroundColor = `rgb(${r},${g},${b})`;
      res();
    }, 200);
  });
};
let color = async () => {
  let randomTimes = Math.floor(Math.random() * 120);
  console.log(randomTimes);
  for (let i = 0; i < randomTimes; i++) {
    await changeColor();
  }
};
