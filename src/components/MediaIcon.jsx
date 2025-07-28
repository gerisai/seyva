"use client";

import PropTypes from "prop-types"
import Image from 'next/image'

export default function MediaIcon({ link, icon, alt, width, height }) {
  return (
    <a href={link} className="hover:opacity-80 transition-opacity duration-300 focus:outline-none">
      <Image src={icon} alt={alt} width={width} height={height} />
    </a>
  )
}

MediaIcon.PropTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}
