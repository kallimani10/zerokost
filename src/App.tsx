import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PopularCourses from './components/PopularCourses';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Stats />
          <PopularCourses />
        </main>
        <Chatbot />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;