"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  SidebarContainer,
  SidebarTitle,
  SidebarNav,
  SidebarLink,
  Hamburger,
  Overlay,
} from "./styles";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", href: "/" },
    { label: "Autores", href: "/autores" },
    { label: "Livros", href: "/livros" },
    { label: "Empréstimos", href: "/emprestimos" },
  ];

  return (
    <>
      {/* HAMBURGER FIXO NO TOPO */}
      <Hamburger onClick={() => setOpen(!open)} aria-label="Menu">
        <span />
        <span />
        <span />
      </Hamburger>

      {/* SIDEBAR */}
      <SidebarContainer $open={open}>
        <SidebarTitle>📚 Minerva Lib</SidebarTitle>
        <SidebarNav>
          {links.map(({ label, href }) => (
            <SidebarLink
              key={href}
              href={href}
              $active={pathname === href}
              onClick={() => setOpen(false)}
            >
              {label}
            </SidebarLink>
          ))}
        </SidebarNav>
      </SidebarContainer>

      {/* OVERLAY MOBILE */}
      {open && <Overlay onClick={() => setOpen(false)} />}
    </>
  );
}
