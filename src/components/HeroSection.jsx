import { Mail, GraduationCap, Code, Briefcase, ExternalLink, BookOpen } from 'lucide-react';
import bioData from '../data/bio.json';

export default function HeroSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        
        {/* Coluna Esquerda: Foto */}
        <div className="flex flex-col items-center gap-6 shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img src="/profile.jpg" alt={bioData.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Informações */}
        <div className="flex-1 text-center md:text-left md:pt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {bioData.name}
          </h1>
          
          <div className="space-y-2 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {bioData.title}
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              {bioData.institution} • {bioData.department}
            </p>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            {bioData.about}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a href={`mailto:${bioData.email}`} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:shadow-md transition-all shadow-sm text-sm">
              <Mail size={16} /> Email
            </a>
            <a href={bioData.links.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm text-sm">
              <GraduationCap size={16} /> Scholar
            </a>
            <a href={bioData.links.lattes} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm text-sm">
              <ExternalLink size={16} /> Lattes
            </a>
            <a href={bioData.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm text-sm">
              <Briefcase size={16} /> LinkedIn
            </a>
            <a href={bioData.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm text-sm">
              <Code size={16} /> GitHub
            </a>
            <a href={bioData.links.researchgate} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm text-sm">
              <BookOpen size={16} /> ResearchGate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
