const questions = [
  {
    id: 1,
    question: "Care dintre cele trei vehicule trece primul prin intersecţie?",
    image: "assets/314.jpg",
    answers: [
      {
        option: "a",
        text: "tramvaiul, deoarece are prioritate în mers",
        valid: false
      },
      {
        option: "b",
        text: "autoturismul galben, deoarece îşi schimbă direcţia de mers",
        valid: false
      },
      {
        option: "c",
        text:
          "autoturismul roşu, deoarece vine din dreapta celorlalte două vehicule",
        valid: true
      }
    ]
  },
  {
    id: 2,
    question: "Viteza se va reduce obligatoriu:",
    image: "assets/112.jpg",
    answers: [
      {
        option: "a",
        text: "la trecerile pentru pietoni",
        valid: false
      },
      {
        option: "b",
        text: " la semnalul poliţistului de frontieră",
        valid: false
      },
      {
        option: "c",
        text: "la întâlnirea indicatorului „Cedează trecerea",
        valid: true
      }
    ]
  },
  {
    id: 3,
    question:
      "În care dintre situaţii consumul de carburant al unui motor creşte?",
    image: "assets/42.jpg",
    answers: [
      {
        option: "a",
        text: "atunci când motorul nu atinge temperatura de funcţionare",
        valid: false
      },
      {
        option: "b",
        text: "atunci când fumul de eşapament este de culoare neagră",
        valid: false
      },
      {
        option: "c",
        text: "atunci când motorul funcţionează cu întreruperi",
        valid: true
      }
    ]
  }
];

export default questions;
