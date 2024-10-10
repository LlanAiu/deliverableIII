
export default function Reminder({id, title, description, onDelete}){
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onDelete}></button>
        </div>
    );
}