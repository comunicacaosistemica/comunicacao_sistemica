import './index.css'

export default function Modulo({title, children, bottom}){
    return(
        <div className='moduloComponent'>
            <div className='titleModuloComponent' style={{marginBottom: bottom}}>
                <span></span><h1>{title}</h1>
            </div>
            <div className='positionChildren'>
            {children}
            </div>
        </div>
    )
}