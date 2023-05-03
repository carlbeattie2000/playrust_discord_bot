import { PairedServer } from '../interfaces/pairedServers';

export default function PairedServerCard({ ip, port, name }: PairedServer) {
    return (
        <div className='pairedServerCard'>
            <p className='name'>{name}</p>
            <p className='connect'>client.connect {ip}:{port}</p>
        </div>
    )
}
