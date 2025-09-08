"use client";

import Button from "./Button"
import Image from 'next/image'
import PropTypes from "prop-types"
import { useRouter, usePathname } from 'next/navigation'
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header({ links }) {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpened,setMenuOpened] = useState(false)

  useEffect(() => { // Close the menu when selecting new link
    setMenuOpened(false);
  }, [pathname])

  return (
    <header className="w-full flex items-center justify-between px-6 py-6">
      <Link href="/">
        <Image className={menuOpened ? "opacity-0" : "opacity-100"} alt="SEyVA Logo" src='/imagotipo.svg' width={250} height={250} />
      </Link>
      <nav className="flex">
        <div className="hidden lg:flex items-center space-x-8">
          { links.map((link,index) => (
            <Link key={index} href={link.href} className="text-2xl text-black font-bold">{link.text}</Link>
          )) }
          <Button 
            additionalClasses="border-3 primary-button transition-colors duration-900 ease-in-out !text-2xl px-12 !py-4"
            onClick={() => router.push('/join')}
          >
            Súmate
          </Button>
        </div>
        <button onClick={() => setMenuOpened(!menuOpened)}>
          <div className={`lg:hidden flex gap-4 items-center ${menuOpened && "none"}`}>
            <h2 className="text-2xl font-bold text-blue">Menú</h2>
            <Menu className="w-12 h-12 text-blue"/>
          </div>
        </button>
        { menuOpened &&
        
          <div className="absolute top-0 right-0 bg-blue flex flex-col z-40 rounded-bl-lg pt-10 pr-8 pl-20 pb-20 items-end gap-12">
            <Image alt="SEyVA Logo White" src='/imagotipo_white.svg' width={250} height={250} />
            { links.map((link,index) => (
            <Link key={index} href={link.href} className="text-3xl text-white font-bold">{link.text}</Link>
          )) }
            <Button 
              additionalClasses="bg-white text-blue !text-2xl font-bold px-10 !py-2"
              onClick={() => router.push('/join')}
            >
              Súmate
            </Button>
            <button onClick={() => setMenuOpened(false)}>
              <ChevronRight className="absolute bottom-0 rotate-315 left-0 text-white w-24 h-24" />
            </button>
          </div>
        }
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
}
