import Hero from './_sections/Hero'
import About from './_sections/About'
import Contact from './_sections/Contact'
import Work from './_sections/Work'
import ImgList from './_components/ImgList'

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <About />
        <Work />
        <ImgList />
        <Contact />
      </section>
    </>
  )
}
