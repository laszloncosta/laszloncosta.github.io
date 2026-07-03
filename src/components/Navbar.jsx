import bioData from '../data/bio.json';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <span className="font-bold text-xl text-blue-600 tracking-tight">Prof. Laszlon</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Experience</a>
            <a href="#patents" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Patents</a>
            <a href="#publications" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Publications</a>
            <a href="#news" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">News</a>
            <a href="#labs" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Laboratories</a>
          </div>
        </div>
      </div>
    </header>
  );
}
