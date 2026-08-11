import Cursor from './components/Cursor'
import BlueprintGrid from './components/BlueprintGrid'
import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import OtherBuilds from './components/OtherBuilds'
import Approach from './components/Approach'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Cursor />
      <BlueprintGrid />
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <OtherBuilds />
        <Approach />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
