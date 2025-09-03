import ContactForm from "./ContactForm";

export const metadata = {
  title: "Kontakt",
  description: "Kontakta Pohlmans Måleri för offert och rådgivning.",
};

export default function KontaktPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl sm:text-4xl font-bold">Kontakta oss</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Fyll i formuläret nedan så återkommer vi med en kostnadsfri offert.
      </p>
      <ContactForm />
    </main>
  );
}


