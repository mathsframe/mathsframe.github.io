const gamesData = {
  getAll: function () {
    return [
      {
        title: "math duck",
        image: "https://mathsframe.github.io/alllogo/math-duck/logo.webp",
        url: "./games/math-duck.html",
        isHot: true,
      },
      {
        title: "fast math",
        image: "https://mathsframe.github.io/alllogo/fast-math/logo.png",
        url: "./games/fast-math.html",
        isHot: true,
      },
      {
        title: "1v1 lol",
        image: "https://mathsframe.github.io/alllogo/1v1-lol/logo.png",
        url: "./games/1v1-lol.html",
        isHot: true,
      },
      {
        title: "drift hunters",
        image: "https://mathsframe.github.io/alllogo/drift-hunters/logo.png",
        url: "./games/drift-hunters.html",
        isHot: true,
      },
      {
        title: "eggy car",
        image: "https://mathsframe.github.io/alllogo/eggy-car/logo.jpeg",
        url: "./games/eggy-car.html",
        isHot: false,
      },
    ];
  },
};

console.log("Games Data:", gamesData.getAll());
