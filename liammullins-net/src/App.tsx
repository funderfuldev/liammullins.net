
import Header from './Header.tsx';
import Footer from './Footer.tsx';

function App() 
{
  return (
    <>
      <div className='wrapper'>

        <Header/>
        <div className='pageContent'>
          <div className='spacer'/>
          <div className='pageContainer'>
            Test
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
