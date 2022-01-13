import React from 'react'
import { Button } from '../../globalStyles'
import {FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput,FooterLinkTitle,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems, FooterLink, SocialMedia,SocialMediaWrapper,SocialMediaIcon ,WebsiteRights,SocialIcons,SocialMediaLogo,SocialIconsLinks} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the lastest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" placeholder="Your Email" type="email" />
                        <Button fontBig >Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialMediaLogo to="/">
                        <SocialMediaIcon />
                        ULTRA
                    </SocialMediaLogo>
                    <WebsiteRights>ULTRA &copy; 2021 </WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLinks href="" target="_blank" arial-label="Facebook">
                            <FaFacebook />
                        </SocialIconsLinks>

                        <SocialIconsLinks href="" target="_blank" arial-label="Instagram">
                            <FaInstagram />
                        </SocialIconsLinks>

                        <SocialIconsLinks href="" target="_blank" arial-label="YouTube">
                            <FaYoutube />
                        </SocialIconsLinks>

                        <SocialIconsLinks href="" target="_blank" arial-label="Twitter">
                            <FaTwitter />
                        </SocialIconsLinks>

                        <SocialIconsLinks href="" target="_blank" arial-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconsLinks>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
