import self from "../img/self.png"
import ReactFlix from "../img/ReactFlix.png"
import realstate from "../img/realState.png"
import interestCalculator from "../img/interest-calculator.png"
import pokeApp from "../img/pokeApp.png"
import NEVOBIT from "../img/NEVOBIT.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Juan Tomas",
    lastName: " De peña Medina",
    initials: "jordislpm", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the DO'
        },
        {
            emoji: "📧",
            text: "jordislpm@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://wa.link/xjvyv1",
            icon: 'fa fa-whatsapp',
            label: 'whatsapp'
        },
        {
            link: "https://github.com/jordislpm",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/juan-tomas-de-pena-medina/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Juan Tomas but my friends call me 'JORDIS'. I am a fullstack javascript web developer. I studied in a programming bootcamp for 6 months in 2022, I have continued training with personal projects and I have been working professionally as a frontend developer since January 2023, I am always looking for challenging projects where I can learn new things, I love developing products that can be useful for clients, I enjoy creating professional web applications that are smooth and fast. You should hire me!",
    skills:
        {
            proficientWith: ['html5', 'css3','javascript', 'react', 'next.js', 'git', 'github', 'bootstrap'],
            exposedTo: ['nodejs', 'postgresql', 'express']
        }
    ,
    hobbies: [
        {
            label: 'scuba diving',
            emoji: '🤿'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "interest calculator",
            live: "https://interest-calculator-udq2a.ondigitalocean.app/",
            source: "https://github.com/jordislpm/interest-calculator",
            image: interestCalculator
        },
        {
            title: "Poke App",
            live: "https://pokeapp-lf72t.ondigitalocean.app/",
            source: "https://github.com/jordislpm/PokeApp",
            image: pokeApp
        },
        {
            title: "Real State",
            live: "https://www.itaajrealty.com/es", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nevobit/itaaj-monorepo", // this should be a link to the **repository** of the project, where the code is hosted.
            image: realstate
        },
        {
            title: "ReactFlix",
            live: "https://reactflix-cetge.ondigitalocean.app/",
            source: "https://github.com/Tutorias-de-programacion/ReactFinalProject",
            image: ReactFlix
        }
    ],
    experience: [ // This is where your portfolio projects will be detailed
        {
            title: "NEVOBIT",
            linkedin: "https://www.linkedin.com/company/novebit/mycompany/",
            source: "https://github.com/jordislpm/interest-calculator",
            image: NEVOBIT,
            link: "https://www.nevobit.com/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            title: "NEVOBIT",
            linkedin: "https://www.linkedin.com/company/novebit/mycompany/",
            source: "https://github.com/jordislpm/interest-calculator",
            image: NEVOBIT,
            link: "https://www.nevobit.com/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ]
}