import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

export default function SectionIndicator({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className="group relative flex items-center justify-end"
          onClick={() => scrollToSection(section.id)}
        >
          <span className="absolute right-8 text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest pointer-events-none">
            {section.label}
          </span>
          <div 
            className={`w-2 h-2 rounded-full border border-accent transition-all duration-300 cursor-pointer ${
              activeSection === section.id ? 'bg-accent scale-125' : 'bg-transparent border-border'
            }`}
          />
        </div>
      ))}
    </div>
  );
}
