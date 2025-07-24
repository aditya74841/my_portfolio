import React from 'react';
import { MessageSquare, Users, BarChart3, TrendingUp } from 'lucide-react';

const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: 'Total Questions',
      value: stats.totalQuestions,
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+12%'
    },
    {
      title: 'Unique Users',
      value: stats.uniqueUsers,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+8%'
    },
    {
      title: 'Avg Response Length',
      value: stats.avgResponseLength,
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '+5%'
    },
    {
      title: 'Questions/User',
      value: stats.uniqueUsers ? Math.round(stats.totalQuestions / stats.uniqueUsers * 10) / 10 : 0,
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '+15%'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div 
            key={index}
            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 transform hover:scale-105 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                <p className="text-sm text-green-600 mt-1">{card.change} from last month</p>
              </div>
              <div className={`${card.bgColor} p-3 rounded-lg`}>
                <IconComponent className={card.color} size={32} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
