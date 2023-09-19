import IndexNavbar from './components/Navbar/IndexNavbar'
import IndexHero from './components/Hero/IndexHero'
import IndexStat from './components/Stat/IndexStat'
import IndexGallery from './components/Gallery/IndexGallery'
import IndexIncentive from './components/Incentive/IndexIncentive'
import IndexFooter from './components/Footer/IndexFooter'

export default function Home() {
  return (
    <>
      <IndexNavbar />
      <IndexHero />
      <IndexStat />
      <IndexGallery />
      <IndexIncentive/>
      <IndexFooter />
    </>
  )
}
