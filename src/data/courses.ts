import { Department, Course } from '../types';

// Generate courses for each department
const generateCourses = (category: string, basePrice: number = 999): Course[] => [
  {
    id: `${category}-1`,
    title: `Python Programming for AI`,
    description: `Master the fundamentals of ${category.toLowerCase()} with hands-on projects and real-world applications.`,
    level: 'Beginner',
    rating: 4.5,
    totalRatings: 1247,
    image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: basePrice,
    originalPrice: basePrice + 500,
    category
  },
  {
    id: `${category}-2`,
    title: `MACHINE LEARNING & DEEP LEARNING`,
    description: `Take your ${category.toLowerCase()} skills to the next level with advanced techniques and industry best practices.`,
    level: 'Advanced',
    rating: 4.7,
    totalRatings: 856,
    image: '/public/Machine Learning.webp',
    price: basePrice + 500,
    originalPrice: basePrice + 1000,
    category
  },
  {
    id: `${category}-3`,
    title: `NEURAL NETWORKS & DEEP LEARNING`,
    description: `Start your journey in ${category.toLowerCase()} with this comprehensive beginner-friendly course.`,
    level: 'Beginner',
    rating: 4.3,
    totalRatings: 2134,
    image: '/public/Neural .webp',
    price: basePrice - 200,
    originalPrice: basePrice + 300,
    category
  },
  {
    id: `${category}-4`,
    title: `NATURAL LANGUAGE PROCESSING`,
    description: `Get certified in ${category.toLowerCase()} with this industry-recognized professional certification course.`,
    level: 'Intermediate',
    rating: 4.8,
    totalRatings: 645,
    image: '/public/NLP.webp',
    price: basePrice + 800,
    originalPrice: basePrice + 1300,
    category
  },
  {
    id: `${category}-5`,
    title: `COMPUTER VISION`,
    description: `Join our exclusive masterclass and learn ${category.toLowerCase()} from industry experts and leaders.`,
    level: 'All Level',
    rating: 4.9,
    totalRatings: 423,
    image: '/public/Vision.webp',
    price: basePrice + 1200,
    originalPrice: basePrice + 1700,
    category
  },
  {
    id: `${category}-6`,
    title: `AGENTIC AI`,
    description: `Learn ${category.toLowerCase()} through real-world projects and build an impressive portfolio.`,
    level: 'Intermediate',
    rating: 4.6,
    totalRatings: 1089,
    image: '/public/Agentic AI.webp',
    price: basePrice + 300,
    originalPrice: basePrice + 800,
    category
  }
];

export const departments: Department[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: 'Brain',
    courses: generateCourses('Artificial Intelligence', 1299)
  },
  {
    id: 'development',
    name: 'Development',
    icon: 'Code',
    courses: generateCourses('Web Development', 899)
  },
  {
    id: 'design',
    name: 'Graphic Design',
    icon: 'Palette',
    courses: generateCourses('Graphic Design', 799)
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'TrendingUp',
    courses: generateCourses('Digital Marketing', 999)
  },
  {
    id: 'data-science',
    name: 'Data Science',
    icon: 'BarChart3',
    courses: generateCourses('Data Science', 1199)
  }
];

export const featuredCourses = departments.flatMap(dept => dept.courses.slice(0, 2));