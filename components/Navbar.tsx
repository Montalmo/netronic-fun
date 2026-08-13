"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Für wen?",               href: "#fuer-wen" },
  { label: "Software & App",         href: "#software" },
  { label: "Produkte",               href: "#produkte" },
  { label: "ROI",                    href: "#roi" },
  { label: "Businessplan & Support", href: "#businessplan" },
  { label: "Kundenstimmen",          href: "#kundenstimmen" },
  { label: "Kontakt",                href: "#kontakt" },
];

function IconHeadset() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g clipPath="url(#headset-nav)">
        <path d="M15.7727 4.27031C15.025 3.51514 14.1357 2.91486 13.1558 2.50383C12.1758 2.09281 11.1244 1.87912 10.0617 1.875H10C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25H5C5.49728 16.25 5.9742 16.0525 6.32583 15.7008C6.67746 15.3492 6.875 14.8723 6.875 14.375V11.25C6.875 10.7527 6.67746 10.2758 6.32583 9.92417C5.9742 9.57254 5.49728 9.375 5 9.375H3.15313C3.27366 8.07182 3.76315 6.83 4.56424 5.79508C5.36532 4.76016 6.44481 3.97502 7.67617 3.53169C8.90753 3.08836 10.2398 3.0052 11.5167 3.29196C12.7936 3.57872 13.9624 4.22352 14.8859 5.15078C16.0148 6.28539 16.7091 7.78052 16.8477 9.375H15C14.5027 9.375 14.0258 9.57254 13.6742 9.92417C13.3225 10.2758 13.125 10.7527 13.125 11.25V14.375C13.125 14.8723 13.3225 15.3492 13.6742 15.7008C14.0258 16.0525 14.5027 16.25 15 16.25H16.875C16.875 16.7473 16.6775 17.2242 16.3258 17.5758C15.9742 17.9275 15.4973 18.125 15 18.125H10.625C10.4592 18.125 10.3003 18.1908 10.1831 18.3081C10.0658 18.4253 10 18.5842 10 18.75C10 18.9158 10.0658 19.0747 10.1831 19.1919C10.3003 19.3092 10.4592 19.375 10.625 19.375H15C15.8288 19.375 16.6237 19.0458 17.2097 18.4597C17.7958 17.8737 18.125 17.0788 18.125 16.25V10C18.1291 8.93717 17.9234 7.88398 17.5197 6.90077C17.1161 5.91757 16.5224 5.02368 15.7727 4.27031ZM5 10.625C5.16576 10.625 5.32473 10.6908 5.44194 10.8081C5.55915 10.9253 5.625 11.0842 5.625 11.25V14.375C5.625 14.5408 5.55915 14.6997 5.44194 14.8169C5.32473 14.9342 5.16576 15 5 15H3.75C3.58424 15 3.42527 14.9342 3.30806 14.8169C3.19085 14.6997 3.125 14.5408 3.125 14.375V10.625H5ZM15 15C14.8342 15 14.6753 14.9342 14.5581 14.8169C14.4408 14.6997 14.375 14.5408 14.375 14.375V11.25C14.375 11.0842 14.4408 10.9253 14.5581 10.8081C14.6753 10.6908 14.8342 10.625 15 10.625H16.875V15H15Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="headset-nav">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function IconBurger() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10ZM3.125 5.625H16.875C17.0408 5.625 17.1997 5.55915 17.3169 5.44194C17.4342 5.32473 17.5 5.16576 17.5 5C17.5 4.83424 17.4342 4.67527 17.3169 4.55806C17.1997 4.44085 17.0408 4.375 16.875 4.375H3.125C2.95924 4.375 2.80027 4.44085 2.68306 4.55806C2.56585 4.67527 2.5 4.83424 2.5 5C2.5 5.16576 2.56585 5.32473 2.68306 5.44194C2.80027 5.55915 2.95924 5.625 3.125 5.625ZM16.875 14.375H3.125C2.95924 14.375 2.80027 14.4408 2.68306 14.5581C2.56585 14.6753 2.5 14.8342 2.5 15C2.5 15.1658 2.56585 15.3247 2.68306 15.4419C2.80027 15.5592 2.95924 15.625 3.125 15.625H16.875C17.0408 15.625 17.1997 15.5592 17.3169 15.4419C17.4342 15.3247 17.5 15.1658 17.5 15C17.5 14.8342 17.4342 14.6753 17.3169 14.5581C17.1997 14.4408 17.0408 14.375 16.875 14.375Z" fill="white"/>
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16.0672 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0672 16.0673C16.0091 16.1255 15.9402 16.1715 15.8643 16.2029C15.7884 16.2344 15.7071 16.2505 15.625 16.2505C15.5429 16.2505 15.4616 16.2344 15.3857 16.2029C15.3098 16.1715 15.2409 16.1255 15.1828 16.0673L10 10.8837L4.81719 16.0673C4.69991 16.1846 4.54085 16.2505 4.375 16.2505C4.20915 16.2505 4.05009 16.1846 3.93281 16.0673C3.81554 15.95 3.74965 15.791 3.74965 15.6251C3.74965 15.4593 3.81554 15.3002 3.93281 15.1829L9.11641 10.0001L3.93281 4.81729C3.81554 4.70001 3.74965 4.54095 3.74965 4.3751C3.74965 4.20925 3.81554 4.05019 3.93281 3.93291C4.05009 3.81563 4.20915 3.74975 4.375 3.74975C4.54085 3.74975 4.69991 3.81563 4.81719 3.93291L10 9.11651L15.1828 3.93291C15.3001 3.81563 15.4592 3.74975 15.625 3.74975C15.7909 3.74975 15.9499 3.81563 16.0672 3.93291C16.1845 4.05019 16.2504 4.20925 16.2504 4.3751C16.2504 4.54095 16.1845 4.70001 16.0672 4.81729L10.8836 10.0001L16.0672 15.1829Z" fill="white"/>
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <Logo className="navbar__logo" />

          <nav className="navbar__nav" aria-label="Hauptnavigation">
            <ul className="navbar__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="navbar__item">
                  <a href={item.href} className="navbar__link">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            {isMobile ? (
              <>
                <a href="#kontakt" className="btn-icon" aria-label="Beratung">
                  <IconHeadset />
                </a>
                <button
                  className="btn-icon"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Menü öffnen"
                >
                  <IconBurger />
                </button>
              </>
            ) : (
              <a href="#kontakt" className="btn btn--nav-cta">
                <IconHeadset />
                Beratung
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__header">
            <Logo className="navbar__logo" />
            <button className="btn-icon" onClick={close} aria-label="Schließen">
              <IconClose />
            </button>
          </div>

          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="mobile-menu__link" onClick={close}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#kontakt" className="btn btn--primary mobile-menu__cta" onClick={close}>
            <IconHeadset />
            Kostenlose Beratung
          </a>
        </div>
      )}
    </>
  );
}