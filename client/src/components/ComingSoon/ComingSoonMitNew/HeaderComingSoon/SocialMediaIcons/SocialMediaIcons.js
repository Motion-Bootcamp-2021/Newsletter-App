import {ReactComponent as Facebook } from '../assets/Facebook.svg';
import {ReactComponent as Instagram } from '../assets/Instagram.svg';
import {ReactComponent as LinkedIn } from '../assets/Linkedin.svg';
import {ReactComponent as Twitter } from '../assets/Twitter.svg';

import './SocialMediaIcons.scss'

const SocialMediaIcons = () => {
    return (
        <div className='social-medias'>
            <a href='#' className='icon' >
                <Facebook />
            </a>
            <a href='#' className='icon' >
                <Instagram  />
            </a>
            <a href='#' className='icon'>
                <LinkedIn />
            </a>
            <a href='#' className='icon'>
                <Twitter />
            </a>
        </div>
    )
}

export default SocialMediaIcons;