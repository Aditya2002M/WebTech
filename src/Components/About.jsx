import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#dbeafe] p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
          Welcome to [Your Health Website Name], your trusted partner in health and wellness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-start">
            <div className="p-4 bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
              <p className="text-gray-600 text-base">
                Our team of health experts includes certified professionals in nutrition, fitness, mental health, and medical research.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-4 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 13V7a1 1 0 00-1-1h-3.172a2.992 2.992 0 00-5.656 0H5a1 1 0 00-1 1v6a1 1 0 001 1h8.172a2.992 2.992 0 005.656 0H17a1 1 0 001-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Personalized Advice</h3>
              <p className="text-gray-600 text-base">
                We offer personalized advice tailored to your unique health needs and goals.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-4 bg-purple-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 17a1 1 0 011-1h2a1 1 0 011 1v1h-4v-1z" />
                <path fillRule="evenodd" d="M6 8a4 4 0 018 0v3.586l1.293 1.293a1 1 0 01-1.414 1.414L14 12.414V8a6 6 0 00-12 0v3.586L.293 14.707a1 1 0 101.414 1.414L4 12.414V8a4 4 0 012-3.465V8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Trusted Resources</h3>
              <p className="text-gray-600 text-base">
                Access a wealth of reliable resources, from articles to videos, all created and curated by industry experts.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-4 bg-red-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.707-11.707a1 1 0 00-1.414 0L9 8.586 7.707 7.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Holistic Approach</h3>
              <p className="text-gray-600 text-base">
                We believe in a holistic approach to health, addressing physical, mental, and emotional well-being.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Become part of our community and stay updated with the latest health tips, exclusive content, and more.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
