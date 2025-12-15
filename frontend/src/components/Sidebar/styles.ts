"use client";

import styled from "styled-components";
import Link from "next/link";

/* SIDEBAR */
export const SidebarContainer = styled.aside<{ $open: boolean }>`
  width: 240px;
  height: 100vh;
  background: #3d3a39;
  padding: 24px 16px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: transform 0.3s ease;
  z-index: 11000;

  @media (max-width: 768px) {
    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
    width: 220px;
  }
`;

/* TÍTULO */
export const SidebarTitle = styled.h2`
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
`;

/* HAMBURGER */
export const Hamburger = styled.button`
  position: fixed; /* 🔹 fixo no topo da tela */
  top: 30px;
  left: 16px;
  padding:5px;
  z-index: 10000;
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  background: #6c625e;


  span {
    width: 22px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* NAVIGATION */
export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SidebarLink = styled(Link)<{ $active?: boolean }>`
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background: ${({ $active }) => ($active ? "#6c625e" : "transparent")};
  transition: 0.2s;

  &:hover {
    background: #6c625e;
  }
`;

/* OVERLAY */
export const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9998;
  }
`;
