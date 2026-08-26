"use client";

import { useState } from "react";
import Link from "next/link";

const allLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* Left links (desktop) */}
        <ul className="nav__links nav__links--left">
          <li><Link href="/collections" onClick={close}>Collections</Link></li>
          <li><Link href="/about" onClick={close}>About</Link></li>
        </ul>

        {/* Centered wordmark */}
        <Link href="/" className="nav__brand" aria-label="VIgma Fashion — home" onClick={close}>
          <span className="nav__wordmark">VIGMA</span>
          <span className="nav__wordmark-sub">Fashion</span>
        </Link>

        {/* Right links (desktop) */}
        <ul className="nav__links nav__links--right">
          <li><Link href="/contact" onClick={close}>Contact</Link></li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Mobile dropdown */}
        <ul className={`nav__menu ${open ? "nav__menu--open" : ""}`}>
          {allLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={close}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
