"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/public/lib/utils";
import { NAVBAR_LINK_MENU } from "@/shared/constant/public";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Input } from "@/components/ui/input";

import { images } from "@/public/images";
import "./Navbar.scss";

import { useRouter } from "next/navigation";

const MENU_DROPDOWN_OPEN_DELAY = 50;
const MENU_DROPDOWN_CLOSE_DELAY = 100;

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 165) {
        setIsSticky(true);
      } else if (window.scrollY === 0) {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cn(
        "animate-fade-down animate-duration-[1000ms] flex w-full justify-center pt-3 items-center navbar-container",
        isSticky && "sticky"
      )}
    >
      <div className="navbar-logo">
        <Link href="/">
          {isSticky ? (
            <Image
              alt="logo"
              src={images.stickyLogo}
              width={150}
              height={150}
            />
          ) : (
            <Image alt="logo" src={images.logo} width={150} height={150} />
          )}
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="navbar-menu-list">
          {/* ----- MENU STANDALONE ----- */}
          {NAVBAR_LINK_MENU.map((menu) => (
            <div className="nav-menu-header-container" key={menu.name}>
              <NavigationMenuItem className="nav-menu-header">
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
                      <NavigationMenuTrigger
                        onClick={() => router.push(menu.url ?? "#")}
                        className="nav-menu-content"
                      >
                        {menu.name}
                      </NavigationMenuTrigger>
                    </HoverCardTrigger>

                    <HoverCardContent className="nav-menu-dropdown-content">
                      {menu.items.map((item) => (
                        <Link
                          key={`${menu.name}__${item.name}`}
                          className="flex h-full w-full select-none flex-col justify-end no-underline outline-none focus:shadow-md nav-menu-item-link"
                          href={item.url}
                        >
                          <span className="nav-menu-item-link-content">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                )}
              </NavigationMenuItem>
            </div>
          ))}

          {/* ----- MENU UTILITIES ----- */}
          {/* --- SEARCH BAR --- */}
          <div className="nav-menu-header-utilities-container">
            <NavigationMenuItem className="nav-menu-header-utilities">
              <HoverCard
                openDelay={MENU_DROPDOWN_OPEN_DELAY}
                closeDelay={MENU_DROPDOWN_CLOSE_DELAY}
              >
                <HoverCardTrigger>
                  <IoSearchSharp size={25} />
                </HoverCardTrigger>
                <HoverCardContent className="nav-menu-search-content">
                  <Input placeholder="Search" className="search-input" />
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>
          </div>

          {/* --- CALL SECTION --- */}
          <div className="nav-menu-header-utilities-container">
            <NavigationMenuItem className="nav-menu-header-utilities">
              <Link href="tel:1300112426" className="call-section">
                ORDER NOW
                <br />
                1300&nbsp;11&nbsp;2426
              </Link>
            </NavigationMenuItem>
          </div>

          {/* --- SOCIAL MEDIA ---  */}
          <div className="nav-menu-header-utilities-container">
            <NavigationMenuItem className="nav-menu-header-utilities">
              <div className="social-media-container">
                <Link href="#" className="social-media">
                  <FaTwitter fill="#000" />
                </Link>
                <Link href="#" className="social-media">
                  <FaFacebookF fill="#000" />
                </Link>
                <Link href="#" className="social-media">
                  <FaInstagram fill="#000" />
                </Link>
              </div>
            </NavigationMenuItem>
          </div>

          {/* --- CART --- */}
          <div className="nav-menu-header-utilities-container">
            <NavigationMenuItem className="nav-menu-header-utilities">
              <div className="cart-container">
                <HoverCard
                  openDelay={MENU_DROPDOWN_OPEN_DELAY}
                  closeDelay={MENU_DROPDOWN_CLOSE_DELAY}
                >
                  <HoverCardTrigger className="cart-trigger-container">
                    <IoCartOutline size={25} />
                    <div className="cart-quantity">0</div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="cart-content-container">
                      YOUR CART IS EMPTY
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
