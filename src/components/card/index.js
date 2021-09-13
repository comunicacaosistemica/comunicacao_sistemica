import './index.css'
import cartao1 from '../../assets/cartoes.png'

export default function Card(props){

    return(
        <div className='card'>
            <div className='popular'>Popular</div>
            <div className='cardContent'>
                <h1 className='titleCard'>Premium</h1>
                <p className='price'>R$<div><b>4</b><b>0</b></div>/mês</p>
                <div className='beneficios'>
                    {props.children}
                </div>
                <p className='parcelas'>parcele em até 10x no cartão de crédito</p>
                <div className='creditCard'>
                    <img src={cartao1} alt='card1' />
                </div>
            </div>
        </div>
    );
}