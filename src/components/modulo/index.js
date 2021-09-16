import './index.css'

export default function Modulo({title, children}){
    return(
        <div className='moduloComponent'>
            <div className='titleModuloComponent'>
                <span></span><h1>{title}</h1>
            </div>
            <div className='positionChildren'>
            {children}
            </div>
        </div>
    )
}