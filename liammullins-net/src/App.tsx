
import Header from './Header.tsx';
import Footer from './Footer.tsx';

import { Outlet } from 'react-router';

export default function App() 
{
  return (
    <>
      <div className='wrapper'>

        <Header/>

        <div className='pageContent'>
          <div className='spacer'/>
          <div className='pageContainer'>
            <Outlet/>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  )
}
