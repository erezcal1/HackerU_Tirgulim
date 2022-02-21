// const background_color = (time, color, time_to_Next) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     if (time_to_Next) {
//       time_to_Next();
//     }
//   }, time);
// };
// background_color(1000, "red", () => {
//   background_color(1000, "green");
// });

const render_Color = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.random();
      console.log(rand);
      if (rand > 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

render_Color()
  .then(() => {
    document.body.style.backgroundColor = "green";
  })
  .catch(() => {
    document.body.style.backgroundColor = "red";
  })
  .finally(() => {
    console.log("finished");
  });
