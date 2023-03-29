// POUR LE Swiper js

// Pour le menu deroulant

const TOGGLE = document.querySelector(".toggle");
const Menu = document.querySelector(".liens");

TOGGLE.addEventListener("click", () => {
  Menu.classList.toggle("active");
});

// POUR fixer le menu

const navbar = document.querySelector(".nav");
// const PARTIE = document.querySelectorAll(".partie");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight >= 40) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

console.log(window.pageYOffset);

//POUR  LE MENU

const menu = [
  {
    id: "1",
    titre: "brioche fourre",
    prix: 500,
    cathegorie: "dejeuner",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/brioche-fourree.jpg",
  },

  {
    id: "2",
    titre: " gateau au chocolat",
    prix: 800,
    cathegorie: "dessert",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/chocolat.jpg",
  },

  {
    id: "3",
    titre: "creme au chocolat",
    prix: 1000,
    cathegorie: "glace",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/creme-chocolat.png",
  },

  {
    id: "4",
    titre: "brioche au chocolat",
    prix: 650,
    cathegorie: "dejeuner",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/brioche-chocolat.jpg",
  },

  {
    id: "5",
    titre: "begnet",
    prix: 300,
    cathegorie: "dessert",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/begnet.jpg",
  },

  {
    id: "6",
    titre: "creme noisette",
    prix: 2000,
    cathegorie: "glace",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/creme-noisette.jpg",
  },

  {
    id: "7",
    titre: "brioche au raisin",
    prix: 1000,
    cathegorie: "dejeuner",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/brioche-raisin.png",
  },

  {
    id: "8",
    titre: "creppe",
    prix: 1500,
    cathegorie: "dejeuner",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/crepes.jpg",
  },

  {
    id: "9",
    titre: "creme vanille",
    prix: 1000,
    cathegorie: "glace",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-presseds `,

    image: "./images/creme-vanille.png",
  },

  {
    id: "10",
    titre: "Riz gras",
    prix: 2000,
    cathegorie: "repas",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,

    image: "./images/riz.png",
  },

  {
    id: "11",
    titre: "Steak",
    prix: 1000,
    cathegorie: "repas",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,

    image: "./images/steak.jpg",
  },
];

const LEMENU = document.querySelector(".le-menu");

const BOUTTONS = document.querySelectorAll(".boutton");

window.addEventListener("DOMContentLoaded", function () {
  DisplayElement(menu);
});

function DisplayElement(MenuItem) {
  let DisplayMenu = MenuItem.map(function (item) {
    return `<article class="element">

                <img src="${item.image}" class="image" alt="">


                <div class="element-entete">

                    <header class="notice">

                        <h1 class="nom">${item.titre}</h1>

                        <h1 class="prix"> ${item.prix} FCFA</h1>

                    </header>


                    <span class="ligne2">

                    </span>


                    <p class="description">

                      ${item.description}
                          </p>

                </div>


            </article>`;
  });

  DisplayMenu = DisplayMenu.join("");
  LEMENU.innerHTML = DisplayMenu;
}

BOUTTONS.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const data = e.currentTarget.dataset.id;
    const cathegorie = menu.filter(function (MenuCathegorie) {
      if (MenuCathegorie.cathegorie === data) {
        return MenuCathegorie;
      }
    });
    if (data === "tout") {
      DisplayElement(menu);
    } else {
      DisplayElement(cathegorie);
    }
  });
});
