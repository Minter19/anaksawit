import IndexNavbar from './components/Navbar/IndexNavbar'
import IndexHero from './components/Hero/IndexHero'
import IndexStat from './components/Stat/IndexStat'
import IndexGallery from './components/Gallery/IndexGallery'
import IndexIncentive from './components/Incentive/IndexIncentive'
import IndexFooter from './components/Footer/IndexFooter'

export default async function Home() {


  const req = await fetch(`${process.env.API_TARGET}`).then(res => res.json()).catch(err => console.log(err))

  console.log(req)
  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_JUDUL}</h1>
      <h1>id request : {req.id}</h1>
      <IndexNavbar />
      <IndexHero />
      <IndexStat />
      <IndexGallery />
      <IndexIncentive/>
      <IndexFooter />
    </>
  )
}
