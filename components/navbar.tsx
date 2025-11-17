// components/navbar.tsx

export default function Navbar() {
    return (
      <header className="fixed top-0 inset-x-0 z-[999] border-b border-white/10 bg-black/80 backdrop-blur-lg">
        <div className="relative container mx-auto px-6 h-14 flex items-center justify-between">
  
          {/* LEFT: Logo + Name */}
          <div className="flex items-center gap-2">
            {/* KP Logo */}
            <div className="h-8 w-8 rounded-full bg-sky-500 text-black font-bold flex items-center justify-center text-sm shadow-md">
              KP
            </div>
  
            <a 
              href="#home" 
              className="text-sm font-semibold tracking-wide text-white"
            >
              Pranavesh <span className="text-sky-400">Kotike</span>
            </a>
          </div>
  
          {/* CENTER: Navigation */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <a href="#home" className="hover:text-sky-400 transition">Home</a>
            <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
            <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          </nav>
  
        </div>
      </header>
    );
  }
  