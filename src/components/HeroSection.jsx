import { Mail, GraduationCap, Code, Briefcase, ExternalLink, BookOpen, MapPin } from 'lucide-react';
import bioData from '../data/bio.json';

export default function HeroSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-teal-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        
        {/* Coluna Esquerda: Foto */}
        <div className="flex flex-col items-center gap-5 shrink-0 md:w-64">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img src="/profile.jpg" alt={bioData.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-full">
            <a href={bioData.links.scholar} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-2 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300 transition-colors shadow-sm text-xs">
              <GraduationCap size={14} /> Scholar
            </a>
            <a href={bioData.links.lattes} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-2 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300 transition-colors shadow-sm text-xs">
              <ExternalLink size={14} /> Lattes
            </a>
            <a href={bioData.links.linkedin} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-2 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300 transition-colors shadow-sm text-xs">
              <Briefcase size={14} /> LinkedIn
            </a>
            <a href={bioData.links.github} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-2 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300 transition-colors shadow-sm text-xs">
              <Code size={14} /> GitHub
            </a>
            <a href={bioData.links.researchgate} target="_blank" rel="noreferrer" className="w-full flex justify-center items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300 transition-colors shadow-sm text-xs">
              <BookOpen size={14} /> ResearchGate
            </a>
          </div>

          <div className="w-full mt-2 p-4 bg-white/50 border border-gray-200 rounded-xl text-sm text-gray-700 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-teal-600 shrink-0" />
              <a href={`mailto:${bioData.email}`} className="select-all hover:text-teal-700 font-medium transition-colors break-all">
                {bioData.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-teal-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                {bioData.address.map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Informações */}
        <div className="flex-1 text-center md:text-left md:pt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {bioData.name}
          </h1>
          
          <div className="space-y-2 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-500">
              {bioData.title}
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              {bioData.institution} • {bioData.department}
            </p>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            {bioData.about}
          </p>


        </div>
      </div>
    </section>
  );
}
