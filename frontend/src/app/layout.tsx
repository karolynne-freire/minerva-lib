import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Minerva Library",
  description: "Sistema completo de biblioteca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Sidebar />
          <div className="content">{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
