import React, { useState } from 'react';
import { Play, Award, CheckCircle, Users, Clock, Star } from 'lucide-react';
import { departments } from '../data/courses';
import { useLanguage } from '../hooks/useLanguage';
import CourseCard from './CourseCard';

const PopularCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(departments[0].id);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { t } = useLanguage();

  const activeDepartment = departments.find(dept => dept.id === activeCategory);

  const getCategoryDisplayName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'ai': t('artificialIntelligence'),
      'development': t('development'),
      'design': t('graphicDesign'),
      'marketing': t('marketing'),
      'data-science': t('dataScience')
    };
    return categoryMap[category] || category;
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('popularCourses')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('popularCoursesSubtitle')}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setActiveCategory(department.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeCategory === department.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {getCategoryDisplayName(department.id)}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          {activeDepartment && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeDepartment.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Certificate and Course Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Courses & Earn Certificates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master industry-relevant skills and receive official certificates upon successful completion of our comprehensive courses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Certificate */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <img
                  src="/certificate.png"
                  alt="Course Completion Certificate"
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Certificate Features */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Industry-recognized certificates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Verified completion credentials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Boost your professional profile</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Video and Course Info */}
            <div className="space-y-8">
              {/* Video Section */}
              <div className="relative">
                {!isVideoPlaying ? (
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="#"
                      alt="Course Overview Video"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <button
                        onClick={handleVideoPlay}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-full transform hover:scale-110 transition-all shadow-2xl"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Discover Our Course Catalog</h3>
                      <p className="text-sm opacity-90">Watch to learn about all available courses</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      width="100%"
                      height="256"
                      src="https://www.youtube.com/embed/9lxBkCJzvKs"
                      title="Course Overview Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                    ></iframe>
                  </div>

                )}
              </div>

              {/* Course Benefits */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">What You'll Get</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                    <Users className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Instructors</h4>
                    <p className="text-sm text-gray-600">Learn from industry professionals with years of experience</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                    <Clock className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Flexible Learning</h4>
                    <p className="text-sm text-gray-600">Study at your own pace with lifetime access to materials</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Professional Certification</h4>
                      <p className="text-gray-600">
                        Upon successful completion of your course, you'll receive a professionally designed 
                        certificate that validates your newly acquired skills. Our certificates are recognized 
                        by top employers and can significantly boost your career prospects.
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          LinkedIn Shareable
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          PDF Download
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          Verification Code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;