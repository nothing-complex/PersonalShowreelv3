import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Let's Create Together</h2>
          <p className="text-lg text-gray-300">
            Whether you have a project in mind or just want to chat about possibilities,
            I'm always excited to connect with fellow creatives and potential collaborators.
          </p>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          className="grid md:grid-cols-3 gap-8 text-center md:text-left"
        >
          <motion.a
            href="mailto:luka@lukakauzlaric.com"
            className="group p-6 rounded-lg bg-background/50 hover:bg-background transition-colors"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                  luka@lukakauzlaric.com
                </p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="tel:+4581900016"
            className="group p-6 rounded-lg bg-background/50 hover:bg-background transition-colors"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                  +45 81 90 00 16
                </p>
              </div>
            </div>
          </motion.a>

          <motion.div
            className="group p-6 rounded-lg bg-background/50"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium mb-1">Location</p>
                <p className="text-sm text-gray-400">
                  Valby, Copenhagen
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;