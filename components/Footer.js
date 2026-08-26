import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="site-logo site-logo--footer" src="/images/vf-logo.png" alt="VIgma Fashion" />
          <p style={{ color: "var(--color-muted)", marginTop: "1.1rem", maxWidth: "32ch" }}>
            Modern elegance, quietly made. Timeless pieces designed and crafted
            with intention.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.instagram.com/vigma_fashio" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="mailto:vigmafashion@gmail.com">vigmafashion@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} VIgma Fashion. All rights reserved.</span>
        <span>Designed with care.</span>
      </div>
    </footer>
  );
}
