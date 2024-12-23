import MenuBar from "./components/menuBar/MenuBar";
import "./globals.css";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <MenuBar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
