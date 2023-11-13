import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TransitionScreen from "../components/TransitionScreen";
import FirstPart from "../utils/Homepage/Parts/FirstPart";
import SecondPart from "../utils/Homepage/Parts/SecondPart";

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un ritardo di 2 secondi per la transizione
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);


  return (
    <>
      {loading ? (
        <TransitionScreen toPage={" "} />
        // <p>Ciao</p>
      ) : (
        <>
          <Header />
          <main className="">
            <FirstPart />
            <SecondPart />
          </main>
        </>
      )}
    </>
  );
}
