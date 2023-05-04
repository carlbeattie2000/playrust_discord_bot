import '../App.css';

export default function DiscordChannel({ name }: { name: string }) {
    return (
        <div className='pairedServerCard'>
            <div className='details'>
                <p className='name'>{name}</p>
            </div>
        </div>
    )
}
