"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: { label: string; link: string }[];
  menuOpen: boolean;
  click: any;
}

const MenuItem: React.FC<MenuItemProps> = ({
  click,
  menuOpen,
  label,
  link,
  submenu,
}) => {
  const pathname = usePathname();
  const isActive = pathname == link;

  if (submenu) {
    return (
      <li onClick={click} className="nav-item" key={label}>
        <Link
          href={link}
          className="nav-link"
          onClick={(e) => e.preventDefault()}
        >
          {label} <i className="bx bx-chevron-down"></i>
        </Link>
        {menuOpen ? (
          <ul className="dropdown-menu">
            {submenu.map((subItem) => {
              const isActive = pathname == subItem.link;
              return (
                <li className="nav-item" key={subItem.label}>
                  <Link
                    href={subItem.link}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {subItem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </li>
    );
  }

  return (
    <li className="nav-item" key={label}>
      <Link href={link} className={`nav-link ${isActive ? "active" : ""}`}>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
