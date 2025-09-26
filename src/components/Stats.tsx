import React from 'react';
import { Monitor, Users, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Monitor,
      number: '25+',
      label: t('onlineCourses'),
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: Users,
      number: '20+',
      label: t('expertTutors'),
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600'
    },
    {
      icon: GraduationCap,
      number: '400+',
      label: t('onlineStudents'),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Award,
      number: '300+',
      label: t('certifiedCourses'),
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${stat.bgColor} border-2 border-white shadow-md`}>
                  <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;