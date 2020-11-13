const categorie = [{
        titre: 'MOBA',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-warning'
    },
    {
        titre: 'Jeu Multijoueur',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-primary'
    },
    {
        titre: 'Jeu Solo',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-info'
    },
    {
        titre: 'MMORPG',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-secondary'
    },
    {
        titre: 'Jeu de foot',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-dark'
    },
    {
        titre: 'FPS',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-danger'
    },
    {
        titre: 'Battle Royale',
        classe: 'card-subtitle mb-2 text-white badge badge-pill badge-success'
    }
]



const collection = [{
        title: 'World of warcraft',
        image: './photos/worldOfWarcraft.jpg',
        developper: 'Blizzard Entertainment',
        category: [categorie[1], categorie[3]],
        links: ['https://youtu.be/s4gBChg6AII', 'https://worldofwarcraft.com/fr-fr/'],
        linksImg: './photos/icons8-world-of-warcraft-16.png',
        description: 'Jeu de quête en ligne.'
    },
    {
        title: 'Apex legends',
        image: './photos/apexLegends.jpg',
        developper: 'Mackey McCandlish',
        category: [categorie[1], categorie[5], categorie[6]],
        links: ['https://youtu.be/UMJb_mkqynU', 'https://www.ea.com/fr-fr/games/apex-legends'],
        linksImg: './photos/icons8-apex-legends-16.png',
        description: 'Jeu fps en mode battle royale futuriste gratuit.'
    },
    {
        title: 'Call of duty Warzone',
        image: './photos/callOfDutyWarzone.jpg',
        developper: 'Jeu fps en mode battle royale façon call of duty gratuit.',
        category: [categorie[1], categorie[5], categorie[6]],
        links: ['https://youtu.be/0E44DClsX5Q', 'https://www.callofduty.com/be/fr/warzone'],
        linksImg: './photos/icons8-call-of-duty-warzone-16.png',
        description: 'Infinity Ward'
    },
    {
        title: 'Dota 2',
        image: './photos/dota2.jpg',
        developper: 'Icefrog',
        category: [categorie[0], categorie[1]],
        links: ['https://youtu.be/pnbWipZJq_k', 'https://fr.dota2.com/'],
        linksImg: './photos/icons8-dota-2-16.png',
        description: 'Jeu MOBA comme league of legends mais en moins bien.'
    },
    {
        title: 'Fifa 2020',
        image: './photos/fifa2020.jpg',
        developper: 'Frostbite Engine',
        category: [categorie[1], categorie[2], categorie[5]],
        links: ['https://www.ea.com/fr-fr/games/fifa/fifa-20', 'https://youtu.be/9E4HMgh7ZsE'],
        linksImg: './photos/icons8-soccer-ball-16.png',
        description: 'Jeu de football , avec mode histoire et multijoueur'
    },
    {
        title: 'League of legends',
        image: './photos/leagueOfLegends.jpg',
        developper: 'Riot games',
        category: [categorie[0], categorie[1]],
        links: ['https://youtu.be/7O21Z6vgtmY', 'https://play.euw.leagueoflegends.com/fr_FR'],
        linksImg: './photos/icons8-league-of-legends-16.png',
        description: 'Jeu MOBA très bien développé, avec beaucoup de possibilités.'
    },
    {
        title: 'Final fantasy 14',
        image: './photos/finalFantasy.jpg',
        developper: 'Akihiko Yoshida',
        category: [categorie[1], categorie[3]],
        links: ['https://youtu.be/4tyuIh12_HU', 'https://www.finalfantasyxiv.com/'],
        linksImg: './photos/icons8-final-fantasy-xiv-16.png',
        description: 'Jeu de rôle en ligne massivement multijoueur façon fantaisie avec accomplissement de quête.'
    },
    {
        title: 'Counter strike : GO',
        image: './photos/counterStrikeGO.jpg',
        developper: 'Minh Le',
        category: [categorie[1], categorie[5]],
        links: ['https://youtu.be/edYCtaNueQY', 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'],
        linksImg: './photos/icons8-counter-strike-16.png',
        description: 'Jeu de tir à la première personne multijoueur en ligne basé sur le jeu déquipe.'
    },
    {
        title: 'Rocket league',
        image: './photos/rocketLeague.jpg',
        developper: 'Corey Davis',
        category: [categorie[1], categorie[2], categorie[4]],
        links: ['https://youtu.be/OmMF9EDbmQQ', 'https://www.rocketleague.com/fr/'],
        linksImg: './photos/icons8-rocket-league-16.png',
        description: 'Jeu de foot avec des voitures en mode campagne ou multijouer.'
    },
    {
        title: 'Fortnite',
        image: './photos/fortnite.jpg',
        developper: 'Epic Games',
        category: [categorie[1], categorie[6]],
        links: ['https://youtu.be/3KgmY5NrEzU', 'https://www.epicgames.com/fortnite/fr/home'],
        linksImg: './photos/icons8-fortnite-16.png',
        description: 'Jeu de Battle Royale.'
    }
];


document.querySelector('.container.conteneur1').innerHTML = '';

const mainContainer = document.querySelector('.container.conteneur1');
const rangée = document.createElement('div');
rangée.className = 'row';
mainContainer.appendChild(rangée);

for (let element of collection) {
    const colonne = document.createElement('div');
    colonne.className = 'col-md-6 col-xs col-lg-3 d-flex';

    const newDiv = document.createElement('div');
    newDiv.className = 'card';
    newDiv.style.width = '18rem';

    const image = document.createElement('img');
    image.src = element.image;
    image.style.maxWidth = '18rem';

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const title = document.createElement('h4');
    title.textContent = element.title;


    for (let pill of element.category) {
        const categories = document.createElement('span');
        categories.textContent = pill.titre;
        categories.className = pill.classe;
        divCardBody.appendChild(categories);
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = element.description;

    const dev = document.createElement('p');
    dev.textContent = element.developper;

    const lien1 = document.createElement('a');
    lien1.textContent = 'Lien youtube';
    lien1.href = element.links[0];
    lien1.className = 'fab fa-youtube card-link';
    lien1.targt = 'blank';
    lien1.style.color = 'lightgreen';
    lien1.onmouseover = function () {
        lien1.style.textDecoration = 'none';
        lien1.style.color = 'red';
    }
    lien1.onmouseleave = function () {
        lien1.style.color = 'lightgreen';
    }

    const imageLien2 = document.createElement('img');
    imageLien2.src = element.linksImg;

    const lien2 = document.createElement('a');
    lien2.textContent = 'Lien du jeu';
    lien2.href = element.links[1];
    lien2.target = 'blank';
    lien2.style.color = 'lightgreen';
    lien2.onmouseover = function () {
        lien2.style.textDecoration = 'none';
        lien2.style.color = 'red';
    }
    lien2.onmouseleave = function () {
        lien2.style.color = 'lightgreen';
    }


    colonne.appendChild(newDiv);
    newDiv.appendChild(image);
    newDiv.appendChild(divCardBody);
    divCardBody.appendChild(title);
    divCardBody.appendChild(paragraph);
    divCardBody.appendChild(dev);
    divCardBody.appendChild(lien1);
    divCardBody.appendChild(imageLien2);
    divCardBody.appendChild(lien2);


    rangée.appendChild(colonne);
}








function filtreJeux(pattern) {
    mainContainer.innerHTML = '';
    const results = [];

    for (let serie of collection) {
        if (serie.title.match(pattern) || serie.description.match(pattern))
            results.push(serie);
    }

    const resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = '';

    for (let element of results) {
        const colonne = document.createElement('div');
        colonne.className = 'col-md-6 col-xs col-lg-3 d-flex';

        const newDiv = document.createElement('div');
        newDiv.className = 'card';
        newDiv.style.width = '18rem';

        const image = document.createElement('img');
        image.src = element.image;
        image.style.maxWidth = '18rem';

        const divCardBody = document.createElement('div');
        divCardBody.className = 'card-body';

        const title = document.createElement('h4');
        title.textContent = element.title;


        for (let pill of element.category) {
            const categories = document.createElement('span');
            categories.textContent = pill.titre;
            categories.className = pill.classe;
            divCardBody.appendChild(categories);
        }

        const paragraph = document.createElement('p');
        paragraph.textContent = element.description;

        const dev = document.createElement('p');
        dev.textContent = element.developper;

        const lien1 = document.createElement('a');
        lien1.textContent = 'Lien youtube';
        lien1.href = element.links[0];
        lien1.className = 'fab fa-youtube card-link';
        lien1.targt = 'blank';
        lien1.style.color = 'lightgreen';
        lien1.onmouseover = function () {
            lien1.style.textDecoration = 'none';
            lien1.style.color = 'red';
        }
        lien1.onmouseleave = function () {
            lien1.style.color = 'lightgreen';
        }

        const imageLien2 = document.createElement('img');
        imageLien2.src = element.linksImg;

        const lien2 = document.createElement('a');
        lien2.textContent = 'Lien du jeu';
        lien2.href = element.links[1];
        lien2.target = 'blank';
        lien2.style.color = 'lightgreen';
        lien2.onmouseover = function () {
            lien2.style.textDecoration = 'none';
            lien2.style.color = 'red';
        }
        lien2.onmouseleave = function () {
            lien2.style.color = 'lightgreen';
        }


        colonne.appendChild(newDiv);
        newDiv.appendChild(image);
        newDiv.appendChild(divCardBody);
        divCardBody.appendChild(title);
        divCardBody.appendChild(paragraph);
        divCardBody.appendChild(dev);
        divCardBody.appendChild(lien1);
        divCardBody.appendChild(imageLien2);
        divCardBody.appendChild(lien2);


        resultsDiv.appendChild(colonne);
    }
}

const value = document.querySelector('#filter-input')
    value.addEventListener('change', input => {
        filtreJeux(input.target.value)
    })