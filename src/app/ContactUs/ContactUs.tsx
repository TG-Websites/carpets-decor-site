'use client'; // Required if using Next.js App Router

import React, { useState } from 'react';

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  // ✅ Add this line
    message: ''
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. My phone number is ${phone}. I wanted to say: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const targetPhone = '919354715556'; // WhatsApp requires country code without "+"
    const whatsappURL = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };



  return (
    <div>
      <section
        className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'url("/images/gptslider1.png")',
        }}
      >
        {/* 🧊 Glassmorphism content box */}
        <div className="relative z-10 w-full max-w-3xl mx-4 sm:mx-auto px-6 py-10 bg-white/5 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Let’s Start a Conversation
          </h1>

          <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
            Have questions or need assistance? Our team is here to help you with any inquiries or service-related queries.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
          >
            Contact Us Now
          </a>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-black text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h1 className="text-[32px] text-white md:text-[48px] leading-[1.3] font-semibold graytxt mb-6">
              Contact Us
            </h1>
            <p className="text-white text-base">
              Get in touch for custom carpets and decor information today!
            </p>
          </div>

          {/* Form + Map Layout with fixed height */}
          <div className="flex flex-col lg:flex-row gap-10 lg:h-[450px]">

            {/* Left: Form */}
            <div className="w-full lg:w-1/2 h-auto lg:h-full">
              <div>
                <h2 className="text-sm font-semibold graytxt mb-6 text-left">
                  SEND US A MESSAGE
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white bg-transparent focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white bg-transparent focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white bg-transparent focus:outline-none"
                    required
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded placeholder-gray-500 text-white bg-transparent focus:outline-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-2 rounded hover:bg-gray-800 transition w-full"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Map */}
            <div className="w-full lg:w-1/2 bg-gray-900 rounded-lg overflow-hidden relative h-[400px] lg:h-full">
              <div className="absolute top-4 left-4 z-10 bg-black/80 px-6 py-4 rounded-md shadow-md max-w-sm w-[90%] sm:w-[80%]">
                <div className="space-y-3">
                  <div>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p className="text-gray-300 text-sm">
                      Daro pur , Bhadhohi p.o.- Bhadhohi,<br />Distric- Bhadhohi.
                      Pin Code - 221401
                    </p>
                  </div>
                  <div>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                      PHONE
                    </h2>
                    <p className="text-gray-300 text-sm">+91 9354715556</p>
                  </div>
                  <div>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <a className="text-indigo-400 text-sm">shubhra@carpetsdecor.com</a>
                  </div>
                </div>
              </div>
              <iframe
                className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-40"
                title="Nishu & Sons Location"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.598134446364!2d77.3516517!3d28.414575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd507bf756fd%3A0x30d0dd95cc786eb2!2sNishu%20%26%20Sons%20Photo%20Framing!5e0!3m2!1sen!2sin!4v1719405336266!5m2!1sen!2sin"
              />


            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Page;
