import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-deep/85 px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-heading text-2xl text-white">Stalemate Enterprises</h3>
          <p className="mt-2 text-sm text-brand-muted">Interior Design & Turnkey Contracting | Mumbai, India</p>
        </div>

        <ul className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em]">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-brand-muted transition hover:text-brand-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-white/10 pt-6 text-xs tracking-[0.12em] text-brand-muted">
        © {new Date().getFullYear()} Stalemate Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
