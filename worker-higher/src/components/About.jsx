export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img 
          src="https://img.freepik.com/free-vector/people-doing-various-jobs_23-2148824073.jpg" 
          alt="Workers" 
          className="rounded-2xl shadow-lg" 
        />
        <div>
          <h3 className="text-3xl font-bold mb-4">কেন WorkerHire বেছে নেবেন?</h3>
          <p className="text-gray-700 mb-4">
            আমরা আপনাকে বিভিন্ন ক্যাটাগরির দক্ষ এবং যাচাই করা কর্মীদের সাথে সংযুক্ত করি, যা নিশ্চিত করে বিশ্বাসযোগ্যতা, নিরাপত্তা এবং সাশ্রয়ী মূল্য।
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✅ বিশ্বাসযোগ্য ও যাচাই করা কর্মী</li>
            <li>✅ সাশ্রয়ী মূল্য</li>
            <li>✅ ২৪/৭ সুবিধা</li>
            <li>✅ সহজ বুকিং প্রক্রিয়া</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
