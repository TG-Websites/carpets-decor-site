import React from 'react'

const BlogDetails = () => {
    const blogPost = {
        title: 'How to Choose the Perfect Handwoven Carpet for Your Home',
        date: 'April 29, 2025',
        author: 'Jane Doe',
        imgSrc: 'https://www.yakcarpet.in/wp-content/uploads/2018/05/living-room-1-500x341.jpg',
        content: `
            Choosing the right handwoven carpet can truly transform your home. It's not just about aesthetics; the right carpet brings warmth, texture, and personality to your space. Here are a few things to consider when making your choice:

            1. Consider your lifestyle. Do you have kids or pets? Go for darker tones or patterned carpets that hide stains better.
            2. Material matters. Wool carpets are durable and naturally stain-resistant, while silk adds a touch of luxury.
            3. Measure your space carefully. A carpet that's too small or too large can throw off the room’s balance.
            4. Don’t ignore maintenance. Some handwoven rugs require professional cleaning.
            
            Explore local artisans or certified sources to find authentic handwoven options that reflect your personal style.
        `,
    };

    return (
        <div className="bg-black text-white min-h-screen py-20 px-6 sm:px-12">
            <article className="max-w-4xl mx-auto">
                <img
                    src={blogPost.imgSrc}
                    alt={blogPost.title}
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
                <h1 className="text-4xl text-white sm:text-5xl font-bold mb-4">{blogPost.title}</h1>
                <div className="text-gray-400 text-sm mb-6">
                    <span>By {blogPost.author}</span> · <span>{blogPost.date}</span>
                </div>
                <div className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
                    {blogPost.content}
                </div>
            </article>

        </div>
    );
};

export default BlogDetails;
