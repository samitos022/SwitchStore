import NavbarButton from "../utils/Header/NavbarButton";
import NavbarDropdownMenu from "../utils/Header/NavbarDropdownMenu";

export default function Header() {

  return (
    <>
      <header className="bg-white border py-4 fixed w-full top-0 z-10 mb-48">
        <div className="lg:flex justify-between items-center">
          <a href="/" className="flex items-center">
            {/* <img src="logo.jpg" alt="Switch Store" className="h-16 animate-spin" /> */}
            <div className="ml-4 flex">
              <p className="text-3xl lg:text-5xl font-light text-black">Switch</p>
              <p className="text-3xl lg:text-5xl font-semibold text-green-600">
                Store
              </p>
            </div>
          </a>

          <nav className="mt-4 lg:mt-0 pr-8">
            <ul className="flex flex-wrap lg:flex-nowrap justify-between gap-12">
              
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
