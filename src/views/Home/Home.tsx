
import Navbar from '../../components/Navbar/Navbar'
import AppHeader from '../../components/AppHeader/AppHeader'
import Search from '../../components/Search/Search'
import JobsContainer from '../../components/JobsContainer/JobsContainer'

type Props = {}

export default function Home({}: Props) {


  return (
    <main className='bg-slate-50 flex flex-col items-center'>
        <Navbar/>
        <AppHeader/>
        <Search/>
        <JobsContainer/>
    </main>
  )
}