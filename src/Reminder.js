import './Reminder.css';

export default function Reminder({id, title, description, onDelete}){
    
    return (
        <div className='remind-block'>
            <div className='reminder-text'>
                <div className='inline'>
                    <h2 className='title-text'>{title}</h2>
                    <p className='description-text'>{description}</p>
                </div>
                <button className='reminder-delete' onClick={onDelete}><b>Remove</b></button>
            </div>

        </div>
    );
}