"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "PLEASE POOKIE",
      "Estoy llorando",
      "Última oportunidad",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getImage = () => {
    if (yesPressed) {
      return "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    }

    const images = [
      "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
      "https://tenor.com/es/view/mocha-cry-gif-4822939937925547997.gif",
      "https://tenor.com/es/view/bubu-dudu-sseeyall-gif-1555753298461515374.gif",
    ];

    return images[Math.min(noCount, images.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      <img className="h-[200px]" src={getImage()} alt="bear" />

      {yesPressed ? (
        <div className="my-4 text-4xl font-bold">
          WOOOOOO!!! I love you pookie!! ;))
        </div>
      ) : (
        <>
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>

          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
