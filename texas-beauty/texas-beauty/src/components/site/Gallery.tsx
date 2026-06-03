import { motion } from "framer-motion";
import g1 from "@/assets/salon-9.webp";
import g2 from "@/assets/salon-6.webp";
import g3 from "@/assets/salon-5.webp";
import g4 from "@/assets/salon-10.webp";
import g5 from "@/assets/salon-4.webp";
import g6 from "@/assets/salon-8.webp";
import g7 from "@/assets/salon-7.webp";
import g8 from "@/assets/salon-1.webp";

const items = [
  { src: g1, alt: "Highlighted long hair", span: "row-span-2" },
  { src: g2, alt: "Curled balayage" },
  { src: g3, alt: "Soft brunette waves" },
  { src: g4, alt: "Blonde straight hair styling" },
  { src: g5, alt: "Blonde color result" },
  { src: g6, alt: "Salon shampoo station", span: "row-span-2" },
  { src: g7, alt: "Salon lounge" },
  { src: g8, alt: "Reception area" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
            Step inside our <em className="text-gradient-gold not-italic">studio</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-xs uppercase tracking-widest text-primary-foreground">{it.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
