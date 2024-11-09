/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.js";
import Presentation from "views/Presentation.js";
import Sections from "views/Sections.js";
// example pages
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import LandingPage from "views/examples/LandingPage.js";
import Pricing from "views/examples/Pricing.js";
import Ecommerce from "views/examples/Ecommerce.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Error404 from "views/examples/Error404.js";
import Error500 from "views/examples/Error500.js";
import AccountSettings from "views/examples/AccountSettings.js";
import LoginPage from "views/examples/LoginPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ResetPage from "views/examples/ResetPage.js";
import InvoicePage from "views/examples/InvoicePage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";
import ChatPage from "views/examples/ChatPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="blackTagDevs-Landing/index" element={<Index />} />
      <Route
        path="blackTagDevs-Landing/presentation"
        element={<Presentation />}
      />
      <Route path="blackTagDevs-Landing/sections" element={<Sections />} />
      <Route path="blackTagDevs-Landing/about-us" element={<AboutUs />} />
      <Route path="blackTagDevs-Landing/blog-post" element={<BlogPost />} />
      <Route path="blackTagDevs-Landing/blog-posts" element={<BlogPosts />} />
      <Route path="blackTagDevs-Landing/contact-us" element={<ContactUs />} />
      <Route
        path="blackTagDevs-Landing/landing-page"
        element={<LandingPage />}
      />
      <Route path="blackTagDevs-Landing/pricing" element={<Pricing />} />
      <Route path="blackTagDevs-Landing/ecommerce" element={<Ecommerce />} />
      <Route
        path="blackTagDevs-Landing/product-page"
        element={<ProductPage />}
      />
      <Route
        path="blackTagDevs-Landing/profile-page"
        element={<ProfilePage />}
      />
      <Route path="blackTagDevs-Landing/404-error" element={<Error404 />} />
      <Route path="blackTagDevs-Landing/500-error" element={<Error500 />} />
      <Route
        path="blackTagDevs-Landing/account-settings"
        element={<AccountSettings />}
      />
      <Route path="blackTagDevs-Landing/login-page" element={<LoginPage />} />
      <Route
        path="blackTagDevs-Landing/register-page"
        element={<RegisterPage />}
      />
      <Route path="blackTagDevs-Landing/reset-page" element={<ResetPage />} />
      <Route
        path="blackTagDevs-Landing/invoice-page"
        element={<InvoicePage />}
      />
      <Route
        path="blackTagDevs-Landing/checkout-page"
        element={<CheckoutPage />}
      />
      <Route path="blackTagDevs-Landing/chat-page" element={<ChatPage />} />
      <Route
        path="blackTagDevs-Landing/"
        element={<Navigate to="blackTagDevs-Landing/index" replace />}
      />
    </Routes>
  </BrowserRouter>
);
