import teachingData from '../data/teaching.json';
import { GraduationCap, Book } from 'lucide-react';

export default function TeachingList() {
  return (
    <section id="teaching" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-teal-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Teaching</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachingData.map((period) => (
            <div key={period.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                {period.period}
              </h3>
              <ul className="space-y-4">
                {period.courses.map((course, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Book size={16} className="text-teal-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{course.name}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{course.program}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
