import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message as fallback delivery
    const text = `Hi Texas Beauty Salon! I'd like to book an appointment.%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/18329225592?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
            Book your <em className="text-gradient-gold not-italic">visit</em>
          </h2>
          <p className="text-foreground/70 mt-4">
            We'd love to pamper you. Reach out, send a message, or stop by — we're always open for bookings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://maps.google.com/?q=4915+Farm+to+Market+2920+Spring+TX+77388" target="_blank" rel="noreferrer" className="rounded-2xl p-5 bg-card border border-border hover:border-gold/50 hover:shadow-soft transition group">
                <MapPin className="w-6 h-6 text-gold mb-3" />
                <p className="font-display text-lg text-ink">Visit Us</p>
                <p className="text-sm text-foreground/70 mt-1">4915 Farm to Market 2920, Spring, TX 77388 (Marcin Plaza)</p>
              </a>
              <a href="tel:+18329225592" className="rounded-2xl p-5 bg-card border border-border hover:border-gold/50 hover:shadow-soft transition">
                <Phone className="w-6 h-6 text-gold mb-3" />
                <p className="font-display text-lg text-ink">Call Now</p>
                <p className="text-sm text-foreground/70 mt-1">+1 832-922-5592</p>
              </a>
              <a href="mailto:bermillobeautysalon@outlook.com" className="rounded-2xl p-5 bg-card border border-border hover:border-gold/50 hover:shadow-soft transition">
                <Mail className="w-6 h-6 text-gold mb-3" />
                <p className="font-display text-lg text-ink">Email</p>
                <p className="text-sm text-foreground/70 mt-1 break-all">bermillobeautysalon@outlook.com</p>
              </a>
              <div className="rounded-2xl p-5 bg-card border border-border">
                <Clock className="w-6 h-6 text-gold mb-3" />
                <p className="font-display text-lg text-ink">Hours</p>
                <p className="text-sm text-foreground/70 mt-1">Always Open · 24/7 booking</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
              <iframe
                title="Texas Beauty Salon location"
                src="https://www.google.com/maps?q=4915+Farm+to+Market+2920,+Spring,+TX+77388&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-7 md:p-10 bg-gradient-luxe shadow-luxe"
          >
            <h3 className="font-display text-2xl text-ink mb-1">Send us a message</h3>
            <p className="text-sm text-foreground/70 mb-6">We typically respond via WhatsApp within minutes.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={80} className="input" />
              </Field>
              <Field label="Phone">
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} className="input" />
              </Field>
              <Field label="Email" className="sm:col-span-2">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={120} className="input" />
              </Field>
              <Field label="Service" className="sm:col-span-2">
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input">
                  <option value="">Choose a service…</option>
                  <option>Haircut</option>
                  <option>Hair Coloring</option>
                  <option>Keratin Treatment</option>
                  <option>Hair Styling</option>
                  <option>Shampoo & Conditioning</option>
                  <option>Hair Threading</option>
                  <option>Manicure</option>
                  <option>Beauty Treatment</option>
                </select>
              </Field>
              <Field label="Message" className="sm:col-span-2">
                <textarea rows={4} maxLength={600} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-dark text-primary-foreground font-medium hover:shadow-luxe transition"
            >
              {sent ? <><CheckCircle2 className="w-4 h-4" /> Opened in WhatsApp</> : <><Send className="w-4 h-4" /> Send via WhatsApp</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-widest text-ink/70 mb-2">{label}</span>
      {children}
      <style>{`.input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; background: oklch(1 0 0 / 0.7); border: 1px solid oklch(0.2 0 0 / 0.08); color: var(--ink); outline: none; transition: all 0.2s; }
        .input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px oklch(0.78 0.11 75 / 0.2); background: white; }`}</style>
    </label>
  );
}
