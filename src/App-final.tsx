import React, { useState, useEffect } from 'react';
import './animations-dynamic.css';

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
    alert('✨ Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda!');
    e.target.reset();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden', background: '#f5f5f5', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {/* Hero Section */}
      <div id="hero" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffb6c1 0%, #ffd4e5 50%, #fff0f5 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
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
          <div style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>/Illustrator/</div>
          <div style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>/Graphic Design/</div>
          <div style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>/Bao Tran - Yuikunb/</div>
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
