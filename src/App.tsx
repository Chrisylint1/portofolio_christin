import React, { useState, useEffect } from 'react';
import { Mail, Instagram, MessageCircle, Download, Github, Linkedin, ArrowDown, X, Eye } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'education', 'experience', 'portfolio', 'contact'];
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/CV Christin.pdf';
    link.download = 'CV_Christin_Yulianti.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const biodata = {
    name: "Christin Yulianti",
    age: 24,
    gender: "Perempuan",
    title: "Full Stack Developer & UI/UX Enthusiast",
    description: "Saya adalah seorang developer dengan passion dalam menciptakan aplikasi web yang cantik dan fungsional. Memiliki pengalaman dalam pengembangan web modern dengan fokus pada user experience dan clean code.",
    profileImage: "/images/profile.jpg",
    email: "yulianticristin@email.com",
    instagram: "@chrisylint",
    whatsapp: "+62 882-2413-1751",
    github: "github.com/Chrisylint1",
    linkedin: "linkedin.com/in/christin-yulianti-53733134b/",
    
    education: [
      {
        degree: "S1 Teknik Informatika",
        institution: "Universitas Pignatelli Triputra Surakarta",
        year: "2023 - Now",
        gpa: "3.45 / 4.00 "
      },
      {
        degree: "SMA PL St Yosef Surakarta",
        institution: "IPA (Ilmu Pelajaran Alam)",
        year: "2020 - 2023",
        gpa: "82,64 / 100"
      },
      {
        degree: "SMP Negri 23 Surakarta",
        year: "2017 - 2020",
        gpa: "78,59 / 100"
      }
    ],
    
    experience: [
      {
        position: "Admin",
        company: "PT Andromeda Tirta Amerta",
        period: "Agustus 2023 - Sekarang",
        description: "Melakukan administrasi keuangan harian meliputi pembuatan laporan keuangan karyawan, slip gaji, serta penyetoran dana ke bank."
      },
      {
        position: "Koordinator Humas",
        company: "UKM PMK (Persekutuan Mahasiswa Kristen) AETOS UPITRA SURAKARTA",
        period: "November 2023 - 2025",
        description: "Mengelola media sosial dan promosi event keagamaan dengan menjalin kerjasama sponsorship dan kemitraan strategis."
      },
      {
        position: "Koordinator Multimedia",
        company: "UKM Futsal UPITRA SURAKARTA",
        period: "Agustus 2025 - Sekarang",
        description: "Memimpin produksi konten multimedia dan mengelola kampanye promosi digital untuk pertandingan dan kegiatan futsal."
      },
      {
        position: "Service Production",
        company: "Gereja Mawar Sharon Solo",
        period: "Juli 2024 - Sekarang",
        description: "Setup dan pengoprasian produksi teknis ibadah meliputi pengelolaan audio, visual, lighting, dan live streaming kebaktian."
      }
    ],
    
    portfolio: [
      {
        title: "Web Application - Sistem Manajemen Persuratan Disdik Cabang 7 Surakarta",
        description: "Membangun aplikasi berbasis web untuk digitalisasi proses administrasi surat menyurat di Dinas Pendidikan Cabang 7 Surakarta, mencakup modul surat masuk, surat keluar, disposisi surat, arsip digital, dan dashboard laporan. Sistem dikembangkan dengan Laravel framework, MySQL database, dan interface responsif menggunakan Bootstrap",
        tech: ["Laravel 10", "PHP 8", "MySQL", "Bootstrap 5", "REST API", "CRUD Operations", "Authentication & Authorization"],
        image: "/images/arsip.jpg",
        certificate: ""
      },
      {
        title: "Web App - Platform Jasa Non-Formal Berbasis AI (Project Kelompok)",
        description: "Membangun aplikasi web marketplace untuk layanan jasa non-formal (les privat, kursus, training) dengan implementasi AI untuk sistem rekomendasi cerdas, chatbot customer service, dan analisis sentiment review. Dikerjakan secara kolaboratif sebagai tugas akhir mata kuliah menggunakan Laravel framework, MySQL database, dan integrasi API machine learning",
        tech: ["Laravel 10", "PHP", "MySQL", "AI/Machine Learning", "API Integration", "Bootstrap 5", "Team Collaboration", "Recommendation System"],
        image: "/images/web.png",
        certificate: ""
      },
      {
        title: "Asean Innovation Science Enviromental and Entrepreneur Fair 2024",
        description: "Mengikuti dan memenangkan kompetisi AISEEF pada tanggal 2-5 Februaru 2024 di Semarang, dan meraih mendali emas dan silver dari hasil pembuatan 'Gim Edukasi Anak Berkebutuhan Khusus'",
        tech: ["Education", "Competition", "Progreming Game", "Researcher"],
        image: "/images/portfolio1.jpg",
        certificate: "/images/aiss.jpg"
      },
      {
        title: "Pelatihan dan Kompetisi Pengenalan Cybersecurity  ",
        description: "Kursus dasar keamanan siber dan mencapai tingkat kompetensi mahasiswa yang di akui oleh Cisco",
        tech: ["Education", "Competition", "Researcher", "Cybersecurity", "Course"],
        image: "/images/portfolio2.jpg",
        certificate: "/images/siber.pdf"
      },
      {
        title: "Kepanitiaan Turnament Badminton UPITRA CUP 2025",
        description: "Menjalin komunikasi dengan calon peserta dan mitra sponsorship untuk memenuhi target partisipasi dan pendanaan turnamen.",
        tech: ["Public Relations Officer", "Competition", "Communities", "Sponsorship"],
        image: "/images/portfolio3.jpg",
        certificate: "/images/badmin.pdf"
      },
      {
        title: "Marine Science Techno Park, Universitas Diponegoro Semarang - Forum Guru Penelitian Indonesia (FGPI) Jawa Tengah 2018",
        description: "Kegiatan Young Scientist Training Camp 3, dengan tema 'Mengali Potennsi Kemaritiman Provinsi Jawa Tengah untuk Indonesia Berdikari' pada  tanggal 17-20 Desember 2018",
        tech: ["participant", "Researcher", "Education"],
        image: "/images/portfolio4.jpg",
        certificate: "/images/ystc.jpg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-orange-50">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-red-900 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black text-white">
              CHRISYLINT!
            </div>
            <div className="hidden md:flex space-x-8">
              {['HOME', 'ABOUT', 'EDUCATION', 'EXPERIENCE', 'PORTFOLIO', 'CONTACT'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-bold tracking-wider transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modern Elegant with Advanced Animations */}
      <section id="home" className="relative min-h-screen bg-red-900 flex items-center overflow-hidden">
        {/* Modern Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-lg opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-white to-white rounded-full opacity-15 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 border border-white transform rotate-45 opacity-18 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-white to-white rounded-full opacity-12 animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>

          {/* Particle-like Dots */}
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-white rounded-full opacity-70 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-white rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/4 right-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-65 animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-3.5 h-3.5 bg-white rounded-full opacity-55 animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full opacity-75 animate-ping" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '0.5s'}}></div>

          {/* Floating Hexagons and Modern Shapes */}
          <div className="absolute top-16 right-16 w-16 h-16 border border-white transform rotate-30 opacity-10 animate-pulse" style={{animationDelay: '4s', animationDuration: '6s'}}></div>
          <div className="absolute bottom-16 left-16 w-12 h-12 bg-gradient-to-r from-white to-white rounded-lg opacity-8 animate-bounce" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
          <div className="absolute top-3/4 right-12 w-18 h-18 border-2 border-white rounded-full opacity-12 animate-spin" style={{animationDelay: '5s', animationDuration: '15s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-gradient-to-br from-white to-white transform rotate-45 opacity-9 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '7s'}}></div>

          {/* Glowing Rings */}
          <div className="absolute top-24 left-1/3 w-40 h-40 border border-white rounded-full opacity-5 animate-ping" style={{animationDelay: '6s', animationDuration: '8s'}}></div>
          <div className="absolute bottom-24 right-1/3 w-32 h-32 border border-white rounded-full opacity-6 animate-ping" style={{animationDelay: '4.5s', animationDuration: '9s'}}></div>

          {/* Additional Modern Elements */}
          <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-white to-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '7s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-1/3 right-1/5 w-8 h-8 border border-white transform rotate-45 opacity-15 animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        </div>

        {/* Moving Text - Coding for Future */}
        <div className="absolute bottom-20 left-0 right-0 z-10 overflow-hidden">
          <div
            className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap"
            style={{
              animation: 'slideRight 15s linear infinite'
            }}
          >
            CODING FOR FUTURE • CODING FOR FUTURE • CODING FOR FUTURE • CODING FOR FUTURE • CODING FOR FUTURE •
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Profile Image - More to the Left */}
            <div className="lg:col-span-1 flex justify-start animate-fade-in-up">
              <div className="relative group">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <img
                    src={biodata.profileImage}
                    alt="Christin Yulianti"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Animated Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gray-300 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-gray-200 to-slate-200 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-slate-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '2s'}}></div>
              </div>
            </div>

            {/* Content - Right Side with Staggered Animations */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-6 tracking-tight hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-800">CHRISTIN</span><br/>
                  <span className="text-white animate-pulse">YULIANTI</span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-white font-bold mb-8 tracking-wide animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Full Stack Developer & UI/UX Enthusiast
              </p>

              <p className="text-lg text-white mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Welcome to my digital space. Explore my professional journey as a web developer who combines modern technologies, elegant code architecture, and impactful business solutions to create exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 bg-gray-800 text-white font-bold text-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl animate-pulse-on-hover"
                >
                  <Download className="w-5 h-5 animate-bounce" />
                  DOWNLOAD CV
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-transparent border-2 border-gray-800 text-gray-800 font-bold text-lg hover:bg-gray-800 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  LET'S TALK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <ArrowDown className="w-8 h-8 text-gray-800 animate-bounce hover:scale-110 transition-transform duration-300" />
        </div>
      </section>

      {/* About Section - Large Text */}
      <section id="about" className="relative bg-red-900 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black text-orange-50 text-center mb-16 leading-tight">
            SOME THINGS<br/>ABOUT ME
          </h2>
          
          <div className="bg-orange-50 p-12 md:p-16">
            <p className="text-2xl md:text-3xl text-red-900 leading-relaxed mb-12 font-light">
              {biodata.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Laravel', 'Node.js', 'Tailwind', 'MongoDB', 'Python', 'FastAPI', 'React', 'Figma', 'Flutter', 'Git', 'Excel', 'Canva'].map((skill) => (
                <div
                  key={skill}
                  className="bg-red-900 text-orange-50 p-6 text-center font-bold text-lg hover:bg-red-800 transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Step Style */}
      <section id="education" className="bg-orange-50 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black text-red-900 text-center mb-24 leading-tight">
            EDUCATION
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {biodata.education.map((edu, index) => (
              <div key={index} className="bg-white p-8 relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-900 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-black text-white">{index + 1}</span>
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl font-black text-red-900 mb-4">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-700 mb-2 font-semibold">{edu.institution}</p>
                  <div className="flex gap-4 text-gray-600 mb-4">
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span className="font-bold">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-red-900 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black text-orange-50 text-center mb-24 leading-tight">
            WORK<br/>EXPERIENCE
          </h2>
          
          <div className="space-y-12">
            {biodata.experience.map((exp, index) => (
              <div key={index} className="bg-orange-50 p-12 relative group hover:bg-white transition-all duration-300 shadow-lg">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-700 group-hover:w-4 transition-all duration-300"></div>
                <div className="pl-8">
                  <h3 className="text-4xl font-black text-red-900 mb-4">
                    {exp.position}
                  </h3>
                  <p className="text-2xl text-gray-700 mb-2 font-bold">{exp.company}</p>
                  <p className="text-gray-600 mb-6 font-medium">{exp.period}</p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Grid */}
      <section id="portfolio" className="bg-orange-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black text-red-900 text-center mb-24 leading-tight">
            PORTFOLIO
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {biodata.portfolio.map((project, index) => (
              <div key={index} className="bg-white overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/80 transition-all duration-500 flex items-center justify-center">
                    {project.certificate && (
                      <button
                        onClick={() => setSelectedCertificate(project.certificate)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-8 py-4 bg-white text-red-900 font-bold flex items-center gap-2 hover:bg-orange-50"
                      >
                        <Eye className="w-5 h-5" />
                        VIEW CERTIFICATE
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-black text-red-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-red-900 text-white text-sm font-bold hover:bg-red-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-red-900 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black text-orange-50 mb-16 leading-tight">
            LET'S<br/>CONNECT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a
              href={`mailto:${biodata.email}`}
              className="bg-orange-50 p-12 hover:bg-white transition-all duration-300 group shadow-lg"
            >
              <Mail className="w-16 h-16 text-red-900 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-black text-red-900 text-2xl mb-3">EMAIL</h3>
              <p className="text-gray-700 text-sm break-words">{biodata.email}</p>
            </a>
            
            <a
              href={`https://instagram.com/${biodata.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-50 p-12 hover:bg-white transition-all duration-300 group shadow-lg"
            >
              <Instagram className="w-16 h-16 text-red-900 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-black text-red-900 text-2xl mb-3">INSTAGRAM</h3>
              <p className="text-gray-700 text-sm">{biodata.instagram}</p>
            </a>
            
            <a
              href={`https://wa.me/${biodata.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-50 p-12 hover:bg-white transition-all duration-300 group shadow-lg"
            >
              <MessageCircle className="w-16 h-16 text-red-900 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-black text-red-900 text-2xl mb-3">WHATSAPP</h3>
              <p className="text-gray-700 text-sm">{biodata.whatsapp}</p>
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href={`https://${biodata.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-orange-50 flex items-center justify-center text-red-900 hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href={`https://${biodata.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-orange-50 flex items-center justify-center text-red-900 hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Large Branding */}
      <footer className="bg-orange-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-8xl md:text-9xl font-black text-red-900 leading-none mb-8">
            CHRISTIN<br/>YULIANTI
          </h2>
          <p className="text-gray-600 text-lg">
            © 2025 All rights reserved. Made with ❤️
          </p>
        </div>
      </footer>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedCertificate.toLowerCase().endsWith('.pdf') ? (
              <iframe
                src={selectedCertificate}
                className="w-full h-[85vh] rounded-lg"
                title="Certificate PDF"
              />
            ) : (
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
