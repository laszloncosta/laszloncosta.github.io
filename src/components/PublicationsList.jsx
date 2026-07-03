import publicationsData from '../data/publications.json';
import { BookOpen, FileText, BookText, ExternalLink } from 'lucide-react';

export default function PublicationsList() {
  return (
    <section id="publications" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <BookText className="text-teal-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Selected Publications</h2>
        </div>
        
        <div className="space-y-6">
          {publicationsData.map((pub) => (
            <div key={pub.id} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-teal-100 hover:shadow-md transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {pub.title}
              </h4>
              <p className="text-gray-600 mb-2">
                {pub.authors}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                  <span className="font-semibold text-gray-700">Year:</span> {pub.year}
                </span>
                <span className="italic">{pub.venue}</span>
              </div>
              
              <div className="flex gap-3 mt-4">
                {pub.url && pub.url !== "#" && (
                  <a href={pub.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors">
                    View Paper <ExternalLink size={14} className="ml-2" />
                  </a>
                )}
                {pub.pdf !== "#" && (
                  <a href={pub.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                    <FileText size={16} className="mr-1" /> PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
