import { motion } from "framer-motion";

const About = ({ aboutImg }) => {
  return (
    <section className="relative overflow-hidden py-10 px-6 md:px-12 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-lime-400/10 blur-3xl"></div>

      {/* Glow Balls */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img
            src={aboutImg}
            alt="Green Earth"
            className="w-full h-full object-cover 
            group-hover:scale-110 transition duration-700 
            drop-shadow-[0_0_25px_rgba(34,197,94,0.7)]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            🌍 Save{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
              Earth
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-lg">
            Green Earth is a global tree plantation initiative dedicated to fighting climate change.
            We have planted over{" "}
            <span className="text-green-400 font-bold">500,000+ trees</span>.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-105 transition cursor-pointer">
               Join Campaign
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;