import { useScroll, useMotionValue, motion, useMotionValueEvent  } from "framer-motion";
import { useEffect } from "react";

export default function SecondPart() {
    const { scrollYProgress } = useScroll()
    
    return <motion.div style={{ scaleX: scrollYProgress }} />
}
