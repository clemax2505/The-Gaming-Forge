import { ArrowRight, Settings, Monitor, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mt-16 md:mt-0">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red leading-relaxed">
            Forgez Votre PC Gaming Idéal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Création sur mesure, amélioration et maintenance de PC gaming par des experts passionnés
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/custom-pc" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-forge-orange hover:bg-forge-red text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                PC Gaming Sur Mesure
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 bg-forge-dark hover:bg-forge-metal text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                Nous contacter
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/laptop-service" className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <Laptop className="h-8 w-8 text-forge-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">PC Portable Gaming</h3>
              <p className="text-gray-400">Configuration personnalisée selon vos besoins et votre budget</p>
            </Link>
            <Link to="/upgrade" className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <Monitor className="h-8 w-8 text-forge-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Amélioration</h3>
              <p className="text-gray-400">Optimisation de votre configuration existante</p>
            </Link>
            <Link to="/maintenance" className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <Settings className="h-8 w-8 text-forge-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Maintenance</h3>
              <p className="text-gray-400">Nettoyage et entretien professionnel de votre machine</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;