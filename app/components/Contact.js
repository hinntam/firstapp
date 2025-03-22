// components/Contact.js
const Contact = () => (
    <section id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me - (825) - 288 - 0437</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded"></textarea>
          <button type="submit" className="bg-blue-500 w-full p-3 rounded">Send</button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  