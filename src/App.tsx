import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='h-screen'>
      <NavBar />
      <div className='bg-slate-900 h-full flex flex-row'>
        <div className='w-1/3 border-r border-slate-800'>
        </div>
        <div className='w-full'>
        </div>
      </div>
    </div>
  )
}

export default App
