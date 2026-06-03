import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-5 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-ink font-display font-bold">T</div>
            <p className="font-display text-xl">Texas Beauty Salon</p>
          </div>
          <p className="text-sm text-white/65 max-w-sm leading-relaxed">
            Luxury hair &amp; beauty experiences in Spring, Texas. Crafted with care by passionate professionals.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-10 h-10 rounded-full border border-white/15 grid place-items-center hover:bg-gold hover:text-ink hover:border-gold transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/15 grid place-items-center hover:bg-gold hover:text-ink hover:border-gold transition"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <p className="font-display text-lg mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/65">
            {[["About","#about"],["Services","#services"],["Gallery","#gallery"],["Reviews","#reviews"],["Contact","#contact"]].map(([l,h]) => (
              <li key={h}><a href={h} className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> 4915 Farm to Market 2920, Spring, TX 77388</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <a href="tel:+18329225592" className="hover:text-gold">+1 832-922-5592</a></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <a href="mailto:bermillobeautysalon@outlook.com" className="hover:text-gold break-all">bermillobeautysalon@outlook.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Texas Beauty Salon. All rights reserved.</p>
        <p>Crafted with love in Spring, Texas.</p>
      </div>
    </footer>
  );
}
