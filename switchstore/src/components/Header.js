import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-white border-2 py-4">
      <div className="lg:flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="logo.jpg" alt="Switch Store" className="h-16" />
          <div className="ml-4 flex">
            <p className="text-3xl lg:text-5xl text-black">Switch</p>
            <p className="text-3xl lg:text-5xl font-semibold text-green-700">Store</p>
          </div>
        </a>

        <nav className="mt-4 lg:mt-0 pr-8">
          <ul className="flex flex-wrap lg:flex-nowrap justify-between gap-4">
            <motion.li whileHover={{ scale: 1.2 }}>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Riparazioni
              </a>
            </motion.li>
            <li>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Centro Assistenza Apple IRP
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Accessori e ricambi
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Franchising
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Accademy
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black border-2 p-2 rounded-full"
              >
                Vendita ricondizionati
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
