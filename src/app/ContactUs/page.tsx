'use client'; // Required if using Next.js App Router

import React, { useState } from 'react';

function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        const { name, email, message } = formData;

        const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I wanted to say: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const phone = '919632888771'; // WhatsApp requires country code without "+"
        const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };


    return (
        <div>
            <section
                className="relative h-[70vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url("https://handscarpets.com/cdn/shop/files/Meshara-Silver.jpg?v=1745826278&width=360")`,
                }}
            >
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
                    <div className="space-y-6 max-w-3xl">
                        <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                            Let’s Start a Conversation
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-200">
                            Have questions or need assistance? Our team is here to help you with any inquiries or service-related queries.
                        </p>

                        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition-all duration-300 transform hover:scale-105">
                            Contact Us Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-black text-gray-300 py-16">
  <div className="max-w-7xl mx-auto px-4">
    {/* Title */}
    <div className="text-center max-w-xl mx-auto mb-12">
      <h1 className="text-[32px] md:text-[48px] leading-[1.3] font-semibold graytxt">
        Contact Us
      </h1>
      <p className="text-white text-base">
        Get in touch for custom carpets and decor information today!
      </p>
    </div>

    {/* Form + Map Layout */}
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* Left: Form (50%) */}
      <div className="w-full lg:w-1/2">
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
            SEND
          </button>
        </form>
      </div>

      {/* Right: Map (50%) */}
      <div className="w-full lg:w-1/2 bg-gray-900 rounded-lg overflow-hidden relative h-[400px]">
        {/* Contact Info Box - Left aligned with max-width */}
        <div className="absolute top-4 left-4 z-10 bg-black/80 px-6 py-4 rounded-md shadow-md max-w-sm w-[90%] sm:w-[80%]">
          <div className="space-y-3">
            <div>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="text-gray-300 text-sm">
                123 Carpet Street, Design District,<br />
                New Delhi, India - 110001
              </p>
            </div>
            <div>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                PHONE
              </h2>
              <p className="text-gray-300 text-sm">+91 1234567890</p>
            </div>
            <div>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 text-sm">info@handscarpets.com</a>
            </div>
          </div>
        </div>

        {/* Map Behind */}
        <iframe
          className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-40"
          title="Map"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=123%20Carpet%20Street,%20Design%20District,%20New%20Delhi,%20India%20-%20110001&t=m&z=14&ie=UTF8&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>


        </div>
    );
}

export default Page;
