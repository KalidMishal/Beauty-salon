import { motion } from "framer-motion";
import { Award, Gem, Lightbulb, Smile, Tag, ThumbsUp } from "lucide-react";

const features = [
  { icon: Award, title: "Professional Stylists", desc: "A passionate team trained in modern beauty." },
  { icon: Gem, title: "Premium Products", desc: "Trusted brands that protect and pamper." },
  { icon: Lightbulb, title: "Modern Techniques", desc: "Latest cuts, color theory & treatments." },
  { icon: Smile, title: "Friendly Environment", desc: "Comfortable, inclusive and welcoming." },
  { icon: Tag, title: "Affordable Pricing", desc: "Luxury results, fair transparent rates." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Your smile is the only review we chase." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-ink text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.11_75/0.18),transparent_50%)]" />
      <div className="container mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-primary-foreground">
            A salon experience worth <em className="text-gradient-gold not-italic">coming back for</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-3xl p-7 border border-white/10 bg-white/[0.03] backdrop-blur hover:border-gold/40 hover:bg-white/[0.06] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center mb-5 text-ink">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
