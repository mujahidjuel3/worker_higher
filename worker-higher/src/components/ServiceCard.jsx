
const ServiceCard = ({ icon }) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 text-center">
      <img
        src={icon}
        alt="service icon"
        className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 object-contain"
      />
    </div>
  );
};

export default ServiceCard;
