import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Star, Clock, Users, X, CheckCircle } from 'lucide-react';
import techBgImage from '@/assets/tech-background.jpg';
import pythonAiImage from '@/assets/course-python-ai.jpg';
import machineLearningImage from '@/assets/course-machine-learning.jpg';
import neuralNetworksImage from '@/assets/course-neural-networks.jpg';
import nlpImage from '@/assets/course-nlp.jpg';
import computerVisionImage from '@/assets/course-computer-vision.jpg';
import generativeAiImage from '@/assets/course-generative-ai.jpg';
import agenticAiImage from '@/assets/course-agentic-ai.jpg';
import video from '/public/Marketing_Track_Introduction_Video.mp4';
const courses = [
  {
    id: 1,
    title: 'Python Programming for AI',
    description: 'Unlock the power of Python for AI. This course covers everything from basic syntax to advanced concepts like object-oriented programming, data structures, and algorithms. You\'ll get hands-on experience with essential AI libraries such as NumPy for numerical computation, Pandas for data manipulation, and Matplotlib for data visualization. By the end, you\'ll be building your own AI applications and automating complex tasks with Python.',
    image: pythonAiImage,
    rating: 4.8,
    students: '12k',
    duration: '32 hours',
    price: '₹9/-',
    videoUrl: video,
    category: 'ai'
  },
  {
    id: 2,
    title: 'MACHINE LEARNING',
    description: 'Dive into the world of Machine Learning. This comprehensive course introduces you to the core concepts, including supervised and unsupervised learning, regression, classification, clustering, and dimensionality reduction. You\'ll explore classic algorithms like linear regression, logistic regression, decision trees, and support vector machines. Get practical experience working with real-world datasets, cleaning and preparing data, and building powerful predictive models from scratch.',
    image: machineLearningImage,
    rating: 4.9,
    students: '15k',
    duration: '45 hours',
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'ai'
  },
  {
    id: 3,
    title: 'NEURAL NETWORKS & DEEP LEARNING',
    description: 'Explore the cutting edge of AI with our Deep Learning course. You\'ll take a deep dive into the architecture of neural networks, understanding concepts like backpropagation, activation functions, and gradient descent. The course covers advanced architectures like Convolutional Neural Networks (CNNs) for image recognition, Recurrent Neural Networks (RNNs) for sequence data, and the revolutionary Transformer architecture. You\'ll build and train your own deep learning models using frameworks like TensorFlow or PyTorch.',
    image: neuralNetworksImage,
    rating: 4.7,
    students: '8k',
    duration: '38 hours',
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'ai'
  },
  {
    id: 4,
    title: 'NATURAL LANGUAGE PROCESSING',
    description: 'Master text and language processing with AI. Learn tokenization, sentiment analysis, named entity recognition, and language models. Build chatbots, text classifiers, and language understanding systems.',
    image: nlpImage,
    rating: 4.6,
    students: '6k',
    duration: '28 hours',
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'ai'
  },
  {
    id: 5,
    title: 'COMPUTER VISION',
    description: 'Learn to analyze and understand visual content with AI. Master image processing, object detection, face recognition, and image classification. Work with OpenCV and build computer vision applications.',
    image: computerVisionImage,
    rating: 4.8,
    students: '10k',
    duration: '35 hours',
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'ai'
  },
  {
    id: 6,
    title: 'GENERATIVE AI',
    description: 'Create amazing content with generative AI models. Learn about GANs, VAEs, and modern generative models. Build applications that can generate images, text, and other creative content.',
    image: generativeAiImage,
    rating: 4.9,
    students: '14k',
    duration: '40 hours',
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'ai'
  },
  {
    id: 7,
    title: 'AGENTIC AI',
    description: 'Build intelligent agents, autonomous systems, and smart applications. Learn about reinforcement learning, multi-agent systems, and AI planning. Create AI systems that can make decisions and take actions.',
    image: agenticAiImage,
    rating: 4.7,
    students: '7k',
    duration: '42 hours',
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'ai'
  },
  {
    id: 8,
    title: 'The Complete Web Development in Python',
    description: 'Building web applications with Flask: routing, templates, and forms',
    image: 'course image',
    level: 'Beginner',
    rating: 4.5,
    duration: '10h 00m',
    lectures: 26,
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'development'
  },
  {
    id: 9,
    title: 'Angular – The Complete Guider',
    description: 'Introduction to Angular: framework overview, architecture, and setup environment.',
    image: 'course image',
    level: 'Intermediate',
    rating: 4.5,
    duration: '9h 32m',
    lectures: 42,
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'development'
  },
  {
    id: 10,
    title: 'Deep Learning with React-Native',
    description: 'Integrating Python-based AI models with React Native apps (Flask/FastAPI backend).',
    image: 'course image',
    level: 'Beginner',
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'development'
  },
  {
    id: 11,
    title: 'JavaScript: Full Understanding',
    description: 'Introduction to JavaScript: history, features, and role in modern web development.',
    image: 'course image',
    level: 'All level',
    rating: 5.0,
    duration: '35h 20m',
    lectures: 89,
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'development'
  },
  {
    id: 12,
    title: 'Bootstrap 5 From Scratch',
    description: 'Introduction to Bootstrap 5: setup, CDN, and project structure.',
    image: 'course image',
    level: 'Intermediate',
    rating: 4.5,
    duration: '25h 56m',
    lectures: 38,
    price: '₹9/-',
    videoUrl: video,
    category: 'development'
  },
  {
    id: 13,
    title: 'PHP with - CMS Project',
    description: 'Introduction to PHP: syntax, variables, data types, and control structures.',
    image: 'course image',
    level: 'Beginner',
    rating: 4.0,
    duration: '21h 22m',
    lectures: 30,
    price: '₹9/-',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'development'
  },
  {
    id: 14,
    title: 'Sketch from A to Z: for app designer',
    description: 'Master the complete Sketch workflow for app design, starting from frames and artboards to advanced design structures. Learn how to set up responsive grids, use vector editing tools, and apply reusable styles across your projects. This course will guide you step by step in creating mobile and web app UI designs, including prototyping and handoff for developers. By the end, you will have a strong grasp of Sketch as a professional tool for digital product design.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fitbrief.com.au%2Fstory%2Fexclusive-the-future-of-adobe-and-ai-the-experts-tell-all&psig=AOvVaw1vcS5X-EAOGlLokZYOOJsH&ust=1758872268909000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCR85S0848DFQAAAAAdAAAAABAE',
    rating: 4.0,
    students: '15 lectures',
    duration: '12h 56m',
    price: '₹9/-',
    level: 'All level',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 15,
    title: 'Learn Invision',
    description: 'Get hands-on with Invision, a powerful tool for design collaboration and prototyping. You will learn to create projects, upload screens, and manage design files efficiently. This course covers interactive prototyping, feedback collection, and version control, helping you streamline your workflow between designers, developers, and stakeholders. By the end, you will be able to design interactive prototypes and manage large-scale design projects with ease using Invision.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fitbrief.com.au%2Fstory%2Fexclusive-the-future-of-adobe-and-ai-the-experts-tell-all&psig=AOvVaw1vcS5X-EAOGlLokZYOOJsH&ust=1758872268909000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCR85S0848DFQAAAAAdAAAAABAE',
    rating: 3.5,
    students: '82 lectures',
    duration: '6h 56m',
    price: '₹9/-',
    level: 'All level',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 16,
    title: 'Graphic Design Masterclass',
    description: 'Learn the fundamentals of professional graphic design in this masterclass. You will explore the principles of color theory, typography, layout, and composition while working on practical projects. The course also includes lessons on branding, digital design, and preparing designs for both print and web. By practicing real-world case studies, you will develop the confidence and skills to deliver polished designs that communicate effectively.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fitbrief.com.au%2Fstory%2Fexclusive-the-future-of-adobe-and-ai-the-experts-tell-all&psig=AOvVaw1vcS5X-EAOGlLokZYOOJsH&ust=1758872268909000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCR85S0848DFQAAAAAdAAAAABAE',
    rating: 4.5,
    students: '65 lectures',
    duration: '9h 56m',
    price: '₹9/-',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 17,
    title: 'Create a Design System in Figma',
    description: 'Discover how to build scalable and reusable design systems using Figma. This course covers the fundamentals of creating consistent UI components, including buttons, forms, icons, and navigation elements. Learn how to apply shared styles, manage design tokens, and organize your design files for team collaboration. You will also explore best practices for versioning and documenting your design system so it can grow with your product. By the end, you will be able to create design systems that save time and improve design consistency.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fitbrief.com.au%2Fstory%2Fexclusive-the-future-of-adobe-and-ai-the-experts-tell-all&psig=AOvVaw1vcS5X-EAOGlLokZYOOJsH&ust=1758872268909000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCR85S0848DFQAAAAAdAAAAABAE',
    rating: 4.5,
    students: '32 lectures',
    duration: '5h 56m',
    price: '₹9/-',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 18,
    title: 'Digital Marketing Masterclass',
    description: 'Gain a solid foundation in digital marketing with this comprehensive masterclass. You will explore core marketing channels such as SEO, social media, email marketing, and paid advertising. Learn how to craft effective campaigns, measure performance with analytics, and stay ahead with the latest industry trends. Through case studies and hands-on projects, you will develop strategies to grow businesses online, boost engagement, and maximize ROI.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fitbrief.com.au%2Fstory%2Fexclusive-the-future-of-adobe-and-ai-the-experts-tell-all&psig=AOvVaw1vcS5X-EAOGlLokZYOOJsH&ust=1758872268909000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCR85S0848DFQAAAAAdAAAAABAE',
    rating: 4.5,
    students: '82 lectures',
    duration: '6h 56m',
    price: '₹9/-',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 28,
    title: 'AI Risk Management',
    description: 'Learn to identify, assess, and manage AI risks—ethical, legal, and technical—especially in healthcare and high-stakes sectors.',
    image: 'course-image-path-here', // replace with actual image import
    rating: 5.0,
    students: '89 lectures',
    duration: '35h 20m',
    price: '₹9/-',
    category: 'ai',
    level: 'All level',
    videoUrl: video,
  },
  {
    id: 19,
    title: 'Computerized System Validation (CSV) - Life Sciences Industry',
    description: 'Master the principles of CSV to ensure compliance, data integrity, and system reliability in life sciences.',
    image: 'course-image-path-here',
    rating: 4.5,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'Beginner',
    videoUrl: video,
  },
  {
    id: 20,
    title: 'Artificial Intelligence in Healthcare',
    description: 'AI is transforming diagnosis, treatment, and healthcare delivery through intelligent, data-driven solutions.',
    image: 'course-image-path-here',
    rating: 4.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'Beginner',
    videoUrl: video,
  },
  {
    id: 21,
    title: 'Transforming Lifesciences with Artificial Intelligence',
    description: 'Harness AI to revolutionize research, drug development, and innovation in life sciences.',
    image: 'course-image-path-here',
    rating: 4.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'All level',
    videoUrl: video,
  },
  {
    id: 22,
    title: 'AI in Cybersecurity',
    description: 'Use AI to predict, prevent, and respond to cyber threats in real time.',
    image: 'course-image-path-here',
    rating: 4.5,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'Beginner',
    videoUrl: video,
  },
  {
    id: 23,
    title: 'Generative AI, Agentic AI, and Ethical AI in Pharma Drug Discovery, BioPharma, and Medical Devices',
    description: 'Harness cutting-edge AI to drive innovation in drug discovery, biopharma, and medical devices—ethically and intelligently.',
    image: 'course-image-path-here',
    rating: 5.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'All level',
    videoUrl: video,
  },
  {
    id: 24,
    title: 'AI in Robotics',
    description: 'Multi-robot systems, swarm intelligence, and collaborative robotics.',
    image: 'course-image-path-here',
    rating: 5.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'All level',
    videoUrl: video,      
  },
  {
    id: 25,
    title: 'AI in SemiConductors',
    description: 'AI-driven semiconductor design automation and circuit layout optimization.',
    image: 'course-image-path-here',
    rating: 5.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'All level',
    videoUrl: video,
  },
  {
    id: 26,
    title: 'AI in Aeronautical',
    description: 'AI-driven flight path optimization and fuel efficiency improvement.',
    image: 'course-image-path-here',
    rating: 5.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',   
    level: 'All level',
    videoUrl: video,
  },
  {
    id: 27,
    title: 'AI in Medical & Healthcare',
    description: 'AI in drug discovery, genomics, and personalized treatment planning.',
    image: 'course-image-path-here',
    rating: 5.0,
    students: '12 Modules',
    duration: 'Self-paced',
    price: '₹9/-',
    category: 'ai',
    level: 'All level',
    videoUrl: video,
  }
];

const courseContents: { [key: number]: { id: number; title: string; duration: string; completed: boolean }[] } = {
  8: [
    { id: 1, title: "Introduction to Python", duration: "2 hours", completed: false },
    { id: 2, title: "Setting up Flask", duration: "3 hours", completed: false },
    { id: 3, title: "Routing and Views", duration: "4 hours", completed: false },
    { id: 4, title: "Templates with Jinja2", duration: "4 hours", completed: false },
    { id: 5, title: "Working with Forms", duration: "3 hours", completed: false },
    { id: 6, title: "Database Integration", duration: "5 hours", completed: false },
  ],
  9: [
    { id: 1, title: "Introduction to Angular", duration: "2 hours", completed: false },
    { id: 2, title: "Components and Databinding", duration: "4 hours", completed: false },
    { id: 3, title: "Directives", duration: "3 hours", completed: false },
    { id: 4, title: "Services and Dependency Injection", duration: "4 hours", completed: false },
    { id: 5, title: "Routing", duration: "3 hours", completed: false },
    { id: 6, title: "Forms in Angular", duration: "5 hours", completed: false },
  ],
  10: [
    { id: 1, title: "Setting up React Native", duration: "2 hours", completed: false },
    { id: 2, title: "Building UI with React Native", duration: "5 hours", completed: false },
    { id: 3, title: "Navigation", duration: "3 hours", completed: false },
    { id: 4, title: "State Management", duration: "4 hours", completed: false },
    { id: 5, title: "Integrating with a Python Backend", duration: "5 hours", completed: false },
    { id: 6, title: "Deploying the app", duration: "3 hours", completed: false },
  ],
  11: [
    { id: 1, title: "JavaScript Basics", duration: "4 hours", completed: false },
    { id: 2, title: "DOM Manipulation", duration: "4 hours", completed: false },
    { id: 3, title: "Asynchronous JavaScript", duration: "6 hours", completed: false },
    { id: 4, title: "ES6+ Features", duration: "5 hours", completed: false },
    { id: 5, title: "Object-Oriented Programming", duration: "8 hours", completed: false },
    { id: 6, title: "Functional Programming", duration: "8 hours", completed: false },
  ],
  12: [
    { id: 1, title: "Introduction to Bootstrap", duration: "2 hours", completed: false },
    { id: 2, title: "Grid System", duration: "4 hours", completed: false },
    { id: 3, title: "Components", duration: "6 hours", completed: false },
    { id: 4, title: "Utilities", duration: "4 hours", completed: false },
    { id: 5, title: "Customization", duration: "5 hours", completed: false },
    { id: 6, title: "Building a Project", duration: "4 hours", completed: false },
  ],
  13: [
    { id: 1, title: "PHP Fundamentals", duration: "4 hours", completed: false },
    { id: 2, title: "Working with MySQL", duration: "5 hours", completed: false },
    { id: 3, title: "Building a CMS Frontend", duration: "6 hours", completed: false },
    { id: 4, title: "Building a CMS Backend", duration: "6 hours", completed: false },
    { id: 5, title: "User Authentication", duration: "4 hours", completed: false },
    { id: 6, title: "Deploying the CMS", duration: "2 hours", completed: false },
  ],
  18: [
    { id: 1, title: "Introduction to AI Risk", duration: "3 hours", completed: false },
    { id: 2, title: "Frameworks for AI Risk Management", duration: "5 hours", completed: false },
    { id: 3, title: "Ethical Considerations", duration: "6 hours", completed: false },
    { id: 4, title: "Legal and Regulatory Landscape", duration: "6 hours", completed: false },
    { id: 5, title: "Technical Risks", duration: "8 hours", completed: false },
    { id: 6, title: "Case Studies", duration: "7 hours", completed: false },
  ],
  19: [
    { id: 1, title: "Introduction to CSV", duration: "4 hours", completed: false },
    { id: 2, title: "Regulatory Requirements (FDA, GAMP 5)", duration: "6 hours", completed: false },
    { id: 3, title: "Validation Planning", duration: "Self-paced", completed: false },
    { id: 4, title: "Testing and Documentation", duration: "Self-paced", completed: false },
    { id: 5, title: "Data Integrity", duration: "Self-paced", completed: false },
    { id: 6, title: "Lifecycle Management", duration: "Self-paced", completed: false },
  ],
  20: [
    { id: 1, title: "AI in Medical Imaging", duration: "4 hours", completed: false },
    { id: 2, title: "AI for Diagnostics", duration: "6 hours", completed: false },
    { id: 3, title: "Predictive Analytics in Healthcare", duration: "Self-paced", completed: false },
    { id: 4, title: "Ethical and Privacy Issues", duration: "Self-paced", completed: false },
    { id: 5, title: "Implementation Challenges", duration: "Self-paced", completed: false },
    { id: 6, title: "Future of AI in Healthcare", duration: "Self-paced", completed: false },
  ],
  21: [
    { id: 1, title: "AI in Drug Discovery", duration: "4 hours", completed: false },
    { id: 2, title: "Genomics and AI", duration: "6 hours", completed: false },
    { id: 3, title: "Personalized Medicine", duration: "Self-paced", completed: false },
    { id: 4, title: "AI in Clinical Trials", duration: "Self-paced", completed: false },
    { id: 5, title: "Regulatory and Ethical issues", duration: "Self-paced", completed: false },
    { id: 6, title: "Future Trends", duration: "Self-paced", completed: false },
  ],
  22: [
    { id: 1, title: "Threat Detection with AI", duration: "4 hours", completed: false },
    { id: 2, title: "Behavioral Analysis", duration: "6 hours", completed: false },
    { id: 3, title: "Automated Response Systems", duration: "Self-paced", completed: false },
    { id: 4, title: "Adversarial AI", duration: "Self-paced", completed: false },
    { id: 5, title: "Data Privacy", duration: "Self-paced", completed: false },
    { id: 6, title: "Future of AI in Security", duration: "Self-paced", completed: false },
  ],
  23: [
    { id: 1, title: "Introduction to Generative AI in Pharma", duration: "4 hours", completed: false },
    { id: 2, title: "Agentic AI for Research", duration: "6 hours", completed: false },
    { id: 3, title: "Ethical Frameworks for AI in BioPharma", duration: "Self-paced", completed: false },
    { id: 4, title: "Case Studies", duration: "Self-paced", completed: false },
    { id: 5, title: "Regulatory Guidance", duration: "Self-paced", completed: false },
    { id: 6, title: "Future Directions", duration: "Self-paced", completed: false },
  ],
  24: [
    { id: 1, title: "Introduction to AI in Robotics", duration: "4 hours", completed: false },
    { id: 2, title: "Robot Perception", duration: "6 hours", completed: false },
    { id: 3, title: "Path Planning and Navigation", duration: "Self-paced", completed: false },
    { id: 4, title: "Reinforcement Learning for Robots", duration: "Self-paced", completed: false },
    { id: 5, title: "Human-Robot Interaction", duration: "Self-paced", completed: false },
    { id: 6, title: "Swarms and Multi-robot systems", duration: "Self-paced", completed: false },
  ],
  25: [
    { id: 1, title: "AI for Chip Design", duration: "4 hours", completed: false },
    { id: 2, title: "Yield Optimization", duration: "6 hours", completed: false },
    { id: 3, title: "Predictive Maintenance in Fabs", duration: "Self-paced", completed: false },
    { id: 4, title: "AI in Testing and Verification", duration: "Self-paced", completed: false },
    { id: 5, title: "Supply Chain Optimization", duration: "Self-paced", completed: false },
    { id: 6, title: "Future of AI in Semiconductors", duration: "Self-paced", completed: false },
  ],
  26: [
    { id: 1, title: "AI for Flight Path Optimization", duration: "4 hours", completed: false },
    { id: 2, title: "Predictive Maintenance for Aircraft", duration: "6 hours", completed: false },
    { id: 3, title: "Autonomous Flight Systems", duration: "Self-paced", completed: false },
    { id: 4, title: "Air Traffic Management", duration: "Self-paced", completed: false },
    { id: 5, title: "Safety and Certification", duration: "Self-paced", completed: false },
    { id: 6, title: "Future of AI in Aeronautics", duration: "Self-paced", completed: false },
  ],
};

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModules, setShowModules] = useState(false);
  
  // Convert id to number and find the course
  const courseId = parseInt(id || '1');
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Button onClick={() => navigate('/')}>Back to Courses</Button>
      </div>
    </div>;
  }

  // Get course modules or return empty array if none exist
  const courseModules = courseContents[courseId] || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Tech Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: url(${techBgImage}),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Courses</span>
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <img 
              src={typeof course.image === 'string' && course.image.startsWith('http') ? course.image : (course.image || techBgImage)} 
              alt={course.title}
              className="w-32 h-32 object-cover rounded-2xl mx-auto mb-6 shadow-2xl"
              onError={(e) => {e.currentTarget.src = techBgImage}}
            />
            <h1 className="text-5xl font-bold mb-4 text-gradient-primary">
              {course.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              {course.description}
            </p>
            
            {/* Course Stats */}
            <div className="flex items-center justify-center gap-8 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>

          {/* Demo Video */}
          <div className="mb-8">
            <div className="relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center justify-center w-20 h-20 bg-primary rounded-full hover:bg-primary/80 transition-colors group">
                  <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-left">
                <h3 className="text-lg font-semibold mb-1">Course Demo</h3>
                <p className="text-sm text-gray-300">Watch preview of this course</p>
                
              </div>
              <div className="relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
  <video
    src={course.videoUrl}
    controls
    className="w-full h-full object-cover"
  />
</div>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button 
              className="btn-primary px-8 py-3 text-lg"
              onClick={() => setShowModules(true)}
            >
              View Full Course
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md transition-colors">
              Buy Now - {course.price}
            </Button>
          </div>
        </div>
      </div>

      {/* Modules Modal */}
      {showModules && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Course Modules</h2>
              <button
                onClick={() => setShowModules(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                {courseModules.length > 0 ? courseModules.map((module, index) => (
                  <div key={module.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.duration}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </div>
                )) : <p>No modules available for this course yet.</p>}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{courseModules.length} modules • {course.duration} total</p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
                  onClick={() => setShowModules(false)}
                >
                  Start Learning - {course.price}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;