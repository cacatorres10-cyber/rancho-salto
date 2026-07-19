import { LangProvider } from '@/i18n'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { About } from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Lodging } from '@/components/Lodging'
import { GallerySection } from '@/components/GallerySection'
import { VideoSection } from '@/components/VideoSection'
import { InstagramSection } from '@/components/InstagramSection'
import { LocationSection } from '@/components/LocationSection'
import { Faq } from '@/components/Faq'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experiences />
        <Lodging />
        <GallerySection />
        <VideoSection />
        <InstagramSection />
        <LocationSection />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LangProvider>
  )
}

export default App
