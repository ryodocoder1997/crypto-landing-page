"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
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
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";

import { images } from "@/public/images";
import { useRouter } from "next/navigation";
import "./Navbar.scss";
import { useTranslations } from "next-intl";

const MENU_DROPDOWN_OPEN_DELAY = 50;
const MENU_DROPDOWN_CLOSE_DELAY = 100;

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const t = useTranslations("navbar");

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
        "animate-fade-down animate-duration-[1000ms] flex w-full h-fit py-4 justify-center items-center navbar-container",
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
          {NAVBAR_LINK_MENU.map((menu, idx) => (
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
                    {t(`root-${idx}.name`)}
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
                        {t(`root-${idx}.name`)}
                      </NavigationMenuTrigger>
                    </HoverCardTrigger>

                    <HoverCardContent className="nav-menu-dropdown-content">
                      {menu.items.map((item, childIdx) => (
                        <Link
                          key={`${menu.name}__${item.name}`}
                          className="flex h-full w-full select-none flex-col justify-end no-underline outline-none focus:shadow-md nav-menu-item-link"
                          href={item.url}
                        >
                          <span className="nav-menu-item-link-content">
                            {t(`root-${idx}.item-list.item-${childIdx}`)}
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
          <ul className="nav-menu-header-utilities-container">
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
          </ul>

          {/* --- SOCIAL MEDIA ---  */}
          <ul className="nav-menu-header-utilities-container">
            <NavigationMenuItem className="nav-menu-header-utilities">
              <div className="social-media-container">
                <Link href="#" className="social-media">
                  <div className="social-media-wrapper">
                    <FaTelegramPlane fill="#000" />
                  </div>
                </Link>
                <Link href="#" className="social-media">
                  <div className="social-media-wrapper">
                    <Image
                      alt="zalo-logo"
                      src={images.zaloLogo}
                      width={16}
                      height={16}
                    />
                  </div>
                </Link>
                <Link href="#" className="social-media">
                  <div className="social-media-wrapper">
                    <FaTwitter fill="#000" />
                  </div>
                </Link>
                <Link href="#" className="social-media">
                  <div className="social-media-wrapper">
                    <FaFacebookF fill="#000" />
                  </div>
                </Link>
                <Link href="#" className="social-media">
                  <div className="social-media-wrapper">
                    <FaInstagram fill="#000" />
                  </div>
                </Link>
              </div>
            </NavigationMenuItem>
          </ul>

          {/* --- CART --- */}
          <ul className="nav-menu-header-utilities-container">
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
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
