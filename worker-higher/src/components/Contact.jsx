export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h3 className="text-4xl font-extrabold mb-4">যোগাযোগ করুন</h3>
        <p className="mb-10 text-gray-300 text-lg">
          কোনো প্রশ্ন বা মতামত আছে? নিচের ফর্মটি পূরণ করুন, আমাদের টিম দ্রুতই উত্তর দেবে।
        </p>

        <form className="space-y-5 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20">
          <input
            type="text"
            placeholder="আপনার নাম"
            className="w-full px-4 py-3 border-2 border-dotted border-gray-400 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="আপনার ইমেইল"
            className="w-full px-4 py-3 border-2 border-dotted border-gray-400 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <textarea
            placeholder="আপনার বার্তা লিখুন..."
            className="w-full px-4 py-3 border-2 border-dotted border-gray-400 rounded-md text-black h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md font-semibold shadow-lg hover:opacity-90 transition">
            বার্তা পাঠান
          </button>
        </form>
      </div>
    </section>
  );
}
