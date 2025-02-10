import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./index.css";
import Routes from "../../route";

const MainLayout = ({ children, selectedKey = "", isMobile = false }: { children?: any, selectedKey: string, isMobile?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen">
      {isMobile && (
        <div className={`fixed inset-0 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <div className="bg-white h-full w-64 shadow-lg">
            <div className="p-4 border-b">
              <button onClick={toggleMenu} className="float-right">
                ×
              </button>
            </div>
            <nav>
              {Routes.map(route => (
                <Link
                  key={route.route}
                  to={route.route}
                  className={`flex items-center p-4 hover:bg-gray-100 ${
                    selectedKey === route.route ? 'bg-gray-100' : ''
                  }`}
                >
                  <route.Icon />
                  <span className="ml-4">{route.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="opacity-50 fixed inset-0 z-40 bg-black"
            onClick={toggleMenu}
          ></div>
        </div>
      )}

      <div className="flex-1">
        <header className="bg-accent shadow-md p-4">
          <button onClick={toggleMenu} className="p-2 hover:bg-primary rounded hover:cursor-pointer">
            <AiOutlineMenu />
          </button>
        </header>

        <main className="flex flex-row h-full">
          {(!isMobile || isMenuOpen) && (
            <nav className={`bg-popover text-input transition-all duration-300`}>
                {Routes.map(route => (
                  <Link
                    key={route.route}
                    to={route.route}
                    className={`flex items-center p-4 hover:bg-gray-700 ${
                      selectedKey === route.route ? 'bg-gray-700' : ''
                    }`}
                  >
                    <route.Icon />
                    {!isMenuOpen ? null : <span className="ml-4">{route.name}</span>}
                  </Link>
                ))}
            </nav>
          )}  
          {children}
        </main>

        <footer className="bg-accent text-center p-6 border-t">
          Built using <a href="https://reactjs.org/" className="text-popover-foreground">ReactJS</a> and
          <a href="https://tailwindcss.com/" className="text-popover-foreground"> Tailwind CSS</a> - Hosted on
          <a href="https://aws.amazon.com/s3/" className="text-popover-foreground"> AWS S3</a>
        </footer>
      </div>
    </div>
    );
};

export default MainLayout;