import researchData from '../data/research.json';
import { RadioTower, Cpu, Network } from 'lucide-react';

export default function ResearchInterests() {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'antenna': return <RadioTower size={32} className="text-teal-600 mb-4" />;
      case 'cpu': return <Cpu size={32} className="text-teal-600 mb-4" />;
      case 'network': return <Network size={32} className="text-teal-600 mb-4" />;
      default: return <RadioTower size={32} className="text-teal-600 mb-4" />;
    }
  };

  return (
    <section id="research-interests" className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-8">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchData.map((item) => (
            <div key={item.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal-100 hover:shadow-md transition-all group">
              {getIcon(item.icon)}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
