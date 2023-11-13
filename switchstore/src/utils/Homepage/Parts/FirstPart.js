import CircleSpinLogo from "../otherUtils/CircleSpinLogo";

export default function FirstPart() {
  return (
    <>
      {/* Immagine di sfondo */}
      <img
        src="./images/bg.jpg"
        alt="Descrizione dell'immagine"
        className="object-cover w-full h-screen"
      />

      {/* Testo sopra l'immagine */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center hover:animate-pulse">
        <div className="ml-4 flex">
          <p className="text-3xl lg:text-5xl font-light text-black">Slogan</p>
          <p className="text-3xl lg:text-5xl font-semibold text-green-600">
            Azienda
          </p>
        </div>
      </div>

      <div className="absolute bottom-14 text-white text-center hover:animate-spin-medium animate-spin-slow">
        <CircleSpinLogo />
      </div>
    </>
  );
}
