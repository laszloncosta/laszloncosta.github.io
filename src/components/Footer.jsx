import bioData from '../data/bio.json';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-inner">
            <img src="/ufca-crest.png" alt="UFCA Crest" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-200">
              Federal University of Cariri (UFCA)
            </p>
            <p className="text-xs text-gray-500 mt-1">
              &copy; {year} {bioData.name}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href={bioData.links.scholar} className="hover:text-white transition-colors">Google Scholar</a>
          <a href={bioData.links.lattes} className="hover:text-white transition-colors">Lattes</a>
          <a href={bioData.links.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
