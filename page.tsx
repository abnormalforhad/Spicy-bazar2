
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-restaurant-line text-red-600 text-2xl"></i>
              </div>
              <span className="font-['Pacifico'] text-2xl text-red-600">SpiceWorld</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 whitespace-nowrap cursor-pointer">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-red-600 whitespace-nowrap cursor-pointer">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 whitespace-nowrap cursor-pointer">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 whitespace-nowrap cursor-pointer">Contact</Link>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 whitespace-nowrap cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center inline-block mr-2">
                  <i className="ri-shopping-cart-line"></i>
                </div>
                Cart
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Premium%20authentic%20Indian%20spices%20scattered%20on%20rustic%20wooden%20table%2C%20red%20chili%20powder%2C%20turmeric%20powder%2C%20colorful%20spice%20powders%20in%20small%20bowls%2C%20warm%20golden%20lighting%2C%20traditional%20spice%20market%20atmosphere%2C%20shallow%20depth%20of%20field%2C%20artisanal%20spice%20collection%20with%20vibrant%20red%20and%20yellow%20colors%2C%20natural%20organic%20spices%20photography&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="w-full max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium
              <span className="text-yellow-400 block">Spice Powders</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Discover the finest collection of authentic spice powders. From fiery red chili to golden turmeric, bring the essence of traditional flavors to your kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 whitespace-nowrap cursor-pointer">
                  Shop Spices Now
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Premium Spices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked and carefully processed spice powders that bring authentic flavors to your dishes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Red Chili Powder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Premium%20red%20chili%20powder%20in%20elegant%20glass%20bowl%2C%20vibrant%20deep%20red%20color%2C%20fine%20texture%2C%20minimalist%20white%20background%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20authentic%20Indian%20spice%2C%20high%20quality%20organic%20chili%20powder%20with%20beautiful%20presentation&width=400&height=300&seq=chili1&orientation=landscape"
                  alt="Red Chili Powder"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Red Chili Powder</h3>
                <p className="text-gray-600 mb-4">Premium quality dried red chilies ground to perfection. Adds the perfect heat and color to your dishes.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">$12.99</span>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 whitespace-nowrap cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Turmeric Powder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Golden%20turmeric%20powder%20in%20elegant%20ceramic%20bowl%2C%20bright%20yellow%20color%2C%20fine%20smooth%20texture%2C%20minimalist%20white%20background%2C%20professional%20food%20photography%2C%20natural%20lighting%2C%20authentic%20Indian%20spice%2C%20high%20quality%20organic%20turmeric%20with%20beautiful%20presentation&width=400&height=300&seq=turmeric1&orientation=landscape"
                  alt="Turmeric Powder"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Turmeric Powder</h3>
                <p className="text-gray-600 mb-4">Pure golden turmeric powder with natural anti-inflammatory properties. Essential for authentic flavors.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">$9.99</span>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 whitespace-nowrap cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Coriander Powder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Fresh%20coriander%20powder%20in%20elegant%20white%20ceramic%20bowl%2C%20light%20brown%20color%2C%20fine%20aromatic%20texture%2C%20minimalist%20white%20background%2C%20professional%20food%20photography%2C%20soft%20natural%20lighting%2C%20authentic%20Indian%20spice%2C%20high%20quality%20organic%20coriander%20with%20beautiful%20presentation&width=400&height=300&seq=coriander1&orientation=landscape"
                  alt="Coriander Powder"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Coriander Powder</h3>
                <p className="text-gray-600 mb-4">Freshly ground coriander seeds with a warm, nutty flavor. Perfect base for curries and marinades.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$8.99</span>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 whitespace-nowrap cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 whitespace-nowrap cursor-pointer">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Our Spices?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to bringing you the finest quality spice powders with uncompromising standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-red-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">100% Natural</h3>
              <p className="text-gray-600">No artificial colors, preservatives, or additives. Pure, natural spices as nature intended.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-medal-line text-yellow-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected and processed using traditional methods to preserve maximum flavor and aroma.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Fresh Delivery</h3>
              <p className="text-gray-600">Direct from our processing facility to your kitchen. Fast shipping to maintain freshness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Spice Up Your Cooking?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Join thousands of home cooks who trust our premium spice powders for authentic, flavorful meals every day.
          </p>
          <Link href="/products">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 whitespace-nowrap cursor-pointer">
              Start Shopping Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-restaurant-line text-red-600 text-xl"></i>
                </div>
                <span className="font-['Pacifico'] text-xl text-red-600">SpiceWorld</span>
              </div>
              <p className="text-gray-400 mb-4">Premium spice powders for authentic flavors in every dish.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-facebook-fill text-gray-400 hover:text-white cursor-pointer"></i>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-instagram-line text-gray-400 hover:text-white cursor-pointer"></i>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-twitter-line text-gray-400 hover:text-white cursor-pointer"></i>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-400 hover:text-white cursor-pointer">All Products</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white cursor-pointer">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@spiceworld.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 SpiceWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
