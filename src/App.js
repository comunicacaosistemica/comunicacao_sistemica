import './App.css'

import {Link} from 'react-scroll'

import videoAula from './assets/Video Aulas.png'
import suporte from './assets/Suporte.png'
import aulasAoVivo from './assets/Aulas Ao vivo.png'
import eBook from './assets/E-book.png'
import relatorio from './assets/Relatorio.png'
import certificado from './assets/Certificado.png'
import aprender from './assets/aprender.jpg'
import zeca from './assets/zeca.png'
import glacia from './assets/glacia.png'
import logo from './assets/sistemico-negativo.png'
import notebook from './assets/notebook.png'
import config from './assets/config.png'
import video from './assets/comunicacaosistemica.mp4'

import Button from './components/button'
import Detalhe from './components/sobre'
import Professor from './components/professor'
import ButtonWhite from './components/buttonWhite'
import Card from './components/card'
import Beneficio from './components/beneficio'



function App() {
  return (
    <div className="App">
      <header>
        <div className='containerHeader'>
          <img src={logo} alt='logo' />

          <ul>
            <li><Link to='sobre' smooth={true} offset={-110}>Sobre</Link></li>
            <li><Link to='professor' smooth={true} offset={-110}>Ministrantes</Link></li>
            <li><Link >Investimento</Link></li>
            <li><Link to='faq' smooth={true} offset={-110}>FAQ</Link></li>
          </ul>
          <a href='https://comunicacaosistenuca.com.br'>Inscreva-se</a>
        </div>
      </header>
      <div className='headerMargin'></div>
      <section className='inicio'>
        <div className='containerInicio'>
          <div className='contentInicio'>
            <h1>Comunicar ao outro quem Verdadeiramente somos<br/>é um ato de Coragem, Profunda Aceitação,<br/>e Auto Amor!</h1>
            <p>A Comunicação Sistêmica revela a origem dos nossos conflitos, encoraja a expressar nossos sentimentos e necessidades, aprimora nossos relacionamentos, e nos impulsiona a estabelecer do uma conexão profunda, sincera e amorosa conosco e com o outro.</p>
            <Button content='Quero me Inscrever Já' link='https://comunicacaosistemica.com.br'/>
          </div>
          <div className='imgVideo'>
            <img src={notebook} alt='notebook' />
            <video width="320" height="240" controls="controls">
              <source src={video} type="video/mp4"/>
            </video>
          </div>
        </div>
      </section>
      <section className='aprender' id='sobre'>
        <div className='containerAprender'>
          <img src={aprender} alt='O que Vou Aprender com Este Curso?' />
          <div className='titleAprender'>
          <h1>O que Vou Aprender com Este Curso?</h1>
          <ButtonWhite link='https://comunicacaosistemica.com.br' content='Clique e Descubra' />
          </div>  
        </div>
      </section>
      <section className='sectionSobre'>
      <h1>Como é<br/>a estrutura do curso?</h1>
        <div className='containerDetalhes'>
            <div className="detalhes">
              <Detalhe img={videoAula} alt="Video aula" title="Videoaula" description="Serão 40 horas, divididas em 04 módulos disponibilizados semanalmente, com conteúdo ágil, consistente e de fácil entendimento." />
              <Detalhe img={suporte} alt="Suporte" title="Suporte" description="Será ciado um grupo de WhatsApp para dúvidas, sugestões, além do aluno poder se comunicar diretamente com os instrutores." />
              <Detalhe img={aulasAoVivo} alt="aulas ao vivo" title="Aulas Ao Vivo" description="Aprofundamento dos conhecimentos e atividades práticas para integrar conhecimento e prática." />
              <Detalhe img={eBook} alt="e-book" title="E-book" description="Será disponibilizado ao longo do curso com o referencial teórico-prático necessário à aplicação da Comunicação Sistêmica." />
              <Detalhe img={relatorio} alt="Questionario de Auto Avaliação" title="Questionário de Auto Avaliação" description="Ao final de cada módulo, o aluno poderá se auto avaliar, bem como, observar as melhorias em sua vida diária." />
              <Detalhe img={certificado} alt="certificado" title="Certificado" description="Será certificado pela ESMARN- Escola da Magistratura do RN, o qual servirá para progressão funcional do servidor. " />
            </div>
            <Button link='https://comunicacaosistemica.com.br' content='Ver Ementa Completa' />
          </div>
      </section>
      <section className='sectionProfessor' id='professor'>
        <div className='boxProfessor'>
          <Professor name='Zeca Santos' description='Com mais de 20 anos atuando como jornalista profissional em renomadas empresas, Glácia Marillac também é escritora, consultora, palestrante, terapeuta familiar, psicanalista e especialista em Estratégias de Comunicação digital. Sempre muito dedicada a tudo o que faz, já realizou trabalhos em diferentes áreas e organizações e ganhou importantes prêmios.  Ao perceber que existia um gap na amorosidade da Comunicação entre as pessoas, Glácia viu que a união da Comunicação Não Violenta e da Constelação Familiar, poderia ser uma estratégica solução. Foi quando conversou com o Especialista em CNV Zeca Santos que também estava debruçado sobre as mesmas questões, o qual sugeriu a inclusão do Mindfullness, para potencializar ainda mais a força resolutiva da Comunicação Sistêmica.' image={zeca} />
          <Professor name='Glacia Marilac' description='Zeca Santos é advogado, ator, cantor, palestrante e pesquisador da ciência do bem-estar. Há 23 anos atuando como servidor do judiciário, sempre uniu seus conhecimentos técnicos com as práticas de autodesenvolvimento humano. Pós-graduado em Psicologia Organizacional e do Trabalho, é especialista em Comunicação Não Violenta e Pós-graduando em Neurociências, psicologia positiva e Mindfullness. Também possui Especialização em Teatro Musical na Royal Scottish Academy of Music -Escócia e está concluindo seu mestrado em Direção de Recursos Humanos pela UCES-Argentina.' image={glacia} reverse={true}/>
        </div>
      </section>
      <section className='sectionCard'>
        <div className='boxSectionCard'>
          <Card >
                <Beneficio content='Lorem ipsum dolor'/>
                <Beneficio content='Lorem ipsum dolor'/>
                <Beneficio content='Lorem ipsum dolor'/>
          </Card>
          <div className='contentSectionCard'>
            <h1>15 Dias de Garantia Integral!</h1>
            <p>Lorem ipsum dolor, consectetur adipiscing elit. id pretium enim, eget convallis tellus. Mauris consequat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing e </p>
            <div className='contentSectionCardButton'>
              <ButtonWhite content='Quero Adquirir Agora' link='https://comunicacaosistemica'/>
            </div>
          </div>
        </div>
      </section>
      <footer className='sectionFooter'>
        <div className='containerFooter'>
          <div className='footerDuvida'>
            <h3>Dúvidas?</h3>
            <p className='footerDuvidaP'>Envie-nos um e-mail pelo endereço</p>
            <p>comunicacaosistemicaoficial@gmail.com</p>
          </div>
          <div className='footerWhatsapp' id='faq'>
            <p>Ou entre em contato pelo Whatsapp</p>
            <a href='https://api.whatsapp.com/send?phone=5584988775828' target='blank'>Entrar em Contato</a>
          </div>
        </div>
      </footer>
      <section className='emConstrucao'>
        <div className='emConstrucaoimg'>
          <img className='logoMobile' src={logo} alt='logo' />
          <img className='mobileNotebook'src={notebook} alt='notebook' />
          <img className='mobileConfig' src={config} alt='configurações' />
        </div>
        <div className='emConstrucaoText'>
          <h1>Em breve,<br/>um site repleto de autoconhecimento<br/>para você.<br/>Aguarde!</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
