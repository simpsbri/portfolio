import React from 'react'
import './style.css'
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'
import { socialProfiles } from '../../content_option'

export const Socialicons = (params) => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {socialProfiles.twitter && (
          <li>
            <a href={socialProfiles.twitter} target='_blank'>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialProfiles.github && (
          <li>
            <a href={socialProfiles.github} target='_blank'>
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfiles.facebook && (
          <li>
            <a href={socialProfiles.facebook} target='_blank'>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialProfiles.linkedin && (
          <li>
            <a href={socialProfiles.linkedin} target='_blank'>
              <FaLinkedin />
            </a>
          </li>
        )}
        {/* TODO: Add YouTube and other icons
        {socialProfiles.youtube && (
          <li>
            <a href={socialProfiles.youtube} target='_blank'>
              <FaYoutube />
            </a>
          </li>
        )} */}
      </ul>
      <p>Follow Me</p>
    </div>
  )
}
