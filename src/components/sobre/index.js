import './index.css'

export default function Detalhe({img, alt, title, description, width}){
    return(
        <div className='detalheContent'>
            <img src={img} alt={alt} style={{width: width}}/>
            <div className='description'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}