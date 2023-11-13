import { motion } from "framer-motion";

export default function TransitionScreen({ toPage }) {
  const variants_b1 = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        repeat: 1,
        repeatType: "reverse",
      },
    },
  };

  const variants_b2 = {
    hidden: { y: "100vh" },
    visible: {
      y: "-100vh",
      transition: { ease: "easeInOut", duration: 1.5, delay: 0.85 },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        variants={variants_b1}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.p
        className="text-green-600 text-9xl font-semibold pr-4 z-20"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 1.1,
        }}
      >
        Switch
      </motion.p>
      <motion.p
        className="text-white text-9xl font-semibold pl-12 z-20"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 1.1,
        }}
      >
        Store
      </motion.p>
      <motion.p
        className="text-white text-5xl animate-bounce pt-8 font-light z-20"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 1.1,
        }}
      >
        {toPage}
      </motion.p>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-green-600 z-20"
        variants={variants_b2}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}
