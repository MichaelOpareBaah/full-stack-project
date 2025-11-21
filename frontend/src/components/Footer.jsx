import React, { useContext } from 'react'
import { HeaderContext } from '../layouts/Layout';


export default function Footer() {
      const {show}=useContext(HeaderContext)
  
  return (
    <footer className={`footer ${show?'hidden-content':''}`}>
      © Konongo Odumase Senior High Schoo Old Students Association.  Ashanti Region, Ghana.
    </footer>
  )
}
