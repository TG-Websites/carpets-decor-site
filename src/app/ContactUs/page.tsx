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
            {/* Contact Section */}
            <section className="bg-black text-gray-300 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Title and Description */}
                    <div className="text-center max-w-xl mx-auto mb-6">
                        <h1 className="text-[32px] md:text-[48px] leading-[1.3] font-semibold graytxt">
                            Contact Us
                        </h1>
                        <p className="text-[#56585E] text-base">
                            Get in touch for custom carpets and decor information today!
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg">
                            <h2 className="text-sm font-semibold graytxt mb-6 text-center md:text-left">
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
                    </div>
                </div>
            </section>

            {/* Map Section */}
         <section>
    <div className="bg-black py-8 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1 max-w-xl">
                <h3 className="text-4xl font-bold tracking-tight mb-3 graytxt">Contact Us</h3>
                <p className="text-gray-600 mb-6">
                    Visit Hands Carpets & Rugs for personalized carpet decor and design solutions.
                </p>
                <div className="mb-4">
                    <h6 className="text-lg font-semibold mb-1 graytxt">Location</h6>
                    <p className="text-gray-600">
                        123 Carpet Street, Design District, New Delhi, India - 110001
                    </p>
                </div>
                <div>
                    <h6 className="text-lg font-semibold mb-1 graytxt">Phone</h6>
                    <p className="text-gray-600">+91 1234567890</p>
                </div>
            </div>

            {/* Right Column - Map */}
            <div className="w-full lg:w-[500px] h-[350px] rounded-md shadow-md overflow-hidden">
                <iframe
                    title="Hands Carpets & Rugs Location"
                    className="w-full h-full border-0"
                    src="https://maps.google.com/maps?q=123%20Carpet%20Street,%20Design%20District,%20New%20Delhi,%20India%20-%20110001&t=m&z=13&ie=UTF8&output=embed"
                    allowFullScreen
                />
            </div>
        </div>
    </div>
</section>

        </div>
    );
}

export default Page;
