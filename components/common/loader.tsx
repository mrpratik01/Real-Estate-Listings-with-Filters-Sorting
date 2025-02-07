import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
