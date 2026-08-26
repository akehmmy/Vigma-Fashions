import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — VIgma Fashion",
  description:
    "Get in touch with VIgma Fashion for appointments, press, wholesale, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch.</h1>
          <p>
            Whether it&apos;s a private appointment, a press request, or a
            wholesale inquiry — we&apos;d love to hear from you.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <ContactForm />

          <div className="contact-info">
            <dl>
              <dt>Email</dt>
              <dd><a href="mailto:vigmafashion@gmail.com">vigmafashion@gmail.com</a></dd>

              <dt>Studio</dt>
              <dd>By appointment only<br />Open Tuesday – Saturday</dd>

              <dt>Instagram</dt>
              <dd>
                <a href="https://www.instagram.com/vigma_fashio" target="_blank" rel="noreferrer">@vigma_fashio</a>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
