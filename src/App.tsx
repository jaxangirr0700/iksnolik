import { useState } from "react";
import "./App.css";

function App() {
  const [katak, setKatak] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ]);

  // function add(a: number, b: number) {
  //   return a + b;
  // }
  // const noutbook: {
  //   model: string;
  //   ssd: number;
  //   portlari: Object[];
  //   ekran: number;
  // } = {
  //   model: "Mac",
  //   ssd: 512,
  //   portlari: [
  //     {
  //       nomi: "1",
  //       turi: "USB",
  //     },
  //     {
  //       nomi: "2",
  //       turi: "HTMI",
  //     },
  //   ],
  //   ekran: 1000,
  // };

  const [queue, setQueue] = useState(true);
  const [win, setWin] = useState("");
  return (
    <>
      <div className="flex flex-col gap-5 font-bold font-mono">
        <button className="text-xl ">
          Win: <span className="text-xl">{win}</span>
        </button>
        <div className="grid grid-cols-3">
          {katak.map((k, i) => {
            return (
              <div
                onClick={() => {
                  const new_katak = katak.map((kt, ktIndex) => {
                    if (i === ktIndex && kt.value === "") {
                      return { value: queue ? "x" : "o" };
                    }
                    return kt;
                  });

                  setKatak(new_katak);

                  const checkWin = (player) => {
                    // Qatorlar
                    if (
                      (new_katak[0].value === player &&
                        new_katak[1].value === player &&
                        new_katak[2].value === player) ||
                      (new_katak[3].value === player &&
                        new_katak[4].value === player &&
                        new_katak[5].value === player) ||
                      (new_katak[6].value === player &&
                        new_katak[7].value === player &&
                        new_katak[8].value === player)
                    ) {
                      return true;
                    }

                    // Ustunlar
                    if (
                      (new_katak[0].value === player &&
                        new_katak[3].value === player &&
                        new_katak[6].value === player) ||
                      (new_katak[1].value === player &&
                        new_katak[4].value === player &&
                        new_katak[7].value === player) ||
                      (new_katak[2].value === player &&
                        new_katak[5].value === player &&
                        new_katak[8].value === player)
                    ) {
                      return true;
                    }

                    // Diagonal
                    if (
                      (new_katak[0].value === player &&
                        new_katak[4].value === player &&
                        new_katak[8].value === player) ||
                      (new_katak[2].value === player &&
                        new_katak[4].value === player &&
                        new_katak[6].value === player)
                    ) {
                      return true;
                    }

                    return false;
                  };

                  if (checkWin("x")) {
                    setWin("x");
                  } else if (checkWin("o")) {
                    setWin("o");
                  }

                  if (katak[i].value === "") {
                    setQueue(!queue);
                  }
                }}
                key={i}
                className={`w-16 h-16  border border-slate-500 text-5xl font-bold font-mono select-none ${
                  win ? "pointer-events-none" : ""
                }`}
              >
                {k.value}
              </div>
            );
          })}
        </div>
        <button
          className=""
          onClick={() => {
            const new_kataklar = katak.map(() => {
              return {
                value: "",
              };
            });
            setKatak(new_kataklar);
            setWin("");
          }}
        >
          Refresh
        </button>
      </div>
    </>
  );
}

export default App;
