import React, { useState } from 'react'
import "./contact.css"

export default function Contact() {
  const [setCopy] = useState("Copy")
  const emailCopied = () => {
    navigator.clipboard.writeText("renteriamp96@gmail.com")
    setCopy("Copied")
    setTimeout(() => { setCopy("Copy") }, 1000)
  }

  return (
    <section class="contact">
      <p>Please get in touch with me for professional opportunities.</p>
        <button class="email" onClick={emailCopied}>renteriamp96@gmail.com</button>
    
    </section>

  )
}
