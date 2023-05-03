import { PairedServer } from '../interfaces/pairedServers';

export default function PairedServerCard(pairedServer: PairedServer) {
    return (
        <div className='pairedServerCard'>
            <p className='name'>{pairedServer.name}</p>
            <p className='connect'>client.connect {pairedServer.ip}:{pairedServer.port}</p>
        </div>
    )
}
