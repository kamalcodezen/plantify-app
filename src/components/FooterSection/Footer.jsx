import { Facebook, Twitter, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative  text-white py-10 px-6 md:px-12 overflow-hidden">

 {/* Glow Balls */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">
            🌱 Green Earth
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Plant trees, save the planet.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Plants</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Tree Plantation</li>
            <li>Eco Campaign</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">

            <a className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition cursor-pointer">
              <Globe size={20} />
            </a>

            <a className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition cursor-pointer">
              <Facebook size={20} />
            </a>

            <a className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition cursor-pointer">
              <Twitter size={20} />
            </a>

            <a className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition cursor-pointer">
              <Instagram size={20} />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 mt-10 pt-5 text-center text-gray-400 text-sm">
        © 2026 Green Earth
      </div>

    </footer>
  );
};

export default Footer;