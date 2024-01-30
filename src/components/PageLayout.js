import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoading from "src/pages/PageLoading";

export default function PageLayout() {
    return (
      <>
        <Navbar />
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        <Footer />
      </>
    );
}