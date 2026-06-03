import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Abs Wright", text: "I'm so glad I found this salon. Sergio is my new go-to stylist. The color is always on point and he really makes your hair look sexy and beautiful." },
  { name: "Irma Solis", text: "Sergio is amazing! He works magic. Wash, Cut, Keratin Treatment, and I walked out looking like a hair model." },
  { name: "Muddasir Ahmed", text: "Sergio is a master hair stylist. I get nothing but compliments about my haircut." },
  { name: "Silvia Lopez", text: "The owner is really nice and he knows what you want all the time. So satisfied." },
  { name: "Ruth Muro", text: "Kristal was very professional and friendly." },
  { name: "Elena Garcia", text: "Sergio is amazing, I love my haircut!" },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gradient-luxe relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/30 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-ink/70">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
            Loved by our <em className="text-gradient-gold not-italic">clients</em>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-14 shadow-luxe text-center"
            >
              <Quote className="w-10 h-10 text-gold mx-auto mb-6" />
              <p className="font-display text-2xl md:text-3xl text-ink leading-snug italic">
                "{r.text}"
              </p>
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-medium text-ink">— {r.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full glass grid place-items-center hover:bg-ink hover:text-primary-foreground transition" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-ink" : "w-2 bg-ink/30"}`}
                  aria-label={`Go to review ${k + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full glass grid place-items-center hover:bg-ink hover:text-primary-foreground transition" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
