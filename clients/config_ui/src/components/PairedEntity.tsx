import '../App.css';

import { Entity } from '../interfaces/pairedEntities';

export default function PairedEntityCard({ entityName, entityId }: Entity) {
    return (
        <div className='pairedServerCard'>
            <div className='details'>
                <p className='name'>{entityName}</p>
                <p className='connect'>{entityId}</p>
            </div>
        </div>
    )
}
