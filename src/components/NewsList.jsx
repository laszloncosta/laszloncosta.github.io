import newsData from '../data/news.json';
import { ArrowRight } from 'lucide-react';

export default function NewsList() {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Latest News</h3>
        
        <div className="space-y-4">
          {newsData.map((item) => (
            <div key={item.id} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
              <div className="text-sm font-semibold text-blue-600 shrink-0 w-32">
                {item.date}
              </div>
              <div className="flex-1 text-gray-800">
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.summary}</p>
                {item.link && item.link !== "#" && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 mt-2 group-hover:underline">
                    Read more <ArrowRight size={14} className="ml-1" />
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
