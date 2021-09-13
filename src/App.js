import './App.css'

import notebook from './assets/clay-MBP.png'
import effect from './assets/ondas.png'
import videoAula from './assets/Video Aulas.png'
import suporte from './assets/Suporte.png'
import aulasAoVivo from './assets/Aulas Ao vivo.png'
import eBook from './assets/E-book.png'
import relatorio from './assets/Relatorio.png'
import certificado from './assets/Certificado.png'
import aprender from './assets/aprender.jpg'
import zeca from './assets/zeca.png'
import glacia from './assets/glacia.png'

import Button from './components/button'
import Detalhe from './components/sobre'
import Professor from './components/professor'
import ButtonWhite from './components/buttonWhite'
import Card from './components/card'
import Beneficio from './components/beneficio'


function App() {
  return (
    <div className="App">
      <div className='flexInitial' >
        <header className='top'>
          <nav>
          <ul>
            <li><a href='#1'>Sobre</a></li>
            <li><a href='#1'>Ministrantes</a></li>
            <li><a href='#1'>Pacotes</a></li>
            <button>Inscreva-se</button>
          </ul>
          </nav>
          <section className='sectionHeader' id='1'>
            <div className='title'>
            <h1>Junte-se a mais de 1.567 alunos que já comprovaram a qualidade dos nossos cursos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus.</p>
            <div className='buttonPosition'>
           <Button link='https://youtube.com' content="Quero Começar Agora" />
            </div>
            </div>
          </section>
        </header>
        <section className='effectVideo'>
          <img src={notebook} alt='notebook' className='notebook'/>
          <iframe width="409" height="244" src="https://www.youtube.com/embed/FDNNHh7TRN0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen className='iframeyt'></iframe>
          <img src={effect} alt='efeito' className='efeito'/>
        </section>
      </div>
      <section className='aprender'>
        <div className='containerAprender'>
          <img src={aprender} alt='O que Vou Aprender com Este Curso?' />
          <div className='titleAprender'>
          <h1>O que Vou Aprender com Este Curso?</h1>
          <ButtonWhite link='http://youtube.com' content='Clique e Descubra' />
          </div>  
        </div>
      </section>
      <section className='sectionSobre'>
      <h1>Como é<br/>a estrutura do curso?</h1>
        <div className='containerDetalhes'>
            <div className="detalhes">
              <Detalhe img={videoAula} alt="Video aula" title="Videoaula" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={suporte} alt="Suporte" title="Suporte" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={aulasAoVivo} alt="aulas ao vivo" title="Aulas Ao Vivo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={eBook} alt="e-book" title="E-book" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={relatorio} alt="Questionario de Auto Avaliação" title="Questionário de Auto Avaliação" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={certificado} alt="certificado" title="Certificado" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
            </div>
            <Button link='https://youtube.com' content='Ver Ementa Completa' />
          </div>
      </section>
      <section className='sectionProfessor'>
        <div className='boxProfessor'>
          <Professor name='Zeca Santos' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus' image={zeca} />
          <Professor name='Glacia Marilac' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus' image={glacia} reverse={true}/>
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
              <ButtonWhite content='Quero Adquirir Agora' link='https://youtube.com'/>
            </div>
          </div>
        </div>
      </section>
      <footer className='sectionFooter'>
        <div className='containerFooter'>
          <div className='footerDuvida'>
            <h3>Dúvidas?</h3>
            <p className='footerDuvidaP'>Envie-nos um e-mail pelo endereço</p>
            <p>suporte@comunicacaosistemica.com.br</p>
          </div>
          <div className='footerWhatsapp'>
            <p>Ou entre em contato pelo Whatsapp</p>
            <a href='https://youtube.com' target='blank'>Entrar em Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
