import patentsData from '../data/patents.json';
import { Lightbulb } from 'lucide-react';

export default function PatentsList() {
  return (
    <section id="patents" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Lightbulb className="text-teal-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Patents</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patentsData.map((patent) => (
            <div key={patent.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{patent.country}</span>
                <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">{patent.year}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{patent.title}</h3>
              <p className="text-sm font-mono text-gray-500 mb-4">{patent.number}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-700">Inventors: </span>
                {patent.inventors}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
