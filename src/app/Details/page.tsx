import React from 'react'

const page = () => {
    return (
        <div>

        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="https://content3.jdmagicbox.com/v2/comp/delhi/35/011pje00935/catalogue/hindustan-carpets-tilak-nagar-delhi-carpet-dealers-y9bp2i6zpn.jpg"
                            alt="Handmade Carpet"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-semibold text-white">Handcrafted Wool Carpet</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Our handwoven carpets are made with the finest wool, showcasing exquisite craftsmanship. Each piece is unique and designed to elevate the beauty of your living space. 
                            The intricate design and superior quality ensure durability and a touch of elegance to your home decor.
                        </p>

                        <ul className="space-y-4 text-gray-300">
                            <li><strong>Material:</strong> 100% Natural Wool</li>
                            <li><strong>Size:</strong> 5x8 ft, 8x10 ft, Custom Sizes Available</li>
                            <li><strong>Color:</strong> Warm Earth Tones</li>
                            <li><strong>Style:</strong> Traditional Handcrafted Design</li>
                        </ul>

                        <div className="flex items-center space-x-6">
                            <span className="text-3xl font-semibold text-white">₹12,500</span>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                                Add to Cart
                            </button>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-2xl font-semibold text-white">Why Choose Our Handmade Carpets?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Each carpet is woven by skilled artisans, ensuring the highest quality and attention to detail in every design. Our carpets are crafted using eco-friendly materials and sustainable methods, making them not only a great addition to your home but also an environmentally responsible choice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
        </div>
    )
}

export default page
