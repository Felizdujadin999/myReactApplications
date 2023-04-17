import React,{useState} from "react";
import "../style/RandomQuoteGenerator.css"

const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "When you have a dream, you've got to grab it and never let go. -Carol Burnett",
    "Nothing is impossible. The word itself says 'I'm possible!' -Audrey Hepburn",
    "There is nothing impossible to they who will try. -Alexander the Great",
    "The bad news is time flies. The good news is you're the pilot. — Michael Altshuler",
    "Life has got all those twists and turns. You've got to hold on tight and off you go. — Nicole Kidman",
    "Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman",
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell. — Amal Clooney",
    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box. — Duchess Meghan",
    "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please. — Taylor Swift",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. — Malala Yousafzai",
    "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it. — Dr. Phil",
    "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life. — Carrie Ann Moss",
    "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end. — Michelle Obama",
    "Spread love everywhere you go. — Mother Teresa",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on. — Lady Gaga",
    "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is. — Gabrielle Bernstein",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens. — Mandy Hale",
    "You can be everything. You can be the infinite amount of things that people are. — Kesha", 
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. — Ralph Waldo Emerson",
    "I want to be in the arena. I want to be brave with my life. And when we make the choice to dare greatly, we sign up to get our asses kicked. We can choose courage or we can choose comfort, but we can't have both. Not at the same time. — Brene Brown",
    "I'm going to be gone one day, and I have to accept that tomorrow isn't promised. Am I OK with how I’m living today? It's the only thing I can help. If I didn't have another one, what have I done with all my todays? Am I doing a good job? — Hayley Williams",
    "I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this. — Alexandria Ocasio-Cortez",
    "Belief creates the actual fact. — William James",
    "No matter what people tell you, words and ideas can change the world. — Robin Williams",
    "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that. — Ava DuVernay",
    "It is during our darkest moments that we must focus to see the light. — Aristotle",
    "Definitions belong to the definers, not the defined. — Toni Morrison",
    "You must find the place inside yourself where nothing is impossible. — Deepak Chopra",
    "Whatever you think the world is withholding from you, you are withholding from the world. — Eckhart Tolle",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi",
    "A lot of people are afraid to say what they want. That's why they don't get what they want. — Madonna",
    "We have to let go of who we think we should be and embrace what is. — Achea Redd",
    "Being vulnerable is a strength, not a weakness. — Selena Gomez",
    "In order for the light to shine so brightly, the darkness must be present. — Sir Francis Bacon",
    "I don't look ahead. I'm right here with you. It's a good way to be. — Danny DeVito",
    "It ain't about how hard you hit. It’s about how hard you can get hit and keep moving forward. — Sylvester Stallone",
     "I will not let anyone scare me out of my full potential. — Nicki Minaj",
    "We have to be better. We have to love more, hate less. We've gotta listen more and talk less. We've gotta know that this is everybody's responsibility. — Meghan Rapinoe",
    "Trying to grow up is hurting. You make mistakes. You try to learn from them, and when you don't, it hurts even more. — Aretha Franklin",
    "Never bend your head. Always hold it high. Look the world straight in the eye.  - Helen Keller",
    "Let love rule. — Lenny Kravitz",
    "The power of imagination makes us infinite. — John Muir",
    "The only journey is the one within. — Rainer Maria Rilke",
    "If my mind can conceive it, if my heart can believe it, then I can achieve it. — Muhammad Ali",
    "Embrace the glorious mess that you are. — Elizabeth Gilbert",
    "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky. — Rabindranath Tagore",
    "You have to be where you are to get where you need to go. — Amy Poehler",
    "Don't be afraid. Because you're going to be afraid. But remember when you become afraid, just don't be afraid. — Joan Jett",
    "We need to take risks. We need to go broke. We need to prove them wrong, simply by not giving up. — Awkwafina",
    "The only limit to our realization of tomorrow will be our doubts today. — Franklin Delano Roosevelt",
    "It is never too late to be what you might have been. — Franklin Delano Roosevelt",
    "You do not find the happy life. You make it. — Camilla Eyring Kimball",
    "We all have problems. But it's not what happens to us, [it 's] the choices we make after. — Elizabeth Smart",
    "You don’t have to be defined or confined by your environment, by your family circumstances, and certainly not by your race or gender. — Mariah Carey",
    "When we let fear be our master, we cannot be happy and free as a butterfly. But when we choose to trust the journey and embrace love and joy, we are free to fly. — Annicken R. Day",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving. — Tina Turner",
    "How wild it was, to let it be. — Cheryl Strayed",
    "The simple act of listening to someone and making them feel as if they have truly been heard is a most treasured gift. — L. A. Villafane"
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  class QuoteGenerator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: "",
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const randomQuote = getRandomQuote();
      this.setState({
        quote: randomQuote,
      });
    }
  
    render() {
      return (
        <div className="mainContainer">
        <div className="ptag">WELCOME TO MY QUOTE GENERATOR</div>
       <button className="button" onClick={this.handleClick}>Generate Quote</button>
          <p id="quote">{this.state.quote}</p>
        </div>
      );
    }
  }
  
  export default QuoteGenerator;