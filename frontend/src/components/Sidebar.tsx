"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: "Início", href: "/" },
    { label: "Livros", href: "/livros" },
    { label: "Empréstimos", href: "/emprestimos" },
    { label: "Sobre", href: "/sobre" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">📚 Minerva Lib</h2>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
