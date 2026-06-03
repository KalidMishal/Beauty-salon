import { motion } from "framer-motion";
import { Phone, Calendar, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/home-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/30 blur-3xl animate-float -z-10" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-blush/60 blur-3xl -z-10" />

      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.25em] text-foreground/80">
            <Sparkles className="w-3.5 h-3.5 text-gold" /> Premium Salon · Spring, TX
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
            Luxury Hair &amp; Beauty <span className="text-gradient-gold italic">Experience</span> in Texas
          </h1>

          <p className="text-lg text-foreground/70 max-w-xl">
            Professional hair styling, beauty treatments &amp; premium salon care — crafted by master stylists in
            the heart of Spring, Texas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-dark text-primary-foreground font-medium hover:shadow-luxe transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
            <a
              href="tel:+18329225592"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ink/15 bg-background/60 backdrop-blur font-medium hover:border-gold hover:text-gold transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-gold border-2 border-background"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-foreground/70">Trusted by hundreds of clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
            <img
              src={heroImg}
              alt="Texas Beauty Salon storefront in Spring, TX"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-luxe max-w-[220px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <div>
                <p className="font-display text-lg text-ink">Always Open</p>
                <p className="text-xs text-foreground/70">24/7 booking available</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3 shadow-soft"
          >
            <p className="text-xs uppercase tracking-widest text-foreground/60">Since</p>
            <p className="font-display text-2xl text-gradient-gold">Years of trust</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
