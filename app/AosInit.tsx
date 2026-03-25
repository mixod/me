"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
}

export default AosInit;
