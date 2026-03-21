import { useEffect, useState } from "react";

const Impact = () => {
  const [count, setCount] = useState(0);

  // simple counter animation
  useEffect(() => {
    let start = 0;
    const end = 500000;
    const duration = 1500;

    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-12 text-white overflow-hidden">
      
  {/* Glow Balls */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 text-center z-10">

        {/* Card 1 */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-green-400">
            {count.toLocaleString()}+
          </h2>
          <p className="text-gray-300 mt-2">Trees Planted</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-green-400">120+</h2>
          <p className="text-gray-300 mt-2">Cities Covered</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-green-400">50K+</h2>
          <p className="text-gray-300 mt-2">Volunteers</p>
        </div>

        {/* Card 4 */}
        <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-green-400">10+</h2>
          <p className="text-gray-300 mt-2">Years Experience</p>
        </div>

      </div>
    </section>
  );
};

export default Impact;