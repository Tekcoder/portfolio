import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Roheem Olayemi | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "This is Roheem's Portfolio site", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1dHP1o1rw8Hwz0IvXrdEQTlItW6fm6-9h/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'phone-store.png',
    title: 'Phone E-commerce Store',
    info:
      'A React app which implemented all the core features of an e-commerce site that sells cell phones. A user is able to add to cart and continue shopping on the main site. React router enables easy navigation between the pages.',
    info2: '',
    url: 'https://react-marketplace-phone-store.netlify.com',
    repo: 'https://github.com/Tekcoder/ecommerce-phone-store', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'restaurant.png',
    title: 'Restaurant review site',
    info:
      "By using Google maps API, a user is able to generate a map, and immediately a marker is placed on the user's location. The user is able to write reviews and rate the various restaurants that are displayed through the use of Google Places API. Last but not the least, the Google Street view allows viewing the way the restaurant in real live",
    info2: '',
    url: 'https://eatery-review.netlify.app/',
    repo: 'https://github.com/Tekcoder/restaurant-review-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Board-game.png',
    title: 'Turn Based Board-Game',
    info:
      'By implementing a resusable JavaScript application architecture as well as the jQuery, I was able to build a game whereby for each turn, a player can move from one to three boxes (horizontally or vertically) before ending their turn. The players are unable to pass through obstacles directly and if a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one. And when players cross over adjacent squares (horizontally or vertically), a battle begins. The game was built using object-oriented programming.',
    info2: '',
    url: 'https://royal-rumble.netlify.app/',
    repo: 'https://github.com/Tekcoder/game-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Cats-o-ville.png',
    title: 'Cats Filtering App',
    info:
      'A React application whereby users are able to filter their favorite cats in the search box based on the inputted letters',
    info2: '',
    url: 'https://cats-ville.netlify.app/',
    repo: 'https://github.com/Tekcoder/cats-ville', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chalets.png',
    title: 'Chalets & Caviar',
    info:
      'A WordPress site for a Chalets agency in Aspen, Colorado. It entails using the website to secure rentage for both sellers and leasers.',
    info2: '',
    url: 'http://dev-chalets-and-caviar-project1.pantheonsite.io/',
    repo: 'https://github.com/Tekcoder/Wordpress-Project/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'boston-film.png',
    title: 'Boston Film Festival',
    info:
      'A website for an outdoor film festival in Boston called ‘Watch it outside Boston edition’. They hope to select and show films from August 5th to 8th in Boston Public Garden, a park in Boston that can hold up to 1,500 people.',
    info2: '',
    url: 'https://boston-film-festival.netlify.app/',
    repo: 'https://github.com/Tekcoder/Film-Festival-Bootstrap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quote-generator.png',
    title: 'Amazing Quote generator',
    info:
      'A quote generator app that randomly generates two different categories of quotes: belief and success. The quotes generated are relatively coherent and the user is able to select from a range of 1 and 5',
    info2: '',
    url: 'https://amazing-quotes-generator.netlify.app/',
    repo: 'https://github.com/Tekcoder/quote-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tekcoder2018@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Abumaryam99',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Tekcoder',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/roheem-olayemi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tekcoder',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@mayordesigns',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
