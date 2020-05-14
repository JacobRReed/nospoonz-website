import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

const Header: React.FC = () => {
  const navLinks: NavLinkItem[] = [
    { label: "Home", href: "/" },
    { label: "Twitter", href: "https://twitter.com/NSpoonz", external: true },
    {
      label: "YouTube",
      href: "https://www.youtube.com/user/tinospoon",
      external: true,
    },
    {
      label: "Tips",
      href: "https://streamlabs.com/nospoonz/tip",
      external: true,
    },
    {
      label: "Merchandise",
      href: "https://streamlabs.com/nospoonz/merch",
      external: true,
    },
  ];

  return (
    <div className="Header">
      <ul>
        {navLinks.map((link) => (
          <li>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <NavLink exact to={link.href}>
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
