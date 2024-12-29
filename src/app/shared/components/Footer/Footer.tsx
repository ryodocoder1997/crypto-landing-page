"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/input";
import { images } from "@/public/images";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center pt-3 items-center footer-container">
      {/* --- SPECIAL OFFERS --- */}
      <div
        className="special-offer-container"
        style={{ backgroundImage: `url(${images.specialOffer})` }}
      >
        <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
        <h2 className="title">
          GET <strong>SPECIAL OFFERS</strong>
        </h2>
        <div className="newsletter-container">
          <p>
            Sign up for a moving feast of special offers,
            <br />
            from our signature ranges to tasty lunch boxes and many more.
          </p>
        </div>
        <div className="form-container">
          <Input placeholder="Name" className="form-input" />
          <div className="form-row-with-submit">
            <Input placeholder="Email" type="email" className="form-input" />
            <Input
              type="submit"
              value="SIGN ME UP"
              className="form-submit-btn"
            />
          </div>
        </div>
      </div>
      {/* --- INFO --- */}
      <div className="info-container">
        <div className="info-sub-container">
          <div className="info-col-container">
            <div className="info-col">
              <Image
                alt="footer-logo"
                src={images.logo}
                width={153.75}
                height={153.75}
              />
            </div>
            <div className="info-col">
              <h4 className="info-header">Menus</h4>
              <Link className="info-link" href="/collections/chaos-lunch-box">
                Individual Lunch Boxes
              </Link>
              <Link className="info-link" href="/collections/tea-time-boxes">
                Tea Time Boxes
              </Link>
              <Link className="info-link" href="/collections/chao-top-picks">
                Chao&apos;s Top Picks
              </Link>
              <Link className="info-link" href="/collections/chaos-platters">
                Chao&apos;s Platters
              </Link>
              <Link
                className="info-link"
                href="/collections/funeral-and-wake-catering"
              >
                Funeral & Wake Catering
              </Link>
              <Link className="info-link" href="/collections/chaos-add-ons">
                Add-Ons
              </Link>
              <Link className="info-link" href="/collections/drinks-desserts">
                Drinks & Desserts
              </Link>
            </div>
            <div className="info-col">
              <h4 className="info-header">Chao Catering</h4>
              <Link className="info-link" href="/quote">
                Get a Quote
              </Link>
              <Link className="info-link" href="/">
                Home
              </Link>
              <Link className="info-link" href="/corporate">
                Corporate
              </Link>
              <Link className="info-link" href="/events">
                Events
              </Link>
              <Link className="info-link" href="/about-us">
                About us
              </Link>
              <Link className="info-link" href="/contact-us">
                Contact us
              </Link>
            </div>
            <div className="info-col">
              <h4 className="info-header">My Order</h4>
              <Link className="info-link" href="/my-order#how-to-order">
                How to Order
              </Link>
              <Link className="info-link" href="/my-order#delivery-details">
                Delivery Details
              </Link>
              <Link className="info-link" href="/my-order#pick-up-locations">
                Pick-up Locations
              </Link>
              <Link className="info-link" href="/my-order#payment-options">
                Payment Options
              </Link>
              <Link className="info-link" href="/faqs">
                FAQs
              </Link>
            </div>
            <div className="info-col special">
              <div className="social-media-container">
                <Link href="#" className="social-media">
                  <FaTwitter />
                </Link>
                <Link href="#" className="social-media">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="social-media">
                  <FaInstagram />
                </Link>
              </div>
              <Link href="tel:1300112426" className="call-section">
                ORDER NOW
                <br />
                1300&nbsp;11&nbsp;2426
              </Link>
              <Link
                href="mailto:hello@chaocatering.com.au"
                className="footer-email"
              >
                hello@chaocatering.com.au
              </Link>
              <Link
                href="http://chaocatering.com.au"
                className="footer-website-link"
              >
                chaocatering.com.au
              </Link>
            </div>
          </div>
          <div className="info-credits-container">
            <p className="credits">
              © 2024 &nbsp;
              <Link href="/">Chao Catering</Link>&nbsp;.
            </p>
            <div className="payment-methods-container">
              <Image
                alt="payment-method-logo"
                src={images.americanExpress}
                width={38}
                height={24}
              />
              <Image
                alt="payment-method-logo"
                src={images.applePay}
                width={38}
                height={24}
              />
              <Image
                alt="payment-method-logo"
                src={images.masterCard}
                width={38}
                height={24}
              />
              <Image
                alt="payment-method-logo"
                src={images.payPal}
                width={38}
                height={24}
              />
              <Image
                alt="payment-method-logo"
                src={images.shopPay}
                width={38}
                height={24}
              />
              <Image
                alt="payment-method-logo"
                src={images.unionPay}
                width={38}
                height={24}
              />
              <Image
                alt="payment-method-logo"
                src={images.visa}
                width={38}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
