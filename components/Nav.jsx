"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders().then((providers) => setProviders(providers));
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          className="object-contain"
          width={32}
          height={32}
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Criar Publicação
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sair
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                className="rounded-full"
                alt="profile"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
