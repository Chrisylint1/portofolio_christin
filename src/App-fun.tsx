import React, { useState, useEffect } from 'react';
import './animations-fun.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 WOW! Pesan Anda telah terkirim dengan gaya FUN! Saya akan segera menghubungi Anda dengan energi positif! 🚀');
    e.target.reset();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden', background: '#f5f5f5', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(30, 64, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0',
        borderBottom: '2px solid #ff69b4'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem'
        }}>
          {[
            { id: 'hero', label: '🏠 Home' },
            { id: 'about', label: '👋 About' },
            { id: 'work', label: '🎨 Work' },
            { id: 'skills', label: '⚡ Skills' },
            { id: 'contact', label: '📧 Contact' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? '#ff69b4' : 'white',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                transform: activeSection === item.id ? 'scale(1.1)' : 'scale(1)',
                textShadow: activeSection === item.id ? '0 0 10px rgba(255, 105, 180, 0.8)' : 'none',
                animation: activeSection === item.id ? 'heartbeat 1.5s infinite' : 'none'
              }}
              className={activeSection === item.id ? 'animate-heartbeat' : ''}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffb6c1 0%, #ffd4e5 50%, #fff0f5 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px'
      }}>
        {/* Header Info */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 3rem',
          fontStyle: 'italic',
          color: '#666'
        }}>
          <div style={{ fontSize: '1.2rem', letterSpacing: '2px', animation: 'wiggle 2s infinite' }}>/Illustrator/</div>
          <div style={{ fontSize: '1.2rem', letterSpacing: '2px', animation: 'wiggle 2s infinite', animationDelay: '0.5s' }}>/Graphic Design/</div>
          <div style={{ fontSize: '1.2rem', letterSpacing: '2px', animation: 'wiggle 2s infinite', animationDelay: '1s' }}>/Bao Tran - Yuikunb/</div>
        </div>

        {/* Sparkles */}
        <div style={{
          position: 'absolute',
          fontSize: '3rem',
          color: '#ff69b4',
          animation: 'twinkle 2s infinite',
          top: '20%',
          right: '15%'
        }}>✦</div>
        <div style={{
          position: 'absolute',
          fontSize: '3rem',
          color: '#ff69b4',
          animation: 'twinkle 2s infinite',
          top: '40%',
          left: '10%',
          animationDelay: '1s'
        }}>✧</div>
        <div style={{
          position: 'absolute',
          fontSize: '4rem',
          color: '#ff1493',
          animation: 'party-pop 1s infinite',
          top: '60%',
          right: '20%',
          animationDelay: '0.5s'
        }}>🎈</div>
        <div style={{
          position: 'absolute',
          fontSize: '3rem',
          color: '#ff69b4',
          animation: 'bounce-fun 2s infinite',
          bottom: '20%',
          left: '15%'
        }}>🎀</div>

        {/* Year */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          fontSize: '8rem',
          fontWeight: 'bold',
          color: 'transparent',
          WebkitTextStroke: '2px #ff69b4',
          transform: 'translateY(-50%) rotate(90deg)',
          animation: 'spin-fun 8s infinite'
        }}>
          /2024/
        </div>

        {/* Main Title */}
        <div style={{
          textAlign: 'center',
          zIndex: 10,
          animation: 'slide-in-up 1s ease-out'
        }}>
          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: '900',
            color: 'transparent',
            WebkitTextStroke: '3px #ff69b4',
            margin: '0',
            textShadow: '0 0 20px rgba(255, 105, 180, 0.5)',
            animation: 'glow-pulse 2s infinite'
          }}>
            PORTFOLIO
          </h1>
        </div>

        {/* Character SVG */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          animation: 'dance 3s infinite'
        }}>
          <svg width="300" height="400" viewBox="0 0 300 400" style={{ animation: 'color-shift 5s infinite' }}>
            {/* Background circle */}
            <circle cx="150" cy="200" r="140" fill="#ffe4e1" stroke="#ff69b4" strokeWidth="3"/>

            {/* Face */}
            <circle cx="150" cy="160" r="60" fill="#ffb6c1"/>

            {/* Eyes */}
            <circle cx="135" cy="145" r="8" fill="#000"/>
            <circle cx="165" cy="145" r="8" fill="#000"/>
            <circle cx="137" cy="143" r="3" fill="#fff"/>
            <circle cx="167" cy="143" r="3" fill="#fff"/>

            {/* Nose */}
            <ellipse cx="150" cy="155" rx="3" ry="5" fill="#000"/>

            {/* Mouth */}
            <path d="M 140 175 Q 150 185 160 175" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round"/>

            {/* Hair */}
            <path d="M 90 120 Q 150 80 210 120 Q 200 100 180 110 Q 150 90 120 110 Q 100 100 90 120" fill="#8b4513"/>

            {/* Glasses */}
            <rect x="115" y="135" width="25" height="15" rx="12" ry="12" fill="none" stroke="#ff69b4" strokeWidth="3"/>
            <rect x="160" y="135" width="25" height="15" rx="12" ry="12" fill="none" stroke="#ff69b4" strokeWidth="3"/>
            <line x1="140" y1="145" x2="160" y2="145" stroke="#ff69b4" strokeWidth="3"/>

            {/* Dice elements */}
            <rect x="100" y="220" width="30" height="30" fill="#ff69b4" stroke="#fff" strokeWidth="2" rx="5"/>
            <circle cx="108" cy="228" r="3" fill="#fff"/>
            <circle cx="115" cy="235" r="3" fill="#fff"/>
            <circle cx="122" cy="228" r="3" fill="#fff"/>
            <circle cx="115" cy="228" r="3" fill="#fff"/>
            <circle cx="108" cy="235" r="3" fill="#fff"/>
            <circle cx="122" cy="235" r="3" fill="#fff"/>

            <rect x="170" y="220" width="30" height="30" fill="#ff69b4" stroke="#fff" strokeWidth="2" rx="5"/>
            <circle cx="185" cy="235" r="3" fill="#fff"/>
          </svg>
        </div>

        {/* Footer Info */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 3rem',
          fontSize: '1.1rem',
          color: '#666'
        }}>
          <div style={{ animation: 'wave 2s infinite' }}>📧 hello@baotran.com</div>
          <div style={{ animation: 'wave 2s infinite', animationDelay: '0.5s' }}>🎨 behance.net/baotran</div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e40ff 0%, #5c8cff 50%, #93c5fd 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 2rem 2rem'
      }}>
        {/* Blob decorations */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50% 30% 70% 40%',
          animation: 'morph-blob 8s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 235, 59, 0.4)',
          borderRadius: '40% 60% 30% 70%',
          animation: 'morph-blob 10s infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '70% 30% 50% 50%',
          animation: 'morph-blob 6s infinite',
          animationDelay: '1s'
        }}></div>

        {/* Content */}
        <div style={{
          maxWidth: '800px',
          background: 'white',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          zIndex: 10,
          animation: 'slide-in-left 1s ease-out',
          border: '3px solid #ff69b4'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #1e40ff, #ff69b4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'rainbow-text 3s infinite'
          }}>
            PRESENTATION ✨
          </h2>

          <h3 style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#1e40ff',
            animation: 'wiggle 3s infinite'
          }}>
            LET'S GET TOGETHER! 🎉
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {[
              { emoji: '🎨', title: 'Creative Design', desc: 'Making beautiful things with passion!' },
              { emoji: '🚀', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality!' },
              { emoji: '💡', title: 'Innovative Ideas', desc: 'Fresh perspectives for every project!' }
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #f0f8ff 100%)',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  border: '2px solid #ff69b4',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `slide-in-up 1s ease-out ${index * 0.2}s both`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) rotate(2deg)';
                  e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  animation: 'bounce-fun 2s infinite'
                }}>
                  {card.emoji}
                </div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#1e40ff'
                }}>
                  {card.title}
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffeb3b 0%, #fff59d 50%, #fff9c4 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 2rem 2rem'
      }}>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '3rem',
          animation: 'float-fast 4s infinite'
        }}>🎨</div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          fontSize: '2.5rem',
          animation: 'float-medium 5s infinite',
          animationDelay: '1s'
        }}>✨</div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          fontSize: '4rem',
          animation: 'spin-fun 6s infinite'
        }}>🎭</div>

        <div style={{
          textAlign: 'center',
          zIndex: 10,
          animation: 'slide-in-down 1s ease-out'
        }}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '3rem',
            animation: 'color-shift 4s infinite'
          }}>
            MY COLLECTION 🌟
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px'
          }}>
            {[
              { emoji: '🎨', title: 'Digital Art', desc: 'Beautiful illustrations and digital paintings' },
              { emoji: '📱', title: 'UI/UX Design', desc: 'Modern and user-friendly interfaces' },
              { emoji: '📸', title: 'Photography', desc: 'Capturing moments with creativity' },
              { emoji: '🎬', title: 'Motion Graphics', desc: 'Animated content that tells stories' }
            ].map((project, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  border: '3px solid #ff6b35',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `flip 1s ease-in-out ${index * 0.3}s both`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) rotateY(5deg)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotateY(0deg)';
                  e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  fontSize: '5rem',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  animation: 'jelly 1s infinite'
                }}>
                  {project.emoji}
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  color: '#ff6b35'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  textAlign: 'center',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" style={{
        minHeight: '100vh',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 2rem 2rem'
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,105,180,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(30,64,255,0.1) 0%, transparent 50%)',
          zIndex: 1
        }}></div>

        <div style={{
          textAlign: 'center',
          zIndex: 10,
          animation: 'slide-in-right 1s ease-out'
        }}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1e40ff, #ff69b4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '3rem',
            animation: 'rainbow-text 3s infinite'
          }}>
            MY SKILLS ⚡
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px'
          }}>
            {[
              { name: 'Photoshop', emoji: '🖼️', level: 'Expert' },
              { name: 'Illustrator', emoji: '🎨', level: 'Expert' },
              { name: 'Figma', emoji: '📐', level: 'Advanced' },
              { name: 'After Effects', emoji: '🎬', level: 'Advanced' },
              { name: 'Premiere Pro', emoji: '🎥', level: 'Intermediate' },
              { name: 'Lightroom', emoji: '📷', level: 'Expert' },
              { name: 'InDesign', emoji: '📄', level: 'Advanced' },
              { name: 'Blender', emoji: '🎲', level: 'Beginner' }
            ].map((skill, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  border: '2px solid #ff69b4',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `shake 0.5s ease-in-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1) rotate(5deg)';
                  e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                  e.target.style.background = 'linear-gradient(135deg, #ff69b4 0%, #1e40ff 100%)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                  e.target.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                  e.target.style.color = 'black';
                }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  animation: 'bounce-fun 2s infinite'
                }}>
                  {skill.emoji}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {skill.name}
                </h3>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  fontWeight: 'bold'
                }}>
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ff69b4 0%, #ffb6c1 50%, #ffc0cb 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 2rem 2rem'
      }}>
        {/* Floating hearts */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '3rem',
          animation: 'float-slow 6s infinite'
        }}>💖</div>
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          fontSize: '2.5rem',
          animation: 'float-medium 5s infinite',
          animationDelay: '1s'
        }}>💕</div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          fontSize: '4rem',
          animation: 'bounce-gentle 3s infinite'
        }}>💝</div>

        <div style={{
          maxWidth: '600px',
          background: 'white',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          zIndex: 10,
          animation: 'slide-in-up 1s ease-out',
          border: '3px solid #1e40ff'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #ff69b4, #1e40ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'color-shift 4s infinite'
          }}>
            LET'S CONNECT! 📧
          </h2>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <input
              type="text"
              placeholder="Your Name ✨"
              required
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #ff69b4',
                fontSize: '1.1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                animation: 'pulse-glow 2s infinite'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1e40ff'}
              onBlur={(e) => e.target.style.borderColor = '#ff69b4'}
            />

            <input
              type="email"
              placeholder="Your Email 📧"
              required
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #ff69b4',
                fontSize: '1.1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                animation: 'pulse-glow 2s infinite',
                animationDelay: '0.5s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1e40ff'}
              onBlur={(e) => e.target.style.borderColor = '#ff69b4'}
            />

            <textarea
              placeholder="Your Message 💌"
              required
              rows="5"
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #ff69b4',
                fontSize: '1.1rem',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.3s ease',
                animation: 'pulse-glow 2s infinite',
                animationDelay: '1s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1e40ff'}
              onBlur={(e) => e.target.style.borderColor = '#ff69b4'}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(45deg, #ff69b4, #1e40ff)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 15px rgba(255,105,180,0.3)',
                animation: 'heartbeat 2s infinite'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(255,105,180,0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 5px 15px rgba(255,105,180,0.3)';
              }}
            >
              KIRIM PESAN ✉️ 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1e40ff 0%, #5c8cff 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '3px solid #ff69b4'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: 'white',
            marginBottom: '1rem',
            animation: 'wave 2s infinite'
          }}>
            THANK YOU FOR VISITING! 🙏 ✨
          </h3>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <a
              href="#"
              style={{
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                animation: 'bounce-fun 2s infinite'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              📧 Email
            </a>
            <a
              href="#"
              style={{
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                animation: 'bounce-fun 2s infinite',
                animationDelay: '0.5s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              🎨 Portfolio
            </a>
          </div>

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.1rem',
            animation: 'twinkle 3s infinite'
          }}>
            Made with ❤️ and lots of ☕ by Bao Tran - 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
