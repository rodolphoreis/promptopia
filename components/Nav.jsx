"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
  return (
    <div>
      <h1>Nav</h1>
    </div>
  );
};

export default Nav;
