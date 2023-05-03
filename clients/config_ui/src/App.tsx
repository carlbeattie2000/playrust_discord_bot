import './App.css'
import SideBar from './components/SideBar'

function App() {
    return (
        <>
            <main className='container'>
                 <SideBar />

                <div className='page'>
                    <div className='title_container'>
                        <p className='title'>RustPlusBot Config</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
