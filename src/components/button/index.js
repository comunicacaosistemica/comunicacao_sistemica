import './index.css'

export default function Button({link, content, show}){
    return(
        <button className='buttonGradient' onClick={() => {
            if(link){
                window.open(`${link}`, '_blank')
            } else{
                show()
            }
            }}>{content}</button>
    )
}