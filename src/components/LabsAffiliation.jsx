import labsData from '../data/labs.json';
import { ExternalLink } from 'lucide-react';

export default function LabsAffiliation() {
  return (
    <section id="labs" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Associated Laboratories</h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          I am actively part of research groups that drive technological innovation in Cariri and Brazil.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {labsData.map((lab) => (
            <a 
              key={lab.id}
              href={lab.url}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="h-24 bg-gray-50 rounded-xl mb-4 flex items-center justify-center border border-gray-100 group-hover:bg-teal-50 transition-colors text-gray-400 font-bold text-xl tracking-wider">
                {/* Logo textual provisória */}
                {lab.logo}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center justify-between">
                {lab.name}
                <ExternalLink size={16} className="text-gray-400 group-hover:text-teal-500 transition-colors" />
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2">
                {lab.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
