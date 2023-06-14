// components/SocialIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => (
  <div className="hidden md:flex fixed top-1/2 right-14 transform -translate-y-1/2 z-50">
    <div className="flex flex-col items-end space-y-2">
      <ul className="text-xl py-1">
        <li className="py-1">
          <a
            href="https://www.facebook.com/Senabelgroup"
            target="_blank"
            className="text-white"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>

        <li className="py-1">
          <a
            href="https://www.instagram.com/senabelgroup/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            className="text-white"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

        <li className="py-1">
          <a
            href="https://api.whatsapp.com/send?phone=+905347750054&text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>

        <li className="py-1">
          <a
            href="https://www.google.com/maps/place/Ak%C5%9Femsettin,+Fevzi+Pa%C5%9Fa+Cd.+No:11,+34080+Fatih%2F%C4%B0stanbul/@41.0172352,28.9492,17z/data=!4m6!3m5!1s0x14caba2119afe803:0x71fc7a054d06609b!8m2!3d41.017563!4d28.949365!16s%2Fg%2F11c1xrnlv0?hl=ar"
            target="_blank"
            className="text-white"
            aria-label="Map"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </a>
        </li>
      </ul>

      <div className="text-white font-bold text-lg pt-20 transform -rotate-90">
        <p className=" p-0 m-0">SENABEL --</p>
      </div>
    </div>
  </div>
);

export default SocialIcons;
