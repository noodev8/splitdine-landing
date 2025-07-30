export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">SplitDine</h1>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Privacy</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex items-center min-h-screen pt-16">
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-16 py-16 md:py-24 gap-12 lg:gap-16">

          {/* Left Side: Text */}
          <div className="flex-1 max-w-2xl lg:max-w-3xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-black">Split the bill.</span><br />
              <span className="text-purple-600 whitespace-nowrap">Share the moment.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
              Group dining made simple — from order to pay.
              SplitDine lets everyone choose what they ate, split shared dishes, and get the final amount — no stress.
            </p>
            
            <div className="mt-4 inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold text-lg">
              🎉 100% FREE - No subscriptions, no hidden fees
            </div>

            <div className="mt-2 flex items-center gap-6 justify-center lg:justify-start">
              <a href="https://apps.apple.com/app/id6749145661" className="hover:opacity-80 transition-opacity">
                <img src="/appstore.svg" alt="Download on App Store" className="h-24 md:h-32 lg:h-36 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.noodev8.splitdine2" className="hover:opacity-80 transition-opacity">
                <img src="/googleplay.svg" alt="Get it on Google Play" className="h-24 md:h-32 lg:h-36 w-auto" />
              </a>
            </div>
          </div>

          {/* Right Side: Image or Mockup */}
          <div className="flex-none lg:flex-1">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[200px] md:max-w-[250px] lg:max-w-[280px]">
                <img 
                  src="/mockup.png" 
                  alt="SplitDine app screenshot" 
                  className="w-full max-h-[500px] object-contain rounded-3xl shadow-2xl border-4 border-gray-200 transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why SplitDine Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              It&apos;s <span className="font-bold text-green-600">100% FREE</span>, fast, and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pick your own dishes
              </h3>
              <p className="text-gray-600">
                No need to split everything — everyone selects exactly what they ordered.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Split shared items instantly
              </h3>
              <p className="text-gray-600">
                Appetizers, drinks, or desserts — divide shared items effortlessly with others.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get a clear summary
              </h3>
              <p className="text-gray-600">
                See exactly what everyone owes with a transparent breakdown of all costs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🙋‍♀️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hosts can manage or delegate
              </h3>
              <p className="text-gray-600">
                The host controls the process or can let others handle their own portions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tap while you wait
              </h3>
              <p className="text-gray-600">
                No rush at the end — everyone can input their items during the meal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Completely free to use
              </h3>
              <p className="text-gray-600">
                No hidden fees, no subscriptions — just a simple, free tool for group dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to simplify group dining?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-4 max-w-2xl mx-auto">
            No more awkward calculations or complicated receipts. Just type while you wait, and let SplitDine handle the rest.
          </p>
          <div className="mb-8 inline-block bg-white bg-opacity-20 text-white px-6 py-2 rounded-full font-bold text-lg">
            💯 FREE to Download!
          </div>
          
          <div className="flex items-center gap-6 justify-center">
            <a href="https://apps.apple.com/app/id6749145661" className="hover:opacity-80 transition-opacity">
              <img src="/appstore.svg" alt="Download on App Store" className="h-24 md:h-32 lg:h-36 w-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.noodev8.splitdine2" className="hover:opacity-80 transition-opacity">
              <img src="/googleplay.svg" alt="Get it on Google Play" className="h-24 md:h-32 lg:h-36 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-purple-300 transition-colors">SplitDine</h3>
              </a>
              <p className="text-gray-400 mb-6 max-w-md">
                Making group dining simple with intuitive bill splitting. Type while you wait, split what you share. <span className="text-green-400 font-semibold">Always free.</span>
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>splitdine@noodev8.com</li>
                <li>1 Cumberland Place<br />Welshpool. SY21 7SB</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SplitDine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
