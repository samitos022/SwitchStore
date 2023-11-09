import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TransitionScreen from "../components/TransitionScreen";


export default function Homepage() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simula un ritardo di 2 secondi per la transizione
      setTimeout(() => {
        setLoading(false);
      }, 2200);
    }, []);
  
    return (
      <div>
        {loading ? (
          <TransitionScreen toPage={"Riparazione"}/>
        ) : (
          <>
            <Header />
            {/* <p>Homepage</p> */}
  
          </>
        )}
      </div>
    );
  }