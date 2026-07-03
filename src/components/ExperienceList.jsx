import experienceData from '../data/experience.json';
import { Briefcase } from 'lucide-react';

export default function ExperienceList() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-teal-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Experience</h2>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="md:flex md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full whitespace-nowrap mt-2 md:mt-0 inline-block">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg text-gray-700 font-medium mb-3">{exp.institution}</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>
              
              {/* Timeline dot (hidden on small screens, shown as decorative on md+) */}
              <div className="hidden md:block absolute left-[-25px] top-2 w-3 h-3 bg-teal-500 rounded-full border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
            </div>
          ))}
          
          {/* Vertical line connecting dots */}
          <div className="hidden md:block absolute left-[15px] top-[14rem] bottom-[12rem] w-[2px] bg-gray-100 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
