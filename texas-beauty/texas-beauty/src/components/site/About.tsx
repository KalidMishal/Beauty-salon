import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";
import about1 from "@/assets/salon-7.webp";
import about2 from "@/assets/salon-1.webp";

const highlights = [
  { icon: Award, title: "Experienced Pros", text: "Master stylists with years of craft." },
  { icon: Heart, title: "Friendly Atmosphere", text: "Warm, welcoming and judgement-free." },
  { icon: Sparkles, title: "Premium Service", text: "Luxury treatments, every visit." },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img src={about1} alt="Salon lounge" className="rounded-2xl aspect-[3/4] object-cover shadow-luxe" />
            <img
              src={about2}
              alt="Salon waiting area"
              className="rounded-2xl aspect-[3/4] object-cover shadow-luxe mt-10"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-4 shadow-luxe text-center">
            <p className="font-display text-3xl text-gradient-gold">100%</p>
            <p className="text-xs uppercase tracking-widest text-foreground/70">Satisfaction</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">About Us</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-5 text-ink">
            Where beauty meets <em className="text-gradient-gold not-italic">craftsmanship</em>.
          </h2>
          <p className="text-foreground/70 mb-4 leading-relaxed">
            Texas Beauty Salon is Spring's premier destination for luxurious hair and beauty experiences. Our team of
            experienced beauty professionals brings together modern techniques, premium products, and a warm,
            welcoming atmosphere to deliver results you'll love.
          </p>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            From precision haircuts and dimensional color to keratin treatments and beauty care, every service is
            tailored to bring out your most confident self.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 bg-card border border-border hover:border-gold/40 hover:-translate-y-1 transition-all"
              >
                <h.icon className="w-6 h-6 text-gold mb-3" />
                <p className="font-display text-lg text-ink">{h.title}</p>
                <p className="text-sm text-foreground/70 mt-1">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
