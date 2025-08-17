"use client";

import Button from "./Button"
import Image from 'next/image'
import PropTypes from "prop-types"

export default function Header({ links }) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-6">
      <Image alt="SEyVA Logo" src='/imagotipo.svg' width={250} height={250} />
      <nav className="flex items-center space-x-8">
        { links.map((link,index) => (
          <a key={index} href={link.href} className="text-2xl text-black font-bold">{link.text}</a>
        )) }
        <Button additionalClasses="border-3 primary-button transition-colors duration-900 ease-in-out !text-2xl px-12 !py-4">
          Súmate
        </Button>
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
}
