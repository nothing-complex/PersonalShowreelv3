import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const titleAnimation = {
    animate: {
      opacity: [0.8, 1],
      y: [0, -2, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50"
      id="about"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div {...fadeInUp} className="space-y-6">
          <motion.h2 
            className="text-4xl font-bold tracking-tight"
            {...titleAnimation}
          >
            Hey, I'm Luka 👋
          </motion.h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a Director of Photography, certified colorist, and editor based in Copenhagen. 
            Through my work with leading production companies, I've contributed to compelling visual stories 
            for various global brands and organizations.
          </p>
        </motion.div>

        <div id="showreel" className="py-12">
          <motion.h2 
            className="text-3xl font-bold tracking-tight mb-8"
            {...titleAnimation}
          >
            Latest Work
          </motion.h2>
          <div className="vimeo-container">
            <iframe
              src="https://player.vimeo.com/video/900084461?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Showreel 2024 - Luka Kauzlaric"
            />
          </div>
        </div>

        <motion.div {...fadeInUp} className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-primary">Behind the Lens</h4>
              <p className="text-gray-600">
                From commercial productions to documentary storytelling, I bring stories to life through 
                thoughtful cinematography and precise color grading. My background in photojournalism 
                helps me capture authentic moments that resonate.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-primary">Technical Expertise</h4>
              <p className="text-gray-600">
                Proficient with Arri, Blackmagic, and various professional camera systems. 
                Expert in DaVinci Resolve, Adobe Premiere, and other industry-standard tools. 
                Certified colorist with a keen eye for detail.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight">Photography Background</h3>
          <p className="text-gray-600">
            My journey began as a press photographer for major publications like The Weekly Times and The Observer, 
            where I honed my skills in capturing decisive moments and telling stories through still images. 
            This foundation in photojournalism continues to influence my approach to cinematography, 
            bringing an authentic, documentary-style perspective to every project.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight">Project Experience</h3>
          <p className="text-gray-600 mb-4">
            Through collaborations with leading production companies, I've contributed to projects for:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Dell", "Jabra", "Shell", "Amazon", "Marabou", "Getty Images", "VML Studios"].map((client) => (
              <div key={client} className="text-gray-600 text-sm font-medium">{client}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;