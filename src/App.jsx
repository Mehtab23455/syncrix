import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Code, Zap, TrendingUp, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Analytics } from "@vercel/analytics/next"
const WingByteWebsite = () => {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Apply font to body
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);
  
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const reviewsRef = useRef(null);

  // Client testimonials
  const reviews = [
    {
      name: "Sarah Chen",
      company: "TechFlow Inc",
      rating: 5,
      text: "Syncrix transformed our entire workflow. The CRM automation they built saved us 20+ hours per week. Absolutely phenomenal work!",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "GrowthLabs",
      rating: 5,
      text: "Their digital marketing expertise doubled our conversion rates in 3 months. The team is responsive, creative, and delivers beyond expectations.",
      avatar: "MR"
    },
    {
      name: "Priya Sharma",
      company: "CloudSync Solutions",
      rating: 5,
      text: "Best development partner we've ever worked with. Clean code, scalable architecture, and they truly understand business needs.",
      avatar: "PS"
    },
    {
      name: "James Walker",
      company: "Velocity Startups",
      rating: 5,
      text: "From concept to launch in record time. Syncrix's automation-first approach revolutionized how we handle customer data.",
      avatar: "JW"
    }
  ];

  // Amazing clients showcase
  const clients = [
    {
      name: "Matchhub",
      description: "Tailor your web projects to perfection with our app's extensive customization options, allowing you to create unique, visually stunning experiences that truly represent your brand.",
      color: "from-[#0052CC] to-[#0065FF]",
      icon: "🚀"
    },
    {
      name: "Bombay Dreams Restaurants",
      description: "Expand your reach with confidence as our app ensures seamless functionality across borders, supporting international currencies, languages, and local regulations for a truly global presence.",
      color: "from-[#FF4757] to-[#FF6B7A]",
      icon: "🌐"
    },
    {
      name: "SmartExpense AI",
      description: "Unlock actionable insights with our app's comprehensive and detailed statistics. Track user engagement, conversion rates, and performance metrics in real-time.",
      color: "from-[#0052CC] to-[#FF4757]",
      icon: "📊"
    },
    {
      name: "Sidhu Agricultural Industries",
      description: "Experience unparalleled speed and efficiency with our app's lightning-fast user interface. Enjoy swift navigation, instant responses, and a smooth workflow that maximizes your productivity.",
      color: "from-[#FF4757] to-[#0052CC]",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const description = formData.get('description');
    const subject = `Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject Description: ${description}`;
    window.location.href = `mailto:mehtabsinghsidhu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute top-0 -left-4 w-96 h-96 ${isDark ? 'bg-[#0052CC]' : 'bg-[#0052CC]/40'} rounded-full mix-blend-multiply filter blur-3xl animate-blob`}></div>
        <div className={`absolute top-0 -right-4 w-96 h-96 ${isDark ? 'bg-[#FF4757]' : 'bg-[#FF4757]/40'} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-20 w-96 h-96 ${isDark ? 'bg-[#0052CC]' : 'bg-[#0052CC]/30'} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png" 
                  alt="Syncrix Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <span
                className="font-bold text-xl hidden sm:block bg-gradient-to-r from-[#0052CC] to-[#FF4757] bg-clip-text text-transparent"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Syncrix
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-[#0052CC] transition-colors">Services</button>
              <button onClick={() => scrollToSection('clients')} className="hover:text-[#0052CC] transition-colors">Clients</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-[#0052CC] transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('why-us')} className="hover:text-[#0052CC] transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-[#0052CC] to-[#FF4757] px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all text-white">
                Contact
              </button>
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-b-2xl`}>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors">Services</button>
              <button onClick={() => scrollToSection('clients')} className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors">Clients</button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/20 via-[#FF4757]/10 to-[#0052CC]/20"></div>
          <div className={`absolute inset-0 ${isDark ? 'bg-gray-900/40' : 'bg-white/40'}`}></div>
        </div>

        <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Engineering Software.
              <br />
              <span className="bg-gradient-to-r from-[#0052CC] via-[#FF4757] to-[#0052CC] bg-clip-text text-transparent">
                Automating Growth.
              </span>
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'} animate-fade-in-up animation-delay-200`}>
              We build scalable software solutions, CRM systems, and performance-driven digital marketing for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up animation-delay-400">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="
                  group relative
                  bg-gradient-to-r from-[#0052CC] to-[#FF4757]
                  px-10 py-4
                  rounded-full
                  text-[15px] font-semibold tracking-wide
                  text-white
                  shadow-lg hover:shadow-2xl
                  hover:scale-[1.06]
                  transition-all
                  flex items-center gap-4
                "
              >
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Request Free Consultation</span>
                <ArrowRight className="relative w-5 h-5 translate-y-[1px] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Divider text */}
              <span className="text-sm text-gray-400">or</span>

              {/* Calendly CTA */}
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105
                           text-[#0052CC] border-[#0052CC] hover:bg-[#0052CC]/10"
              >
                Schedule 30-min Strategy Call
              </a>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection('services')}
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105
                  ${isDark
                    ? 'border-gray-500 hover:bg-white/5'
                    : 'border-gray-300 hover:bg-black/5'
                  }`}
              >
                View Services
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <span className={`text-xs tracking-wide uppercase ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Scroll
            </span>
            <div
              className={`
                w-7 h-12 rounded-full flex justify-center relative
                ${isDark
                  ? 'border border-gray-500/70 shadow-[0_0_12px_rgba(255,255,255,0.08)]'
                  : 'border border-gray-700/60 shadow-[0_0_12px_rgba(0,0,0,0.12)]'}
              `}
            >
              <div
                className={`
                  w-1 h-3 rounded-full absolute top-2 animate-scroll
                  bg-gradient-to-b from-[#0052CC] to-[#FF4757]
                `}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-10 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm font-semibold">
          {[
            "🌍 Global Clients",
            "🛡️ Data Privacy Focused"
          ].map((item) => (
            <div
              key={item}
              className={`px-6 py-3 rounded-full ${
                isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
              } shadow-sm`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 md:py-32 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF4757] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-12 h-12" />,
                title: "Software Development",
                description: "Custom web applications, SaaS platforms, APIs, and dashboards tailored to your needs.",
                color: "from-[#0052CC] to-[#0065FF]"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-white" />,
                title: "High-Conversion Landing Pages",
                description: "Fast, SEO-optimized landing pages designed to convert visitors into leads.",
                color: "from-[#FF4757] to-[#FF6B7A]"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "CRM & Automation",
                description: "Lead management, WhatsApp automation, Google Sheets CRM, and workflow automation for efficiency.",
                color: "from-[#0052CC] to-[#FF4757]"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Digital Marketing",
                description: "SEO, paid ads, conversion funnels, and analytics-driven campaigns to drive growth.",
                color: "from-[#FF4757] to-[#0052CC]"
              }
            ].map((service, index) => (
              <div key={index} className={`group p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16" style={{ fontFamily: "'Sora'" }}>
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", color: "text-[#0052CC]" },
              { step: "02", title: "Strategy & Proposal", color: "text-[#FF4757]" },
              { step: "03", title: "Build & Automate", color: "text-[#0052CC]" },
              { step: "04", title: "Launch & Support", color: "text-[#FF4757]" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`text-5xl font-black ${item.color} mb-4`}>{item.step}</div>
                <p className="font-semibold text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazing Clients Section */}
      <section id="clients" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Checkout Our Amazing Clients</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Join our esteemed roster of clients who have experienced the ByteOski difference. Let's embark on a journey to transform your vision into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className={`group p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{client.name}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section with Animation */}
      <section id="reviews" className={`py-20 md:py-32 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF4757] mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`p-8 md:p-12 rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#FF4757] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-xl">{review.name}</h4>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{review.company}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className={`text-lg italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>"{review.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentReview === index ? 'bg-[#0052CC] w-8' : (isDark ? 'bg-gray-700' : 'bg-gray-300')}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg transition-colors`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg transition-colors`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>Why Syncrix</h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We prioritize a business-first approach, delivering solutions that align with your goals, enhance productivity, and drive sustainable growth.
              </p>
              <div className="space-y-4">
                {['Clean Scalable Code', 'Automation-First Thinking', 'Growth-Oriented Solutions', 'Long-Term Support'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0052CC] to-[#FF4757] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className={`p-8 rounded-3xl ${isDark ? 'bg-gradient-to-br from-[#0052CC]/20 to-[#FF4757]/20' : 'bg-gradient-to-br from-[#0052CC]/10 to-[#FF4757]/10'} backdrop-blur-sm border ${isDark ? 'border-[#0052CC]/30' : 'border-[#0052CC]/20'}`}>
                <div className="space-y-6">
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-900/50' : 'bg-white/80'}`}>
                    <div className="text-4xl font-black bg-gradient-to-r from-[#0052CC] to-[#FF4757] bg-clip-text text-transparent mb-2">100+</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Projects Delivered</div>
                  </div>
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-900/50' : 'bg-white/80'}`}>
                    <div className="text-4xl font-black bg-gradient-to-r from-[#0052CC] to-[#FF4757] bg-clip-text text-transparent mb-2">50+</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Happy Clients</div>
                  </div>
                  <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-900/50' : 'bg-white/80'}`}>
                    <div className="text-4xl font-black bg-gradient-to-r from-[#0052CC] to-[#FF4757] bg-clip-text text-transparent mb-2">5+</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Tech Stack & Tools</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Node.js', 'Django', 'PostgreSQL', 'Tailwind', 'Google Sheets', 'WhatsApp APIs'].map((tech, index) => (
              <span 
                key={tech} 
                className={`px-6 py-3 rounded-full ${isDark ? 'bg-gray-900' : 'bg-white'} border-2 font-semibold hover:scale-110 transition-transform cursor-pointer ${
                  index % 2 === 0 ? 'border-[#0052CC] hover:bg-[#0052CC]/10' : 'border-[#FF4757] hover:bg-[#FF4757]/10'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Get In Touch</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to transform your business? Let's talk!
            </p>
            <p className="text-center text-sm text-gray-500 mt-4">
              Operating from India · Supporting clients worldwide
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className={`p-8 md:p-12 rounded-3xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl space-y-6`}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-2 focus:border-[#0052CC] focus:outline-none transition-colors`}
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                required
                className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-2 focus:border-[#0052CC] focus:outline-none transition-colors`}
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-2 focus:border-[#0052CC] focus:outline-none transition-colors`}
            />
            <textarea
              name="description"
              placeholder="Project Description"
              rows="5"
              required
              className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-2 focus:border-[#0052CC] focus:outline-none transition-colors resize-none`}
            />
            <button type="submit" className="w-full bg-gradient-to-r from-[#0052CC] to-[#FF4757] py-4 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:scale-105 transition-all">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0052CC] to-[#FF4757] rounded-lg flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Syncrix logo"
                    className="w-16 h-18"
                  />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-[#0052CC] to-[#FF4757] bg-clip-text text-transparent" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Syncrix
                </span>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Engineering software. Automating growth.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Registered Business · All contracts governed under law
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className={`block ${isDark ? 'text-gray-400 hover:text-[#0052CC]' : 'text-gray-600 hover:text-[#0052CC]'} transition-colors`}>Services</button>
                <button onClick={() => scrollToSection('clients')} className={`block ${isDark ? 'text-gray-400 hover:text-[#0052CC]' : 'text-gray-600 hover:text-[#0052CC]'} transition-colors`}>Clients</button>
                <button onClick={() => scrollToSection('reviews')} className={`block ${isDark ? 'text-gray-400 hover:text-[#0052CC]' : 'text-gray-600 hover:text-[#0052CC]'} transition-colors`}>Reviews</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/mehtabsidhu66" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-800 hover:bg-[#FF4757]' : 'bg-gray-200 hover:bg-[#FF4757]'} flex items-center justify-center transition-colors`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-800 hover:bg-[#0052CC]' : 'bg-gray-200 hover:bg-[#0052CC]'} flex items-center justify-center transition-colors`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-800 hover:bg-[#FF4757]' : 'bg-gray-200 hover:bg-[#FF4757]'} flex items-center justify-center transition-colors`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
              <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                mehtabsinghsidhu01@gmail.com
              </p>
            </div>
          </div>
          <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Syncrix. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/917973088017"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsWhatsAppHovered(true)}
          onMouseLeave={() => setIsWhatsAppHovered(false)}
          className="group relative"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          {isWhatsAppHovered && (
            <div className={`absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl whitespace-nowrap font-semibold animate-fade-in`}>
              Say Hi! 👋
            </div>
          )}
        </a>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WingByteWebsite;