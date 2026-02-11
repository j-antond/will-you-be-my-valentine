"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleNoHover = () => {
    // Hace que el botón "No" se mueva aleatoriamente al pasar el ratón
    const newTop = Math.floor(Math.random() * 200) - 100; // +-100px vertical
    const newLeft = Math.floor(Math.random() * 200) - 100; // +-100px horizontal
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Seguro?",
      "Por favor, cosita",
      "Y si te regalo un golden?",
      "Bubu, di que sí",
      "Y si te regalo la Switch?",
      ":(((",
      "¡¡MUY MAL, COSITA!!",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getImage = () => {
    if (yesPressed) {
      return "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    }
    const images = [
      "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
      "https://tenor.com/es/view/bubu-dudu-sseeyall-gif-1555753298461515374.gif",
      "https://tenor.com/es/view/mocha-cry-gif-4822939937925547997.gif",
    
    ];
    if (noCount === 0) return images[0];
    if (noCount === 1) return images[1];
    return images[2];
  };

  return (
    <div className="relative -mt-16 flex h-screen flex-col items-center justify-center">
      <img className="h-[200px]" src={getImage()} alt="bear" />

      {yesPressed ? (
        <div className="my-4 text-4xl font-bold text-center">
          Te quiero mucho cosita 🫶🏼
        </div>
      ) : (
        <>
          <h1 className="my-4 text-4xl text-center">¿Quieres ser mi Valentín?</h1>
          <div className="flex items-center relative">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sí
            </button>

            <button
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              className="absolute rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all"
              style={{
                top: noButtonPosition.top,
                left: noButtonPosition.left,
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
