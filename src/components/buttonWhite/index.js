import './index.css'

export default function ButtonWhite({link, content}){
return(
    <a className='buttonWhite' href={link}>{content}</a>
    );
}