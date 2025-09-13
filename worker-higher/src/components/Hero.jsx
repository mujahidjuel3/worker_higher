import LL3 from "../assets/LL 3.png";
import LL12 from "../assets/LL12.png";

const Hero = () => {
  return (
    <section className="bg-black text-white py-16 text-center">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <img src={LL3} alt="Service Button" className="w-full h-auto mr-2" />

        {/* Button with LL12 image */}
        <button className="bg-white text-black px-6 py-3 mt-8 rounded flex items-center justify-center mx-auto hover:bg-gray-200 transition">
          <img src={LL12} alt="Service Button" className="w-28 h-6 mr-2" />
         
        </button>
      </div>
    </section>
  );
};

export default Hero;
