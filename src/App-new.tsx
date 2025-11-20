import React, { useState, useEffect } from 'react';
import { Mail, Instagram, MessageCircle, Download, Briefcase, GraduationCap, Code, ExternalLink, Github, Linkedin, Sparkles, Star, Heart, Zap } from 'lucide-react';
import './animations-dynamic.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const biodata = {
    name: "Sarah Cantika Putri",
    age: 24,
    gender: "Perempuan",
    title: "Full Stack Developer & UI/UX Enthusiast",
    description: "Saya adalah seorang developer dengan passion dalam menciptakan aplikasi web yang cantik dan fungsional. Memiliki pengalaman 3+ tahun dalam pengembangan web modern dengan fokus pada user experience dan clean code.",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    email: "sarah.cantika@email.com",
    instagram: "@sarahcantika",
    whatsapp: "+62 812-3456-7890",

    portfolio: [
      {
        title: "E-Commerce Platform",
        description: "Platform e-commerce modern dengan fitur lengkap: payment gateway, inventory management, dan admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        emoji: "🎵"
      },
      {
        title: "Task Management App",
        description: "Aplikasi manajemen tugas dengan fitur real-time collaboration dan notifications.",
        tech: ["React", "Firebase", "Tailwind CSS"],
        emoji: "📱"
      },
      {
        title: "Portfolio Website Builder",
        description: "Website builder untuk membuat portfolio personal dengan drag-and-drop interface.",
        tech: ["Vue.js", "Python", "PostgreSQL"],
        emoji: "✨"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section - Pink Theme */}
      <div id="hero" className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Header Info */}
        <div className="absolute top-8 left-0 right-0 flex justify-between px-12 text-gray-600 italic">
          <div className="text-xl">/Full Stack Developer/</div>
          <div className="text-xl">/UI/UX Designer/</div>
          <div className="text-xl">/{biodata.name}/</div>
        </div>

        {/* Sparkles */}
        <div className="absolute top-1/4 right-1/6 text-5xl text-pink-400 animate-pulse">✦</div>
        <div className="absolute top-2/3 left-1/6 text-4xl text-pink-400 animate-pulse" style={{animationDelay: '1s'}}>✧</div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl text-pink-400 animate-pulse" style={{animationDelay: '2s'}}>★</div>

        {/* Year */}
        <div className="text-6xl italic text-pink-400 mb-4 animate-fadeInUp">/2025/</div>

        {/* Main Title */}
        <h1 className="text-9xl font-black text-transparent mb-8 animate-fadeInUp" style={{
          WebkitTextStroke: '3px #ff69b4',
          textStroke: '3px #ff69b4'
        }}>
          PORTFOLIO
        </h1>

        {/* Character */}
        <div className="relative mb-8 animate-floatUp">
          <img
            src={biodata.profileImage}
            alt="Profile"
            className="w-96 h-96 rounded-full object-cover border-8 border-pink-300 shadow-2xl"
          />
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Welcome */}
        <div className="text-4xl italic text-pink-400 animate-fadeIn">/WELCOME/</div>

        {/* Footer Info */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-12 text-gray-600">
          <div>{biodata.email}</div>
          <div>Portfolio Website</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">MY PORTFOLIO</div>
            <div className="flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold px-4 py-2 rounded-full transition-all hover:bg-blue-50">About</a>
              <a href="#work" className="text-white bg-blue-600 px-4 py-2 rounded-full font-semibold">My Work</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 font-semibold px-4 py-2 rounded-full transition-all hover:bg-blue-50">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold px-4 py-2 rounded-full transition-all hover:bg-blue-50">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Blue Section - About */}
      <section id="about" className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 py-20 relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-36 -right-36 w-96 h-96 bg-white rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/6 w-60 h-60 bg-yellow-300 rounded-full blur-3xl opacity-25"></div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-6xl font-bold text-blue-600 mb-4">"PRESENTATION"</div>
            <div className="text-4xl text-yellow-500 mb-8">LET'S GET TOGETHER</div>
            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              {biodata.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-4 border-blue-600 hover:transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4 animate-bounce">😊</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Creative Development</h3>
                <p className="text-gray-600">Pengembangan aplikasi web yang inovatif dengan teknologi modern.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-4 border-blue-600 hover:transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4 animate-bounce" style={{animationDelay: '0.2s'}}>🎨</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">UI/UX Design</h3>
                <p className="text-gray-600">Desain antarmuka yang menarik dan user-friendly.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-4 border-blue-600 hover:transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4 animate-bounce" style={{animationDelay: '0.4s'}}>💡</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Innovation</h3>
                <p className="text-gray-600">Solusi kreatif untuk setiap tantangan pengembangan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Section - Portfolio */}
      <section id="work" className="bg-gradient-to-br from-yellow-300 to-yellow-200 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center mb-16">
          <h2 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-4">
            MY COLLECTION
          </h2>
          <p className="text-2xl text-blue-600">Eksplorasi karya-karya terbaru dan terbaik</p>
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biodata.portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border-4 border-blue-600 shadow-xl hover:transform hover:scale-105 hover:-rotate-2 transition-all duration-300"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl mb-6 flex items-center justify-center text-6xl">
                  {project.emoji}
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-7xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            MY SKILLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Laravel', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Python', 'FastAPI', 'React', 'Figma'].map((skill, i) => (
              <div
                key={skill}
                className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-2xl text-center font-bold text-xl hover:transform hover:scale-110 hover:rotate-5 transition-all duration-300 cursor-pointer shadow-lg"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-pink-400 to-pink-300 py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              NEW MESSAGE
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block font-bold text-blue-600 mb-2 text-xl">Nama Anda</label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full p-4 border-4 border-blue-600 rounded-2xl text-lg focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-blue-600 mb-2 text-xl">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full p-4 border-4 border-blue-600 rounded-2xl text-lg focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-blue-600 mb-2 text-xl">Subjek</label>
                <input
                  type="text"
                  placeholder="Subjek pesan"
                  className="w-full p-4 border-4 border-blue-600 rounded-2xl text-lg focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-blue-600 mb-2 text-xl">Pesan</label>
                <textarea
                  rows={6}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full p-4 border-4 border-blue-600 rounded-2xl text-lg focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl font-bold text-2xl hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                KIRIM PESAN ✉️
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-2xl mb-4">Mari Berkolaborasi! 🚀</p>
          <p className="text-lg mb-2">Email: <a href={`mailto:${biodata.email}`} className="text-yellow-300 hover:underline">{biodata.email}</a></p>
          <p className="text-lg mb-8">Portfolio: Website Portfolio</p>
          <p className="opacity-70">© 2025 Portfolio. Made with ❤️ by {biodata.name}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
