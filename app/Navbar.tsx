"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Connect" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="top-nav" data-aos="fade-down" data-aos-duration="600">
      <Link href="/" className="brand-name">
        SANGRAM
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${active ? "active" : ""}`.trim()}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <a
        href="/sangramThapa_CV%20(1).pdf"
        download="Sangram_Thapa_CV.pdf"
        className="download-btn"
      >
        Download Resume
      </a>
    </header>
  );
}

export default Navbar;
