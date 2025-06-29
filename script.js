let i1 = document.getElementById("icon1");
let i2 = document.getElementById("icon2");
let tog = document.getElementById("nav1");
let nav = document.querySelector(".navbar");
let home1 = document.querySelector(".home");
let search1 = document.getElementById("find");
let ssb = document.getElementById("sb");
let ssm = document.getElementById("movie");
let sbb = document.querySelector(".boxpara");
let voting = document.querySelector(".vote");

function fun1() {
    i1.style.display = "none";
    i2.style.display = "block";
    tog.style.display = "block";
}

function fun2() {
    i1.style.display = "block";
    i2.style.display = "none";
    tog.style.display = "none";
}

function dark() {
    nav.classList.toggle("navtog");
    if (home1) home1.classList.toggle("hometog");
    if (search1) search1.classList.toggle("sertog");
    if (ssm) ssm.style.backgroundColor = "white";
    if (ssb) ssb.style.color = "white";
    if (sbb) sbb.style.backgroundColor = "white";
    if (voting) voting.classList.toggle("hometog");
    if (main) main.classList.toggle("hometog");

    if (nav.classList.contains("navtog")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        nav.classList.add("navtog");
        if (home1) home1.classList.add("hometog");
        if (search1) search1.classList.add("sertog");
        if (ssm) ssm.style.backgroundColor = "white";
        if (ssb) ssb.style.color = "white";
        if (sbb) sbb.style.backgroundColor = "white";
        if (voting) voting.classList.add("hometog");
        if (main) main.classList.add("hometog");
    }
}



let searchInput = document.getElementById("movie");
if (searchInput) {
    let search = searchInput.value.toLowerCase();
}




const movies = [
    {
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        poster: "image/tdk.jpg",
        description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos."
    },
    {
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        poster: "image/ti.jpg",
        description: "A skilled thief enters dreams to steal secrets and plant ideas in people's minds."
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        poster: "image/tti.jpg",
        description: "A team of explorers travels through a wormhole in space to ensure humanity’s survival."
    },
    {
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        poster: "image/tt.webp",
        description: "A poor artist and a rich woman fall in love aboard the doomed Titanic ship."
    },
    {
        title: "Joker",
        genre: "Drama",
        year: 2019,
        poster: "image/tj.jpg",
        description: "A failed comedian spirals into madness and becomes the infamous Joker."
    },
    {
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        poster: "image/ae.webp",
        description: "The Avengers assemble once more to reverse Thanos's snap and save the universe."
    },
    {
        title: "Parasite",
        genre: "Thriller",
        year: 2019,
        poster: "image/tp.webp",
        description: "A poor family schemes to infiltrate a wealthy household, leading to unexpected consequences."
    },
    {
        title: "The Conjuring",
        genre: "Horror",
        year: 2013,
        poster: "image/tc.jpg",
        description: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse."
    },
    {
        title: "The Notebook",
        genre: "Romance",
        year: 2004,
        poster: "image/tn.jpg",
        description: "A heartwarming love story of a couple from different worlds that endures through time."
    },
    {
        title: "John Wick",
        genre: "Action",
        year: 2014,
        poster: "image/jw.webp",
        description: "A retired hitman seeks vengeance after gangsters kill his beloved dog."
    },
    {
        title: "Black Panther",
        genre: "Action",
        year: 2018,
        poster: "image/bp.webp",
        description: "T'Challa returns to Wakanda to take the throne and faces a powerful enemy."
    },
    {
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        poster: "image/tm.webp",
        description: "A hacker discovers the reality he knows is a simulation and fights against its controllers."
    },
    {
        title: "Frozen",
        genre: "Animation",
        year: 2013,
        poster: "image/frozen.jpg",
        description: "A princess sets out to find her sister, whose icy powers have trapped their kingdom in winter."
    },
    {
        title: "La La Land",
        genre: "Musical",
        year: 2016,
        poster: "image/lll.webp",
        description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in LA."
    },
    {
        title: "Shutter Island",
        genre: "Mystery",
        year: 2010,
        poster: "image/si.webp",
        description: "A U.S. Marshal investigates a missing patient at a psychiatric facility on an isolated island."
    },
    {
        title: "The Godfather",
        genre: "Crime",
        year: 1972,
        poster: "image/gf.webp",
        description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
    },
    {
        title: "Spider-Man: No Way Home",
        genre: "Action",
        year: 2021,
        poster: "image/spnwh.jpg",
        description: "Peter Parker seeks help to restore his secret identity, but things spiral out of control."
    },
    {
        title: "Coco",
        genre: "Animation",
        year: 2017,
        poster: "image/coco.avif",
        description: "A boy embarks on a journey in the Land of the Dead to discover his family's music ban."
    },
    {
        title: "Thor Ragnorok",
        genre: "Action",
        year: 2017,
        poster: "image/box.avif",
        description: "Thor must battle the Hulk in a gladiatorial duel and save his home world from the all-powerful Hela."
    }
];

let main = document.querySelector(".s2")

function list() {
    let hh1 = document.querySelector(".search");
    hh1.style.height = "auto";
    let search = document.getElementById("movie").value.toLowerCase();
    let r = movies.filter(a => a.genre.toLowerCase() == search);

    let page = document.querySelector(".s2");
    page.innerHTML = "";

    for (let i of r) {
        let card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `<div class="img">
            <img src="${i.poster}" alt="${i.title}">
        </div>
        <div class="boxpara">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <p>Genre: ${i.genre}</p>
            <p>Year: ${i.year}</p>
        </div>`
        main.append(card);
    }
}

function funcut() {
    let search = document.getElementById("movie").value;
    let cut = document.querySelector(".x");
    if (search !== "") {
        cut.style.display = "block";
    } else {
        cut.style.display = "none";
    }
}

function empty() {
    let search = document.getElementById("movie");
    search.value = "";
    funcut();
}

function direct() {
    window.location.href = "home.html";
}

function funhappy() {
    let r = movies.filter(a => a.genre == "Romance" || a.genre == "Animation");

    let page = document.querySelector(".s2");
    page.innerHTML = "";

    for (let i of r) {
        let card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `<div class="img">
            <img src="${i.poster}" alt="${i.title}">
        </div>
        <div class="boxpara">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <p>Genre: ${i.genre}</p>
            <p>Year: ${i.year}</p>
        </div>`
        main.append(card);
    }
}

function funmedium() {
    let r = movies.filter(a => a.genre == "Crime" || a.genre == "Action");

    let page = document.querySelector(".s2");
    page.innerHTML = "";

    for (let i of r) {
        let card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `<div class="img">
            <img src="${i.poster}" alt="${i.title}">
        </div>
        <div class="boxpara">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <p>Genre: ${i.genre}</p>
            <p>Year: ${i.year}</p>
        </div>`
        main.append(card);
    }
}

function funsad() {
    let r = movies.filter(a => a.genre == "Drama" || a.genre == "Musical" || a.genre == "Mystery");

    let page = document.querySelector(".s2");
    page.innerHTML = "";

    for (let i of r) {
        let card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `<div class="img">
            <img src="${i.poster}" alt="${i.title}">
        </div>
        <div class="boxpara">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <p>Genre: ${i.genre}</p>
            <p>Year: ${i.year}</p>
        </div>`
        main.append(card);
    }
}


function plus1() {
    let vote1 = document.getElementById("v1");
    let give1 = parseInt(vote1.innerHTML);
    give1++;
    vote1.innerHTML = give1;
}

function plus2() {
    let vote1 = document.getElementById("v2");
    let give1 = parseInt(vote1.innerHTML);
    give1++;
    vote1.innerHTML = give1;
}

function plus3() {
    let vote1 = document.getElementById("v3");
    let give1 = parseInt(vote1.innerHTML);
    give1++;
    vote1.innerHTML = give1;
}

function plus4() {
    let vote1 = document.getElementById("v4");
    let give1 = parseInt(vote1.innerHTML);
    give1++;
    vote1.innerHTML = give1;
}

function plus5() {
    let vote1 = document.getElementById("v5");
    let give1 = parseInt(vote1.innerHTML);
    give1++;
    vote1.innerHTML = give1;
}