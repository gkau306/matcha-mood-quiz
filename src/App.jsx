import { useState } from 'react';
import './App.css';

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      text: "What’s your current vibe?",
      options: [
        "Feeling like sunshine! ☀️",
        "Cozy, mellow, grounding 🧶",
        "Sweet and nostalgic 💌",
        "Moody, dreamy, soft 🫐",
        "Cool, chill, but stylish AF 🧊✨"
      ],
      types: ["mango", "hojicha", "strawberry", "blueberry", "classic"]
    },
    {
      text: "Where would you sip your matcha?",
      options: [
        "At a pastel café ☕️",
        "On a sunny beach 🏖️",
        "Under a tree in the forest 🌳",
        "In bed watching the rain 🌧️",
        "Sitting on a window ledge journaling 📓"
      ],
      types: ["strawberry", "mango", "hojicha", "blueberry", "classic"]
    },
    {
      text: "Pick your favorite fruit (or not):",
      options: [
        "Mango 🥭",
        "Strawberry 🍓",
        "Berries & grapes 🫐",
        "I don’t really like fruit 🤷‍♀️",
        "Vanilla / sweet drinks 🍦🧋"
      ],
      types: ["mango", "strawberry", "blueberry", "hojicha", "classic"]
    },
    {
      text: "Where’s your dream hangout spot?",
      options: [
        "A sunny beach with glowy water 🏖️",
        "In cozy mountains under soft rain 🏔️🌧️",
        "A magical fairy garden with frogs 🧚‍♀️🐸",
        "A quiet reading nook in the woods 🌲📖",
        "A minimal white room with soft music 🎧"
      ],
      types: ["mango", "blueberry", "strawberry", "hojicha", "classic"]
    }
  ];
  


  

  const results = {
    strawberry: {
      name: "🍓 Strawberry Ice Matcha",
      desc: "You’re sweet chaos with glitter sprinkles.",
      image: "/images/strawberry.png"
    },
    mango: {
      name: "🥭 Mango Cloud Matcha",
      desc: "Sunshine in drink form. You bring joy to the room.",
      image: "/images/mango.png"
    },
    blueberry: {
      name: "🫐 Blueberry Moon Matcha",
      desc: "You’re dreamy, mysterious, and a lil poetic.",
      image: "/images/blueberry.png"
    },
    classic: {
      name: "🍵 Classic Hot Matcha",
      desc: "Grounded, cozy, main character energy.",
      image: "/images/classic.png"
    },
    hojicha: {
      name: "🍂 Hojicha Latte",
      desc: "You are autumn incarnate. Warm, wise, and calm.",
      image: "/images/hojicha.png"
    }
  };

  function selectOption(type) {
    const updated = [...answers, type];
    setAnswers(updated);

    if (updated.length === questions.length) {
      const counts = {};
      updated.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
      const mostCommon = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      setResult(results[mostCommon]);
    } else {
      setStep(step + 1);
    }
  }

  function restart() {
    setStep(0);
    setAnswers([]);
    setResult(null);
  }

  const current = questions[step];

  return (
    <div className="container">
      <h1 className="title">✨ What Matcha Are You? ✨</h1>

      {result ? (
        <>
          <div className="sentence-box">
            <h2>{result.name}</h2>
            <p>{result.desc}</p>
            <img
              src={result.image}
              alt={result.name}
              style={{
                width: "100px",
                imageRendering: "pixelated",
                marginTop: "1rem"
              }}
            />
          </div>
          <button className="cute-button" onClick={restart}>
            Take Again
          </button>
        </>
      ) : (
        <>
          <div className="sentence-box">
            <h2>{current.text}</h2>
          </div>
          <div>
            {current.options.map((opt, i) => (
              <button
                key={i}
                className="cute-button"
                onClick={() => selectOption(current.types[i])}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
