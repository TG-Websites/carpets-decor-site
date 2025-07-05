export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-center bg-no-repeat bg-cover flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: 'url("https://www.yakcarpet.in/wp-content/uploads/2018/05/living-room-1-500x341.jpg")',
          backgroundAttachment: 'fixed', // key to parallax
          height: '40vh', // compact height
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#f4d57f' }}>
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            We value your privacy. Here&apos;s how Carpets collects, protects, and uses your information.
          </p>
        </div>
      </section>


      {/* Content */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-gray-300 space-y-14">
        {/* Section: Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed">
            Carpets is committed to ensuring your privacy is protected. This privacy policy outlines how your
            personal data is collected, used, stored, and shared when you visit or make a purchase from our website.
          </p>
        </div>

        {/* Section: What We Collect */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-5">What Information We Collect</h2>
          <div className="space-y-6 text-gray-300 pl-2">

            <div>
              <p>
                <span className="text-[#f4d57f] font-semibold">Name & Contact Info:</span>
                We collect your full name, phone number, and other contact details to provide timely communication, delivery updates, and personalized support.
              </p>
            </div>

            <div>
              <p>
                <span className="text-[#f4d57f] font-semibold">Shipping & Billing Address:</span>
                Your address details are collected to ensure successful delivery of physical carpet orders and for proper invoicing purposes.
              </p>
            </div>

            <div>
              <p>
                <span className="text-[#f4d57f] font-semibold">Email Address:</span>
                We use your email to send confirmations, order tracking, promotional updates, and to respond to your inquiries.
              </p>
            </div>

            <div>
              <p>
                <span className="text-[#f4d57f] font-semibold">Order History:</span>
                We maintain a record of your previous purchases to help you review past orders and for better customer service.
              </p>
            </div>

            <div>
              <p>
                <span className="text-[#f4d57f] font-semibold">Device & Technical Information:</span>
                Automatically collected data such as your IP address, browser type, and device model help us secure the platform and optimize your user experience.
              </p>
            </div>

            <div>
              <p>
                <span className="text-[#f4d57f] font-semibold">Cookies & Tracking:</span>
                We use cookies and similar technologies to remember your preferences, improve our website’s functionality, and show relevant product recommendations.
              </p>
            </div>

          </div>
        </div>


        {/* Section: Why We Collect It */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Why We Collect This Data</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 hover:border-[#ffffff] transition">
              <h3 className="font-semibold text-white text-lg mb-2">To Process Your Orders</h3>
              <p className="text-gray-300">
                Your personal and payment details ensure smooth order placement, billing, and timely delivery confirmations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 hover:border-[#ffffff] transition">
              <h3 className="font-semibold text-white text-lg mb-2">To Personalize Your Experience</h3>
              <p className="text-gray-300">
                Your preferences help us recommend carpets and collections that suit your home’s unique character and style.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 hover:border-[#ffffff] transition">
              <h3 className="font-semibold text-white text-lg mb-2">To Improve Our Services</h3>
              <p className="text-gray-300">
                Analytics data allows us to refine our website, product range, and customer service based on your behavior and feedback.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 hover:border-[#ffffff] transition">
              <h3 className="font-semibold text-white text-lg mb-2">To Stay in Touch</h3>
              <p className="text-gray-300">
                Occasionally, we may email you about exclusive offers, new launches, or important policy changes — but only with your consent.
              </p>
            </div>
          </div>
        </div>


        {/* Section: Data Sharing */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Sharing of Information</h2>
          <p className="text-gray-400 mb-4">
            We respect your privacy and ensure that your data is only shared when necessary and with trusted entities.
          </p>

          <ul className="list-disc list-inside pl-4 space-y-4 text-gray-300">
            <li>
              <span className="text-[#f4d57f] font-semibold">Delivery & Logistics Partners:</span>{' '}
              To ensure your carpets reach you safely and on time, we may share your name, contact details, and address with our verified delivery providers.
            </li>

            <li>
              <span className="text-[#f4d57f] font-semibold">Payment Gateways:</span>{' '}
              Your payment is processed securely through third-party services like <span className="text-white font-medium">Razorpay</span> or <span className="text-white font-medium">Stripe</span>. These services receive only the essential data required to complete the transaction.
            </li>

            <li>
              <span className="text-[#f4d57f] font-semibold">Legal Requirements:</span>{' '}
              If required by law, regulation, court order, or to protect our rights and safety, we may disclose limited user data to law enforcement or regulatory bodies.
            </li>

            <li>
              <span className="text-[#f4d57f] font-semibold">Internal Use:</span>{' '}
              Carpets team members or authorized staff may access your information strictly for fulfilling orders, customer service, and enhancing user experience. Access is limited and monitored.
            </li>
          </ul>
        </div>


        {/* Section: Data Protection */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-3">Data Protection</h2>
          <p className="text-white">
            At Carpets, the security of your personal information is of utmost importance to us. We follow
            industry-standard practices and regularly update our security infrastructure to keep your data safe.
          </p>
          <p className="text-white">
            This includes:
            <br />
            - Secure Sockets Layer (SSL) encryption for safe transactions <br />
            - Firewall-protected servers <br />
            - Restricted internal access with role-based permissions <br />
            - Routine system audits and vulnerability scanning
          </p>
        </div>

        {/* Section: Cookies */}
        <div className="mt-12 space-y-4 bg-[#1a1a1a] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-3">Cookies & Tracking</h2>
          <p className="text-white">
            To enhance your browsing experience, we use cookies — small data files stored on your device. These help us
            remember your preferences, improve loading times, analyze traffic, and show relevant products or offers. Cookies
            also allow us to better understand how visitors interact with our site so we can improve our services over time.
          </p>
          <p className="text-white">
            You can control or disable cookies anytime via your browser settings. However, please note that some features may
            not function correctly without them.
          </p>
        </div>

        {/* Section: Your Rights */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-3">Your Rights</h2>
          <p className="text-white">
            You have complete control over your personal information. You may contact us to:
          </p>
          <p className="text-white">
            - Request access to the data we hold about you <br />
            - Correct or update inaccurate information <br />
            - Ask us to delete your personal data (where legally permitted) <br />
            - Withdraw consent from marketing or data usage at any time
          </p>
          <p className="text-white">
            To exercise any of these rights, please reach out to us at{' '}
            <a href="mailto:info@handscarpets.com" className="underline hover:text-[#f4d57f] transition">
              info@handscarpets.com
            </a>.
          </p>
        </div>


        {/* Section: Contact Info */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 sm:p-8 mt-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-gray-400">
            If you have questions or suggestions regarding our privacy policy, feel free to contact:
          </p>
          <ul className="mt-3 space-y-2 text-gray-300 text-base">
            <li>
              <span className="font-semibold text-[#f4d57f]">Email:</span>{' '}
              <a href="mailto:info@handscarpets.com" className="text-indigo-400 underline">

               shubhra@carpetsdecor.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#f4d57f]">Phone:</span> +91 9354715556
            </li>
            <li>
              <span className="font-semibold text-[#f4d57f]">Address:</span>
              L-20 Central Mall, RPS City. Sector 88 Faridabad
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
}
