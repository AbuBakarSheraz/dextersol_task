import DefaultLayout from "./Layout/DefaultLayout"
import bgimage from './assets/images/bg.png'

function App() {
  return (
    <>
        <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        minHeight: '100vh',
      }}
      className="pb-8"
    >
    <DefaultLayout />
    </div>
    </>
  )
}

export default App