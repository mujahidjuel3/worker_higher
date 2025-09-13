import ServiceCard from "./ServiceCard";

import LL4 from "../assets/LL 4.png";
import LL5 from "../assets/LL 5.png";
import LL6 from "../assets/LL 6.png";
import LL7 from "../assets/LL 7.png";
import LL8 from "../assets/LL 8.png";
import LL9 from "../assets/LL9.png";
import LL11 from "../assets/LL11.png";

const Services = () => {
  const services = [
    { icon: LL4, },
    { icon: LL5,  },
    { icon: LL6,  },
    { icon: LL7,  },
    { icon: LL8,  },
    { icon: LL9, },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <img src={LL11} alt="Services" className="w-40 h-8 mb-6 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
