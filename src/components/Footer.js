import React from 'react'
import '../css/Footer.css'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
  import styled from 'styled-components'
 
 
const FacebookIcon = styled(Facebook)`
 color:red;
 background-color:blue;
 `



const Footer = () => {

    // console.log(useContext(searchText))

    return (
        <footer className="page-footer">
            <ul className="social">
                <li><a href="https://www.facebook.com/" aria-label="Facebook">
                    <FacebookIcon aria-label="Facebook"/>
						
                </a></li>
                <li><a href="https://www.instagram.com" aria-label="Instagram"> 
                    <Instagram aria-label="Instagram"/>
                </a></li>
                <li><a href="https://www.twitter.com" aria-label="Twitter"> 
                    <Twitter aria-label="Twitter"/>
                </a></li>
            </ul>
            <nav aria-label="Legal">
                <ul className="legal">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Accessibility Policy</a></li>
                </ul>
            </nav>
             <p>Store {new Date().getFullYear()}</p>  
            
        </footer>
    )

}

export default Footer