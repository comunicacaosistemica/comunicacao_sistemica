import './index.css'

export default function Aula({aula, content}){
    return(
        <div className='aulaComponent'>
            <p className='topicAula'>{aula}</p><p className='contentAula'>{content}</p>
        </div>
    );
}