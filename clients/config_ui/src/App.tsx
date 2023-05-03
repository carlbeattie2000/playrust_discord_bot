import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'

import paired_server from './pages/paired_servers.tsx';

function App() {
    const [loadedPage, setLoadedPage] = useState(paired_server);

    return (
        <>
            <main className='container'>
                 <SideBar setLoadedPage={setLoadedPage} />

                <div className='page'>
                    <div className='title_container'>
                        <p className='title'>RustPlusBot Config</p>
                    </div>

                    {loadedPage}
                </div>
            </main>
        </>
    )
}

export default App
