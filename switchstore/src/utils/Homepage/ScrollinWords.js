import { motion, AnimatePresence } from "framer-motion";

const ScrollingWords = () => {
  const words = ["Hello", "World", "React", "Motion", "Tailwind"];

  return (
    <div className="overflow-hidden bg-gray-200 w-full h-12">
      <AnimatePresence>
        {words.map((word, index) => (
          <motion.div
            key={index}
            initial={{ x: "1" }}
            animate={{ x: 0 }}
            exit={{ x: "1" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="inline-block px-4 py-2 text-xl font-bold text-green-500"
          >
            {word}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ScrollingWords;
