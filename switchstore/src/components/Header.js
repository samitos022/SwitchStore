import NavbarButton from "../utils/Header/NavbarButton";
import NavbarDropdownMenu from "../utils/Header/NavbarDropdownMenu";

export default function Header() {

  return (
    <>
      <header className="bg-white border py-2 sm:py-4 fixed w-full top-0 z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a href="/" className="flex items-center">
            {/* <img src="logo.jpg" alt="Switch Store" className="h-8 sm:h-16 animate-spin" /> */}
            <div className="ml-4 flex">
              <p className="text-2xl sm:text-3xl lg:text-5xl font-light text-black">Switch</p>
              <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-green-600">
                Store
              </p>
            </div>
          </a>

          <nav className="mt-4 sm:mt-0 pr-4 sm:pr-8">
            <ul className="flex flex-wrap justify-between gap-4 sm:gap-12">
              
              <NavbarDropdownMenu testo={"Riparazione"} />

              <NavbarButton testo={"Centro Assistenza Apple IRP"}/>

              <NavbarButton testo={"Ricambi e Accessori"}/>

              <NavbarButton testo={"Franchising"}/>

              <NavbarButton testo={"Accademia"}/>

              <NavbarButton testo={"Blog"}/>

              <NavbarButton testo={"Vendita ricondizionati"}/>
              
            </ul>
          </nav>
        </div>
      </header>
      {/* <div className="pb-24"></div> */}
    </>
  );
}
