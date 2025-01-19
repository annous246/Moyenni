import { useEffect, useState, useRef } from "react";
import "./App.css";
import Subject from "./subject/subject";
function App() {
  const subjects = [
    "TFA",
    "Analyse",
    "IHM",
    "DevAvancé",
    "DevWeb",
    "SGBD",
    "Middlewares",
    "AdministrationReseaux",
    "Sécurité",
    "Anglais",
    "Francais",
    "Comptabilité",
  ];
  const [moyennes, setMoyennes] = useState([0, 0]);
  const [moyenneGenerale, setMoyenneGenerale] = useState("");
  const mapper = {
    TFA: {
      coef: 2,
      exam: 2,
      tp: 0,
      ds: 1,
    },
    Analyse: {
      coef: 2,
      exam: 6,
      ds: 2,
      tp: 2,
    },

    IHM: {
      coef: 2,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    DevAvancé: {
      coef: 3,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    DevWeb: {
      coef: 2,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    SGBD: {
      coef: 2,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    Middlewares: {
      coef: 1.5,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    AdministrationReseaux: {
      coef: 1,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    Sécurité: {
      coef: 2,
      exam: 2,
      ds: 0,
      tp: 1,
    },
    Anglais: {
      coef: 1,
      exam: 8,
      ds: 2,
      tp: 0,
    },
    Francais: {
      coef: 1,
      exam: 8,
      ds: 2,
      tp: 0,
    },
    Comptabilité: {
      coef: 1,
      exam: 2,
      ds: 1,
      tp: 0,
    },
  };

  function done() {
    let total = 0.0;
    let totalc = 0;
    Object.keys(mapper).map((matiere, index) => {
      if (index < moyennes.length) {
        total += mapper[matiere].coef * moyennes[index];
        totalc += mapper[matiere].coef;
      }
    });
    setMoyenneGenerale(parseFloat(total / totalc).toFixed(2));
  }

  return (
    <div id="container">
      <div id="main">
        {subjects.map((sub, ind) => {
          return (
            <Subject
              setMoyenneGenerale={setMoyenneGenerale}
              index={ind}
              mapper={mapper}
              setMoyennes={setMoyennes}
              title={sub}
              exam={mapper[sub].exam}
              tp={mapper[sub].tp}
              ds={mapper[sub].ds}
            />
          );
        })}
      </div>
      <div id="last" className="column">
        <button onClick={done}>Calculate</button>
        <h2>Moyenne Générale : {moyenneGenerale}</h2>
      </div>
    </div>
  );
}

export default App;
