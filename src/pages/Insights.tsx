import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Insights: React.FC = () => {
  const [aiNews, setAiNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const blogs = [
    {
      id: 1,
      title: 'The Future of Healthcare AI',
      excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and patient care.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      category: 'Healthcare',
      date: 'Nov 15, 2023',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'AI in Financial Markets',
      excerpt: 'How machine learning algorithms are transforming trading and investment strategies.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
      category: 'Finance',
      date: 'Nov 12, 2023',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding the role of AI in protecting against evolving cyber threats.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      category: 'Security',
      date: 'Nov 10, 2023',
      readTime: '6 min read'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const response = await fetch('https://news-0cud.onrender.com/api/news');
        const data = await response.json();
        if (data.status === 'ok' && data.articles) {
          const formattedNews = data.articles.slice(0, 6).map((article: any, index: number) => ({
            id: index + 1,
            title: article.title,
            summary: article.description,
            source: article.source.name,
            date: new Date(article.publishedAt).toLocaleDateString(),
            url: article.url,
            image: article.urlToImage // Add image URL
          }));
          setAiNews(formattedNews);
        } else {
          throw new Error('Failed to fetch news');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-light mb-6">Insights & News</h1>
              <p className="text-xl opacity-90">
                Stay updated with the latest in AI technology and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest AI News Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-purple-900 mb-8">Latest AI News</h2>
        <AnimatePresence>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
            </div>
          ) : (
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {aiNews.map((news: any) => (
                <motion.div
                  key={news.id}
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  {news.image && (
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <span className="text-sm text-purple-600">{news.source}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <a 
                      href={news.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-light text-purple-900 mb-8">Featured Articles</h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-purple-600">{blog.category}</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                  <button className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;