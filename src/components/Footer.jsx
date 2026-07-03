import bioData from '../data/bio.json';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {year} {bioData.name}. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href={bioData.links.scholar} className="hover:text-white transition-colors">Google Scholar</a>
          <a href={bioData.links.lattes} className="hover:text-white transition-colors">Lattes</a>
          <a href={bioData.links.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
