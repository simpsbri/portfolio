import React from 'react'
import './style.css'
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa'
import { socialprofiles } from '../../content_option'

export const Socialicons = (params) => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {socialprofiles.twitter && (
          <li>
            <a href={socialprofiles.twitter} target='_blank'>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofiles.github && (
          <li>
            <a href={socialprofiles.github} target='_blank'>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofiles.facebook && (
          <li>
            <a href={socialprofiles.facebook} target='_blank'>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofiles.linkedin && (
          <li>
            <a href={socialprofiles.linkedin} target='_blank'>
              <FaLinkedin />
            </a>
          </li>
        )}
        {/* TODO: Add YouTube and other icons
        {socialprofiles.youtube && (
          <li>
            <a href={socialprofiles.youtube} target='_blank'>
              <FaYoutube />
            </a>
          </li>
        )} */}
      </ul>
      <p>Follow Me</p>
    </div>
  )
}
