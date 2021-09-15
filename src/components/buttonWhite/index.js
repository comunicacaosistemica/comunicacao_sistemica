import './index.css'

export default function ButtonWhite({content, onClicar}){
return(
    <button className='buttonWhite' onClick={()=>onClicar()}>{content}</button>
    );
}