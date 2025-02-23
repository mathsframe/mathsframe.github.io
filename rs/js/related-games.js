// Định nghĩa danh sách game
const relatedGames = [
  {
    title: "adventure drivers",
    url: "/games/adventure-drivers.html",
    image: "https://mathsframe.github.io/alllogo/adventure-drivers/logo.png",
  },
  {
    title: "car drawings",
    url: "/games/car-drawing.html",
    image: "https://mathsframe.github.io/alllogo/car-drawing/logo.jpeg",
  },
  {
    title: "cars simulator",
    url: "/games/cars-simulator.html",
    image: "https://mathsframe.github.io/alllogo/cars-simulator/logo.png",
  },
  {
    title: "drift hunters",
    url: "/games/drift-hunters.html",
    image: "https://mathsframe.github.io/alllogo/drift-hunters/logo.png",
  },
  {
    title: "drive mad",
    url: "/games/drive-mad.html",
    image: "https://mathsframe.github.io/alllogo/drive-mad/logo.jpg",
  },
  {
    title: "eggy car",
    url: "/games/eggy-car.html",
    image: "https://mathsframe.github.io/alllogo/eggy-car/logo.jpeg",
  },
  {
    title: "hilldraw",
    url: "/games/hilldraw.html",
    image: "https://mathsframe.github.io/alllogo/hilldraw/logo.png",
  },
  {
    title: "jellytruck",
    url: "/games/jellytruck.html",
    image: "https://mathsframe.github.io/alllogo/jellytruck/logo.png",
  },
  {
    title: "madalin stunt cars 2",
    url: "/games/madalin-stunt-cars-2.html",
    image: "https://mathsframe.github.io/alllogo/madalin-stunt-cars-2/logo.jpg",
  },
  {
    title: "madalin stunt cars 3",
    url: "/games/madalin-stunt-cars-3.html",
    image: "https://mathsframe.github.io/alllogo/madalin-stunt-cars-3/logo.jpg",
  },
  {
    title: "bitlife",
    url: "/games/bitlife.html",
    image: "https://mathsframe.github.io/alllogo/bitlife/logo.png",
  },
  {
    title: "capybara clicker",
    url: "/games/capybara-clicker.html",
    image: "https://mathsframe.github.io/alllogo/capybara-clicker/logo.png",
  },
  {
    title: "chess online",
    url: "/games/chess-online.html",
    image: "https://mathsframe.github.io/alllogo/chess-online/logo.png",
  },
  {
    title: "cookie clicker",
    url: "/games/cookie-clicker.html",
    image: "https://mathsframe.github.io/alllogo/cookie-clicker/logo.png",
  },
  {
    title: "foosball",
    url: "/games/foosball.html",
    image: "https://mathsframe.github.io/alllogo/foosball/logo.jfif",
  },
  {
    title: "geometry neon dash world two",
    url: "/games/geometryneondashworldtwo.html",
    image:
      "https://mathsframe.github.io/alllogo/geometryneondashworldtwo/logo.png",
  },
  {
    title: "zombie shooter",
    url: "/games/zombie-shooter.html",
    image: "https://mathsframe.github.io/alllogo/1hls/zombie-shooter/logo.png",
  },
  {
    title: "mace random",
    url: "/games/mace-random.html",
    image: "https://mathsframe.github.io/alllogo/mace-random/logo.png",
  },
  {
    title: "basket and ball",
    url: "/games/basket-and-ball.html",
    image: "https://mathsframe.github.io/alllogo/basket-and-ball/logo.jpg",
  },
  {
    title: "christmas fishing io",
    url: "/games/christmasfishingio.html",
    image: "https://mathsframe.github.io/alllogo/christmasfishingio/logo.png",
  },
  {
    title: "mini golf",
    url: "/games/edge-surf.html",
    image: "https://mathsframe.github.io/alllogo/mini-golf/logo.png",
  },
  {
    title: "Soccer Heads",
    url: "/games/SoccerHeads.html",
    image: "https://mathsframe.github.io/alllogo/1hls/SoccerHeads/logo.png",
  },
  {
    title: "moto x3m pool party",
    url: "/games/moto-x3m-pool-party.html",
    image:
      "https://mathsframe.github.io/alllogo/1hls/moto-x3m-pool-party/logo.png",
  },
  {
    title: "FNAF1",
    url: "/games/FNAF1.html",
    image: "https://mathsframe.github.io/alllogo/FNAF1/logo.jpg",
  },
  {
    title: "FNAF2 hack",
    url: "/games/FNAF2-hack.html",
    image: "https://mathsframe.github.io/alllogo/FNAF2-hack/logo.png",
  },
  {
    title: "FNAF2",
    url: "/games/FNAF2.html",
    image: "https://mathsframe.github.io/alllogo/FNAF2/logo.png",
  },
  {
    title: "FNAF3",
    url: "/games/FNAF3.html",
    image: "https://mathsframe.github.io/alllogo/FNAF3/logo.jfif",
  },
  {
    title: "FNAF4",
    url: "/games/FNAF4.html",
    image: "https://mathsframe.github.io/alllogo/FNAF4/logo.png",
  },
  {
    title: "Among Us",
    url: "/games/among-us.html",
    image: "https://mathsframe.github.io/alllogo/among-us/logo.png",
  },
  {
    title: "Awesome Tanks 2",
    url: "/games/awesometanks2.html",
    image: "https://mathsframe.github.io/alllogo/awesometanks2/logo.jpg",
  },
  {
    title: "Bejeweled",
    url: "/games/bejeweled.html",
    image: "https://mathsframe.github.io/alllogo/bejeweled/logo.jpg",
  },
  {
    title: "Chess Online",
    url: "/games/chess-online.html",
    image: "https://mathsframe.github.io/alllogo/chess-online/logo.png",
  },
  {
    title: "Hacker Type",
    url: "/games/hackertype.html",
    image: "https://mathsframe.github.io/alllogo/hackertype/logo.png",
  },
  {
    title: "Mineclone",
    url: "/games/mineclone.html",
    image: "https://mathsframe.github.io/alllogo/mineclone/logo.png",
  },
  {
    title: "8 Ball Pool",
    url: "/games/8-ball-pool.html",
    image: "https://mathsframe.github.io/alllogo/8-ball-pool/logo.png",
  },
  {
    title: "Math Duck",
    url: "/games/math-duck.html",
    image: "https://mathsframe.github.io/alllogo/math-duck/logo.webp",
  },
  {
    title: "Monkey Mart",
    url: "/games/monkey-mart.html",
    image: "https://mathsframe.github.io/alllogo/monkey-mart/logo.png",
  },
  {
    title: "Bacon May Die",
    url: "/games/bacon-may-die.html",
    image: "https://mathsframe.github.io/alllogo/bacon-may-die/logo.png",
  },
  {
    title: "Fast Math",
    url: "/games/fast-math.html",
    image: "https://mathsframe.github.io/alllogo/fast-math/logo.png",
  },
  {
    title: "Doge 2048",
    url: "/games/doge2048.html",
    image: "https://mathsframe.github.io/alllogo/doge2048/logo.jpeg",
  },
  {
    title: "Bouncing Hell",
    url: "/games/bouncinghell.html",
    image: "https://mathsframe.github.io/alllogo/bouncinghell/logo.png",
  },
  {
    title: "Helios",
    url: "/games/helios.html",
    image: "https://mathsframe.github.io/alllogo/helios/logo.jfif",
  },
  {
    title: "Among Dash",
    url: "/games/among-dash.html",
    image: "https://mathsframe.github.io/alllogo/among-dash/logo.png",
  },
  {
    title: "Aqua Park",
    url: "/games/aqua-park.html",
    image: "https://mathsframe.github.io/alllogo/aqua-park/logo.png",
  },
  {
    title: "Ball2",
    url: "/games/ball2.html",
    image: "https://mathsframe.github.io/alllogo/ball2/logo.jpg",
  },
  {
    title: "Geometry Rash",
    url: "/games/geometryrash.html",
    image: "https://mathsframe.github.io/alllogo/geometryrash/logo.jfif",
  },
  {
    title: "Death Run",
    url: "/games/deathrun.html",
    image: "https://mathsframe.github.io/alllogo/deathrun/logo.jpg",
  },
  {
    title: "GeoDash2",
    url: "/games/geodash2.html",
    image: "https://mathsframe.github.io/alllogo/geodash2/logo.png",
  },
  {
    title: "Geometry Neon Dash World Two",
    url: "/games/geometryneondashworldtwo.html",
    image:
      "https://mathsframe.github.io/alllogo/geometryneondashworldtwo/logo.png",
  },
  {
    title: "Mario",
    url: "/games/mario.html",
    image: "https://mathsframe.github.io/alllogo/mario/logo.jfif",
  },
  {
    title: "OVO",
    url: "/games/ovo.html",
    image: "https://mathsframe.github.io/alllogo/ovo/logo.png",
  },
  {
    title: "Pacman 3D",
    url: "/games/pacman3d.html",
    image: "https://mathsframe.github.io/alllogo/pacman3d/logo.jpg",
  },
  {
    title: "Flappy ZigZag",
    url: "/games/Flappy-ZigZag.html",
    image: "https://mathsframe.github.io/alllogo/Flappy-ZigZag/logo.png",
  },
  {
    title: "Backrooms 2D",
    url: "/games/backrooms-2d.html",
    image: "https://mathsframe.github.io/alllogo/backrooms-2d/logo.jpg",
  },
  {
    title: "Baldi's Basics Field Trip Camping Remake",
    url: "/games/baldisbasicsfieldtripcampingremake.html",
    image:
      "https://mathsframe.github.io/alllogo/baldisbasicsfieldtripcampingremake/logo.png",
  },
  {
    title: "1v1 lol",
    url: "/games/1v1-lol.html",
    image: "https://mathsframe.github.io/alllogo/1v1-lol/logo.png",
  },
  {
    title: "Archery Random",
    url: "/games/archery-random.html",
    image: "https://mathsframe.github.io/alllogo/archery-random/logo.jpeg",
  },
  {
    title: "Axe Random",
    url: "/games/axe-random.html",
    image: "https://mathsframe.github.io/alllogo/axe-random/logo.png",
  },
  {
    title: "Funny Shooter 2",
    url: "/games/funny-shooter-2.html",
    image: "https://mathsframe.github.io/alllogo/funny-shooter-2/logo.jpeg",
  },
  {
    title: "Funny Shooter",
    url: "/games/funny-shooter.html",
    image: "https://mathsframe.github.io/alllogo/funny-shooter/logo.jpeg",
  },
  {
    title: "Getaway Shootout",
    url: "/games/getawayshootout.html",
    image: "https://mathsframe.github.io/alllogo/getawayshootout/logo.jpg",
  },
  {
    title: "Gun Random",
    url: "/games/gun-random.html",
    image: "https://mathsframe.github.io/alllogo/gun-random/logo.png",
  },
  {
    title: "Justfall",
    url: "/games/justfall.html",
    image: "https://mathsframe.github.io/alllogo/justfall/logo.jpg",
  },
  {
    title: "Mr Bullet",
    url: "/games/mr-bullet.html",
    image: "https://mathsframe.github.io/alllogo/mr-bullet/logo.png",
  },
  {
    title: "Pacman FPS",
    url: "/games/pacmanfps.html",
    image: "https://mathsframe.github.io/alllogo/pacmanfps/logo.jpg",
  },
  {
    title: "Galaga Mini",
    url: "/games/GalagaMini.html",
    image: "https://mathsframe.github.io/alllogo/GalagaMini/logo.png",
  },
  {
    title: "Antiterroristrush 3",
    url: "/games/antiterroristrush3.html",
    image: "https://mathsframe.github.io/alllogo/antiterroristrush3/logo.png",
  },
  {
    title: "Archer Master 3D Castle Defense",
    url: "/games/archer-master-3d-castle-defense.html",
    image:
      "https://mathsframe.github.io/alllogo/archer-master-3d-castle-defense/logo.png",
  },
  {
    title: "Blockpost",
    url: "/games/blockpost.html",
    image: "https://mathsframe.github.io/alllogo/blockpost/logo.png",
  },
  {
    title: "Knife Hit",
    url: "/games/knife-hit.html",
    image: "https://mathsframe.github.io/alllogo/knife-hit/logo.png",
  },
  {
    title: "Lethal Sniper 3D Army Soldier",
    url: "/games/lethal-sniper-3d-army-soldier.html",
    image:
      "https://mathsframe.github.io/alllogo/lethal-sniper-3d-army-soldier/logo.png",
  },
  {
    title: "Mace Random",
    url: "/games/mace-random.html",
    image: "https://mathsframe.github.io/alllogo/mace-random/logo.png",
  },
  {
    title: "Time Shooter",
    url: "/games/Time-Shooter.html",
    image: "https://mathsframe.github.io/alllogo/1hls/Time-Shooter/logo.png",
  },
  {
    title: "Zombie Shooter",
    url: "/games/zombie-shooter.html",
    image: "https://mathsframe.github.io/alllogo/1hls/zombie-shooter/logo.png",
  },
  {
    title: "Basket Random",
    url: "/games/basket-random.html",
    image: "https://mathsframe.github.io/alllogo/basket-random/logo.jpeg",
  },
  {
    title: "Boxing Random",
    url: "/games/boxing-random.html",
    image: "https://mathsframe.github.io/alllogo/boxing-random/logo.png",
  },
  {
    title: "Fishing Game",
    url: "/games/fishing-game.html",
    image: "https://mathsframe.github.io/alllogo/fishing-game/logo.png",
  },
  {
    title: "Foosball",
    url: "/games/foosball.html",
    image: "https://mathsframe.github.io/alllogo/foosball/logo.jfif",
  },
  {
    title: "Friday Night Funkin",
    url: "/games/fridaynightfunkin.html",
    image: "https://mathsframe.github.io/alllogo/fridaynightfunkin/logo.jpg",
  },
  {
    title: "Getting Over It",
    url: "/games/getting-over-it.html",
    image: "https://mathsframe.github.io/alllogo/getting-over-it/logo.jpg",
  },
  {
    title: "Go Ball",
    url: "/games/go-ball.html",
    image: "https://mathsframe.github.io/alllogo/go-ball/logo.jpg",
  },
  {
    title: "Golf Battle",
    url: "/games/golf-battle.html",
    image: "https://mathsframe.github.io/alllogo/golf-battle/logo.jpeg",
  },
  {
    title: "Moto X3M 2",
    url: "/games/moto-x3m-2.html",
    image: "https://mathsframe.github.io/alllogo/moto-x3m-2/logo.png",
  },
  {
    title: "Moto X3M",
    url: "/games/motox3m.html",
    image: "https://mathsframe.github.io/alllogo/motox3m/logo.jpg",
  },
  {
    title: "Cannon Basketball 4",
    url: "/games/cannon-basketball-4.html",
    image: "https://mathsframe.github.io/alllogo/cannon-basketball-4/logo.jfif",
  },
  {
    title: "Basket and Ball",
    url: "/games/basket-and-ball.html",
    image: "https://mathsframe.github.io/alllogo/basket-and-ball/logo.jpg",
  },
  {
    title: "Christmas Fishing IO",
    url: "/games/christmasfishingio.html",
    image: "https://mathsframe.github.io/alllogo/christmasfishingio/logo.png",
  },
  {
    title: "Edge Surf",
    url: "/games/edge-surf.html",
    image: "https://mathsframe.github.io/alllogo/edge-surf/logo.jpg",
  },
  {
    title: "Fruit Ninja",
    url: "/games/fruit-ninja.html",
    image: "https://mathsframe.github.io/alllogo/fruit-ninja/logo.jpg",
  },
  {
    title: "Goal in One",
    url: "/games/goal-in-one.html",
    image: "https://mathsframe.github.io/alllogo/goal-in-one/logo.jpeg",
  },
  {
    title: "Mini Golf",
    url: "/games/mini-golf.html",
    image: "https://mathsframe.github.io/alllogo/mini-golf/logo.png",
  },
  {
    title: "Soccer Heads",
    url: "/games/SoccerHeads.html",
    image: "https://mathsframe.github.io/alllogo/1hls/SoccerHeads/logo.png",
  },
  {
    title: "Soccer Heroes",
    url: "/games/SoccerHeroes.html",
    image: "https://mathsframe.github.io/alllogo/1hls/SoccerHeroes/logo.png",
  },
  {
    title: "Moto X3M Pool Party",
    url: "/games/moto-x3m-pool-party.html",
    image:
      "https://mathsframe.github.io/alllogo/1hls/moto-x3m-pool-party/logo.png",
  },
  {
    title: "247 Solitaire",
    url: "/games/247-solitaire.html",
    image: "https://mathsframe.github.io/alllogo/247-solitaire/logo.png",
  },
  {
    title: "2048",
    url: "/games/2048.html",
    image: "https://mathsframe.github.io/alllogo/2048/logo.png",
  },
  {
    title: "Bear on a Scooter",
    url: "/games/bearonascooter.html",
    image: "https://mathsframe.github.io/alllogo/bearonascooter/logo.png",
  },
  {
    title: "Block the Pig",
    url: "/games/block-the-pig.html",
    image: "https://mathsframe.github.io/alllogo/block-the-pig/logo.png",
  },
  {
    title: "Bounce Ball Unblocked",
    url: "/games/bounce-ball-unblocked.html",
    image:
      "https://mathsframe.github.io/alllogo/bounce-ball-unblocked/logo.png",
  },
  {
    title: "DeathCar.io",
    url: "/games/deathcario.html",
    image: "https://mathsframe.github.io/alllogo/deathcario/logo.png",
  },
  {
    title: "Drift Boss",
    url: "/games/drift-boss.html",
    image: "https://mathsframe.github.io/alllogo/drift-boss/logo.png",
  },
  {
    title: "Rocket League",
    url: "/games/rocket-league.html",
    image: "https://mathsframe.github.io/alllogo/1hls/rocket-league/logo.webp",
  },
  {
    title: "Rooftop Snipers",
    url: "/games/rooftop-snipers.html",
    image: "https://mathsframe.github.io/alllogo/1hls/rooftop-snipers/logo.png",
  },
  {
    title: "Skibiti Toilet Attack",
    url: "/games/skibiti-toilet-attack.html",
    image:
      "https://mathsframe.github.io/alllogo/1hls/skibiti-toilet-attack/logo.png",
  },
  {
    title: "Smash Karts",
    url: "/games/smash-karts.html",
    image: "https://mathsframe.github.io/alllogo/1hls/smash-karts/logo.png",
  },
  {
    title: "Time Shooter 2",
    url: "/games/time-shooter-2.html",
    image: "https://mathsframe.github.io/alllogo/1hls/time-shooter-2/logo.jpg",
  },
  {
    title: "Time Shooter 3",
    url: "/games/time-shooter-3.html",
    image: "https://mathsframe.github.io/alllogo/1hls/time-shooter-3/logo.jfif",
  },
  {
    title: "Tiny Fishing",
    url: "/games/tiny-fishing.html",
    image: "https://mathsframe.github.io/alllogo/1hls/tiny-fishing/logo.png",
  },
  {
    title: "Tunnel Rush",
    url: "/games/tunnel-rush.html",
    image: "https://mathsframe.github.io/alllogo/1hls/tunnel-rush/logo.jpg",
  },
  {
    title: "Vex 3",
    url: "/games/vex3.html",
    image: "https://mathsframe.github.io/alllogo/1hls/vex3/logo.png",
  },
  {
    title: "Vex 4",
    url: "/games/vex4.html",
    image: "https://mathsframe.github.io/alllogo/1hls/vex4/logo.jpeg",
  },
  {
    title: "Run 3",
    url: "/games/run-3.html",
    image: "https://mathsframe.github.io/alllogo/1hls/run-3/logo.jpeg",
  },
  {
    title: "Jetpack",
    url: "/games/jetpack.html",
    image: "https://mathsframe.github.io/alllogo/jetpack/logo.jfif",
  },
  {
    title: "GeoDash",
    url: "/games/geodash.html",
    image: "https://mathsframe.github.io/alllogo/geodash/logo.png",
  },

  // Thêm các game khác vào đây...
];

// Hàm lấy games ngẫu nhiên
function getRandomGames(count) {
  let shuffled = [...relatedGames];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count).map((game) => ({
    ...game,
    isHot: Math.random() > 0.5, // 50% cơ hội là HOT, 50% là NEW
  }));
}

// Hàm hiển thị games
function displayRandomGames() {
  try {
    const container = document.querySelector(".uk-grid-clayover");
    if (!container) {
      console.error("Container not found");
      return;
    }

    const randomGames = getRandomGames(100);
    const gamesHTML = randomGames
      .map(
        (game) => `
      <div class="uk-grid-game">
        <a class="uk-game-link" href="${game.url}">
          <div class="uk-wrap-image">
            <img
              width="95"
              height="95"
              src="${game.image}"
              title="${game.title}"
              alt="${game.title}"
            />
            <span class="text-overflow uk-game-title">${game.title}</span>
            ${
              game.isHot
                ? '<span class="sticker hot"></span>'
                : '<span class="sticker new"></span>'
            }
          </div>
        </a>
      </div>
    `
      )
      .join("");

    container.innerHTML = gamesHTML;
  } catch (error) {
    console.error("Error displaying random games:", error);
  }
}

// Đợi DOM load xong và chạy
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", displayRandomGames);
} else {
  displayRandomGames();
}
