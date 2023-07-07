import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='h-screen'>
      <NavBar />
      <div className='bg-primary h-full flex flex-row p-12'>
        <div className='w-1/3 border-r border-r-text'>
        </div>
        <div className='w-full'>
        </div>
      </div>
    </div>
  )
}

export default App
