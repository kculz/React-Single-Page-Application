import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {FaMagento} from 'react-icons/fa'

export const FooterContainer = styled.div`
    background-color: #101522;
    padding:4rem 0 2rem 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const FooterSubscription = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-bottom:24px;
    padding:24px;
    color:#fff;
`

export const FooterSubHeading = styled.p`
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom:24px;
    font-size:24px;
`

export const FooterSubText = styled.p`
    margin-bottom:24px;
    font-size:20px;
`

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:820px){
        flex-direction:column;
        width:80%;
    }
`

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 5px;
    margin-right:10px;
    outline:none;
    border: 1px solid #fff;
    font-size:16px;

    &::placeholder{
        color:#242424;
    }

    @media screen and (max-width:820px){
        width:100%;
        margin:0 0 16px 0;
    }
`

export const FooterLinksContainer = styled.div`
    width:100%;
    max-width:1000px;
    display:flex;
    justify-content:center;

    @media screen and (max-width:820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display:flex;

    @media screen and (max-width:820px){
        flex-direction:column;
    }
`

export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    text-align:start;
    margin: 16px;
    width: 160px;
    color: #ffffff;
    box-sizing:border-box;

    @media screen and (max-width:420px){
        padding: 10;
        margin: 0;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h2`
    margin-bottom:16px;
`
export const FooterLink = styled(Link)`
    color: #ffffff;
    text-decoration:none;
    margin-bottom:0.5rem;

    &:hover{
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width:1000px;
    width:100%;
`

export const SocialMediaWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:20px auto 0 auto;
    max-width:1000px;
    width:100%;

    @media screen and (max-width:840px){
        flex-direction:column;
    }
`

export const SocialMediaLogo = styled(Link)`
    color: #fff;
    font-size:22px;
    justify-content:start;
    cursor:pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;

`

export const SocialMediaIcon = styled(FaMagento)`
    margin-right:10px;
`

export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom:16px;

`

export const SocialIcons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:240px;
`

export const SocialIconsLinks = styled.a`
    color:#fff;
    font-size:24px;
`