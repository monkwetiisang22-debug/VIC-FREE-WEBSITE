import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div style={{backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif'}}>
      <section style={{padding: '100px 20px', textAlign: 'center'}}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{fontSize: '60px', fontWeight: '900', letterSpacing: '5px'}}
        >
          VIC FREE
        </motion.h1>
        <p style={{marginTop: '30px', fontSize: '20px', color: '#aaa', maxWidth: '700px', marginInline: 'auto'}}>
          High fashion meets street culture. Authentic patchwork craftsmanship. Founded in 2024.
        </p>
      </section>

      <section style={{padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{fontSize: '32px', marginBottom: '20px'}}>The Movement</h2>
        <p style={{color: '#aaa', maxWidth: '600px', marginInline: 'auto'}}>
          Vic Free represents reconstructed identity, bold silhouettes, and elevated street luxury.
        </p>
      </section>

      <footer style={{padding: '40px', textAlign: 'center', borderTop: '1px solid #222', color: '#666'}}>
        © 2024 Vic Free — High Fashion. Street Culture.
      </footer>
    </div>
  )
}
