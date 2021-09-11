import './index.css'

export default function Button({link, content}){
    return(
        <a target='blank' className='buttonGradient' href={link}>{content}</a>
    )
}