import { motion } from "framer-motion";
import { Gallery } from "./Gallery";

const Photography = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 sm:px-6 lg:px-8"
      id="photography"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto space-y-6 text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Photography Portfolio
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            My journey in visual storytelling began as a press photographer, capturing moments for publications 
            across Australia. From editorial assignments to documentary projects, I've developed a keen eye 
            for authentic, impactful imagery that tells compelling stories.
          </p>
        </motion.div>

        <Gallery />
      </div>
    </motion.section>
  );
};

export default Photography;