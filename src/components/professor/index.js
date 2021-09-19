import './index.css'

export default function Professor({name, description, image, reverse}){

    let classes = {prof: 'professor', profDetail: 'professorDetail', containerButton: 'containerButtonProfessor'}
    if(reverse) classes = {prof: 'professorReverse', profDetail: 'professorDetailReverce', containerButton: 'containerButtonProfessorReverse'}
    return(
    <div className={classes.prof}>
        <div className={classes.profDetail}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='gradientEffect'></div>
            <div className={classes.containerButton}>
            <a target= 'blank' href='https://youtube.com'>ver mais</a>
            </div>
        </div>
        <img src={image} alt='Professor' />
    </div>
    )
}