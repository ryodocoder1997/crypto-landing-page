"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/navigation-menu";
import { cn } from "@/public/lib/utils";
import { NAVBAR_LINK_MENU } from "@/shared/constant/public";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/hover-card";
import "./Navbar.scss";

const MENU_DROPDOWN_OPEN_DELAY = 50;
const MENU_DROPDOWN_CLOSE_DELAY = 100;

export function Navbar() {
  return (
    <div className="flex w-full justify-center p-10 items-center navbar-container">
      <NavigationMenu>
        <NavigationMenuList>
          {/* ----- MENU STANDALONE ----- */}
          {NAVBAR_LINK_MENU.map((menu) => (
            <NavigationMenuItem
              key={menu.name}
              className="uppercase nav-menu-header"
            >
              {!menu.items.length && (
                <Link
                  href={menu?.url || "#"}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "nav-menu-content"
                  )}
                >
                  {menu.name}
                </Link>
              )}
              {/* ----- MENU DROPDOWN ----- */}
              {!!menu.items.length && (
                <HoverCard
                  openDelay={MENU_DROPDOWN_OPEN_DELAY}
                  closeDelay={MENU_DROPDOWN_CLOSE_DELAY}
                >
                  <HoverCardTrigger className="nav-menu-header">
                    <NavigationMenuTrigger className="uppercase nav-menu-content">
                      {menu.name}
                    </NavigationMenuTrigger>
                  </HoverCardTrigger>
                  <HoverCardContent className="nav-menu-dropdown-content">
                    {menu.items.map((item) => (
                      <Link
                        key={`${menu.name}__${item.name}`}
                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md nav-menu-item-link"
                        href={item.url}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
