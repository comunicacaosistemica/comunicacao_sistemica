import './index.css'

export default function Detalhe({img, alt, title, description}){
    return(
        <div className='detalheContent'>
            <img src={img} alt={alt} />
            <div className='description'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}