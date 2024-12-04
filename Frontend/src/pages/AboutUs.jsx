import React, { useEffect } from 'react';
import Navbar from "../components/Header";
import Footer from "../components/Foot";

export default function ContactPage() {
    useEffect(() => {
        const button = document.querySelector('.contact-button');
        const parentDiv = button.closest('.bg-white'); // Find the parent div with the white background class
    
        if (window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)') {
          button.style.backgroundColor = '#100C08';
          button.style.color = '#ffffff';
        } else {
          button.style.backgroundColor = '#ffffff';
          button.style.color = '#100C08';
        }
      }, []);
      useEffect(() => {
        const card = document.querySelector('.card');
        const parentDiv = card.closest('.bg-white'); // Find the parent div with the white background class
    
        if (parentDiv && window.getComputedStyle(parentDiv).backgroundColor === 'rgb(255, 255, 255)') {
          card.style.background = 'rgba(0, 0, 0, 0.8)'; // Darker background
          card.style.color = '#ffffff'; // White text
        } else {
          card.style.background = 'rgba(255, 255, 255, 0.8)'; // Lighter background
          card.style.color = '#000000'; // Black text
        }
      }, []);  


  return (
    <div>
    <div className="flex flex-col items-center w-full max-md:max-w-full bg-white pt-8">
      <Navbar />
      
    <Footer />
    </div>
    
</div>
  )
}