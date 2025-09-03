"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    const res = await fetch("/api/kontakt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setStatus("Tack! Vi återkommer inom kort.");
      form.reset();
    } else {
      setStatus("Något gick fel. Försök igen.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-6 max-w-xl">
      <div>
        <label className="block text-sm text-white/80">Namn</label>
        <input name="namn" required className="mt-1 w-full rounded-md bg-[--muted] border border-white/10 px-4 py-3 outline-none focus:border-white/20" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-white/80">E-post</label>
          <input type="email" name="epost" required className="mt-1 w-full rounded-md bg-[--muted] border border-white/10 px-4 py-3 outline-none focus:border-white/20" />
        </div>
        <div>
          <label className="block text-sm text-white/80">Telefon</label>
          <input type="tel" name="telefon" className="mt-1 w-full rounded-md bg-[--muted] border border-white/10 px-4 py-3 outline-none focus:border-white/20" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-white/80">Meddelande</label>
        <textarea name="meddelande" rows={5} className="mt-1 w-full rounded-md bg-[--muted] border border-white/10 px-4 py-3 outline-none focus:border-white/20" />
      </div>
      <button className="btn-primary" type="submit">Skicka</button>
      {status && <p className="text-sm text-white/80">{status}</p>}
    </form>
  );
}


