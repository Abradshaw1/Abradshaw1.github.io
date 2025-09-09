import { Calendar, School, Award, MapPin, FileText } from 'lucide-react';

const newsItems = [
  {
    date: '2024-10',
    title: 'Conference Attendance',
    content: 'Attended UIST, Soft Wearables Workshop',
    icon: Calendar
  },
  {
    date: '2024-08',
    title: 'Academic Milestone',
    content: 'Started masters at CMU and research in HCII',
    icon: School
  },
  {
    date: '2024-05',
    title: 'Research Position',
    content: 'Arrived in Cambridge, MA for a research appointement at MIT',
    icon: MapPin
  },
  {
    date: '2024-05',
    title: 'Graduation',
    content: 'Completed undergrad from San Diego State University',
    icon: Award
  },
  {
    date: '2024-04',
    title: 'Publication',
    content: 'First paper accepted to CSCSU 2024',
    icon: FileText
  }
];

const NewsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
      <div className="space-y-4">
        {newsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-gray-700/80 border border-blue-500/20 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-blue-400" />
                <time className="text-sm text-blue-400">{item.date}</time>
              </div>
              <h3 className="text-lg font-semibold mt-2 text-white">{item.title}</h3>
              <p className="text-gray-300 mt-1">{item.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default NewsSection;