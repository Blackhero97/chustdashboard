import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";

const Card = ({
  children,
  className,
  hover = true,
  gradient = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.02 } : {}}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn(
        "bg-white rounded-xl shadow-sm border border-slate-200 p-6",
        gradient && "bg-gradient-to-br from-white to-slate-50",
        hover && "hover:shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
