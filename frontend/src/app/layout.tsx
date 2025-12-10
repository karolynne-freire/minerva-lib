import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="layout">
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Topbar />
            <div className="dashboard-content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
