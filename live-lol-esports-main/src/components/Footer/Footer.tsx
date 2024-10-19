import React from "react";
import './styles/footerStyle.css'

import { ReactComponent as DiscordSVG } from '../../assets/images/discord.svg';
import { ReactComponent as GitHubLogoSVG } from '../../assets/images/github.svg';
import { ReactComponent as TwitterSVG } from '../../assets/images/twitter.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/images/linkedin.svg';

export function Footer() {

    return (
        <nav className="footer-container">
            <a target="_blank" rel="noreferrer" href="https://github.com/AndyDanger/live-lol-esports">
                <GitHubLogoSVG className="footer-img" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/andydangerzone">
                <TwitterSVG className="footer-img" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.com/users/183408194209579008">
                <DiscordSVG className="footer-img" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andrew-marshall-32b404110/">
                <LinkedInSVG className="footer-img" />
            </a>
        </nav>
    );
}