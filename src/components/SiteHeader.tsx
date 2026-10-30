import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navigation, profile } from "../data/site";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* Storage is optional. */
    }
  }, [dark]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Tuan Minh Do home">
          tm<span>.</span>
          <span className="brand-name">
            TUAN MINH DO
            <br />
            <small>RESEARCH PORTFOLIO</small>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((name) => (
            <a key={name} href={`#${name.toLowerCase()}`}>
              {name}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="github-header"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <button
            className="icon-button"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
