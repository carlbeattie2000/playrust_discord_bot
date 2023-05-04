import '../App.css';

import { PairedServer } from '../interfaces/pairedServers';

async function unpairServer(id: string): Promise<boolean> {
    const request = await fetch('/api/unpair_server?id='+id, {
        method: 'POST'
    });

    return request.status === 204;
}

export default function PairedServerCard({ id, ip, port, name }: PairedServer) {
    return (
        <div className='pairedServerCard'>
            <div className='details'>
                <p className='name'>{name}</p>
                <p className='connect'>client.connect {ip}:{port}</p>
            </div>

            <div className='actions'>
                <button onClick={() => {
                    unpairServer(id);
                }}>Unpair</button>
            </div>
        </div>
    )
}
