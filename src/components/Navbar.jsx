import bioData from '../data/bio.json';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center gap-4">
            <span className="font-bold text-xl text-stone-800 tracking-tight">Prof. Laszlon</span>
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
            <img src="/ufca-logo-horizontal.png" alt="UFCA" className="h-4 sm:h-5 w-auto object-contain drop-shadow-sm" />
          </div>
          <div className="hidden md:flex items-center gap-2 lg:gap-5">
            <a href="#about" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#research-interests" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Research</a>
            <a href="#labs" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Labs</a>
            <a href="#experience" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Experience</a>
            <a href="#teaching" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Teaching</a>
            <a href="#patents" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Patents</a>
            <a href="#publications" className="text-gray-600 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-colors">Publications</a>
          </div>
        </div>
      </div>
    </header>
  );
}
