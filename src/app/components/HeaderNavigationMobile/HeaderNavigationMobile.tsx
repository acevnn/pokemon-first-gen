"use client";

import React, { useState } from "react";
import { useHeaderNavigation } from "./HeaderNavigationMobile.hooks";
import { Drawer } from "@/app/components/Drawer/Drawer";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

export function HeaderNavigationMobile() {
  const { classes } = useHeaderNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        aria-label="Open navigation drawer"
        className={classes.headerNavigationToggle}>
        <Bars3BottomLeftIcon />
      </button>

      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
