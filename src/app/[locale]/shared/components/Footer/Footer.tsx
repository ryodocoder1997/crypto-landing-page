"use client";

import "./Footer.scss";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { images } from "@/public/images";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center footer-container">
      {/* --- SPECIAL OFFERS --- */}
      <div
        className="special-offer-container"
        style={{ backgroundImage: `url(${images.specialOffer})` }}
      >
        <div className="h-[.5rem] w-[4.375em] bg-[#f8c307] mb-[1.5625rem]" />
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
              <h4 className="info-header">Products</h4>
              <Link
                className="info-link"
                href="/products#Personal Financial Adisory"
              >
                Personal Financial Adisory
              </Link>
              <Link className="info-link" href="/products#Portfolio Management">
                Portfolio Management
              </Link>
              <Link
                className="info-link"
                href="/products#Trading System Development"
              >
                Trading System Development
              </Link>
              <Link
                className="info-link"
                href="/products#Real Trading Account Analysis"
              >
                Real Trading Account Analysis
              </Link>
              <Link
                className="info-link"
                href="/products#Financial Investment Courses"
              >
                Financial Investment Courses
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
