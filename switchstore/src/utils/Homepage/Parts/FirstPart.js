import CircleSpinLogo from "../otherUtils/CircleSpinLogo";

export default function FirstPart() {
  return (
    <>
      {/* Immagine di Sfondo */}
      <img
        src="./images/bg.jpg"
        alt="Descrizione dell'immagine"
        className="object-cover w-full h-screen"
      />

      {/* Testo sopra l'immagine */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex justify-center items-center">
          <p className="text-xl md:text-3xl lg:text-5xl font-light text-black">Slogan</p>
          <p className="text-xl md:text-3xl lg:text-5xl font-semibold text-green-600">
            Azienda
          </p>
        </div>
      </div>

      <div className="absolute bottom-14 text-center hover:animate-spin-medium animate-spin-slow">
        <CircleSpinLogo />
      </div>
    </>
  );
}
