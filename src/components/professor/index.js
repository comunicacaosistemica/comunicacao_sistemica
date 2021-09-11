import './index.css'

export default function Professor({name, description, image}){
    return(
    <div className='professor'>
        <div className='professorDetail'>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='gradientEffect'></div>
            <a target= 'blank' href='https://youtube.com'>ver mais</a>
        </div>
        <img src={image} alt='Professor' />
    </div>
    )
}