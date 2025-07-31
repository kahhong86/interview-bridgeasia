import React from "react";
import Header from "@/src/components/header";
import { FC } from "react";

interface LayoutProps{
    children:any,
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    };

  return (
    <div className={`min-h-screen  ${darkMode ? "dark-mode" : ""}`}>
        <div className="shadow-md bg-sky-500/50 mb-10">
            <div className="lg:pt-1 lg:px-24 lg:pb-0 lg:max-w-6xl mx-auto p-6 pt-1 pb-0">
                <div className="text-right">
                    <button
                    onClick={toggleDarkMode}
                    className="mb-0 px-2 py-1 border rounded text-[10px]"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            <Header />
        </div>
        </div>
        <div className="lg:pb-24 lg:px-24 lg:pt-1 lg:max-w-6xl mx-auto px-6 pt-1">
            <main className="mx-auto">
                {children}
            </main>
        </div>
    </div>
  );
}

export default Layout;