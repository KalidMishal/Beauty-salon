import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-ink font-display font-bold">
            T
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-foreground">Texas Beauty</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Salon · Spring TX</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-gold after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+18329225592"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4" /> (832) 922-5592
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-dark text-primary-foreground text-sm font-medium hover:shadow-luxe transition-all"
          >
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 grid place-items-center rounded-full glass"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass border-t border-border mt-3"
          >
            <ul className="container mx-auto px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-2 text-foreground/80 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-gradient-dark text-primary-foreground text-sm"
              >
                Book Appointment
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
