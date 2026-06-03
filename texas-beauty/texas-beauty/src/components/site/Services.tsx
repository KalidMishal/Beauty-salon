import { motion } from "framer-motion";
import { Scissors, Palette, Droplets, Wind, Hand, Flower2, Sparkles, Brush } from "lucide-react";

const services = [
  { icon: Scissors, title: "Haircuts", desc: "Precision cuts tailored to your face and lifestyle." },
  { icon: Palette, title: "Hair Coloring", desc: "Balayage, highlights, dimensional color & gloss." },
  { icon: Droplets, title: "Keratin Treatment", desc: "Smooth, frizz-free, mirror-shine results." },
  { icon: Wind, title: "Hair Styling", desc: "Blowouts, curls, updos for any occasion." },
  { icon: Brush, title: "Shampoo & Conditioning", desc: "Deep cleansing with luxury salon products." },
  { icon: Sparkles, title: "Hair Threading", desc: "Clean, precise threading for brows & face." },
  { icon: Hand, title: "Manicure", desc: "Polished, healthy nails with detailed care." },
  { icon: Flower2, title: "Beauty Treatments", desc: "Facials and curated beauty rituals." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/40 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-blush/40 rounded-full blur-3xl -z-0" />
      <div className="container mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
            Curated services for your <em className="text-gradient-gold not-italic">signature look</em>
          </h2>
          <p className="text-foreground/70 mt-4">
            Every service is delivered with attention to detail, premium products, and a touch of Texan warmth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-3xl p-7 bg-card border border-border hover:border-gold/50 hover:shadow-luxe transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-luxe grid place-items-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <s.icon className="w-7 h-7 text-ink" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              <div className="mt-5 text-xs uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Book now →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
