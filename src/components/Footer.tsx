export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border px-gutter pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="text-accent font-bold tracking-widest text-xl">AM</div>
          <div className="text-text-primary font-medium">Product Designer & Design-led PM</div>
          <div className="text-text-muted text-sm">Based in Bihar · Remote-ready</div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="text-text-faint text-[0.75rem] uppercase tracking-widest font-bold">Navigation</div>
          <nav className="flex flex-col gap-2">
            {['Work', 'Services', 'About', 'Process', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-text-muted hover:text-accent text-sm transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div className="text-text-faint text-[0.75rem] uppercase tracking-widest font-bold">Connect</div>
          <div className="flex flex-col gap-2">
            <a href="https://linkedin.com/in/akmanjhi" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent text-sm transition-colors">
              LinkedIn →
            </a>
            <a href="mailto:kumarabhishekbuild@gmail.com" className="text-text-muted hover:text-accent text-sm transition-colors">
              Email → kumarabhishekbuild@gmail.com
            </a>
            <a href="https://skooltag.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent text-sm transition-colors">
              Live work → skooltag.com
            </a>
            <a href="https://stratalite.ca" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent text-sm transition-colors">
              Live work → stratalite.ca
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-border/50">
        <div className="text-text-faint text-[0.75rem] text-center md:text-left">
          © 2025 Abhishek Manjhi · Built for real product conversations.
        </div>
      </div>
    </footer>
  );
}
