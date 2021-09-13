import './index.css'
import check from '../../assets/iconecheck.png'

export default function Beneficio({content}){
    return(
    <div className='beneficio'>
        <p>{content}</p>
        <img src={check} alt='check' />
    </div>
    )
}