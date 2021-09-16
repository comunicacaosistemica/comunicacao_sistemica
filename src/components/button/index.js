import './index.css'

export default function Button({link, content, show}){
    return(
        <button className='buttonGradient' onClick={() => show()}>{content}</button>
    )
}