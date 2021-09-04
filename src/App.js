import './App.css'

import udemy from './assets/Camada 3.png'
import notebook from './assets/clay-MBP.png'
import effect from './assets/Camada 1.png'
import videoAula from './assets/Video Aulas.png'
import suporte from './assets/Suporte.png'
import aulasAoVivo from './assets/Aulas Ao vivo.png'
import eBook from './assets/E-book.png'
import relatorio from './assets/Relatorio.png'
import certificado from './assets/Certificado.png'

import Detalhe from './components/sobre'


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
            <h1>Junte-se a mais de 1.567 alunos que já comprovam a qualidade dos nossos cursos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus.</p>
            <button>Quero Começar Agora</button>
            </div>
            <div className='udemy'>
              <p>Inscreva-se em:</p>
              <img src={udemy} alt='Udemy'/>
            </div>
          </section>
        </header>
        <section className='effectVideo'>
          <img src={notebook} alt='notebook' className='notebook'/>
          <iframe width="409" height="244" src="https://www.youtube.com/embed/FDNNHh7TRN0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen className='iframeyt'></iframe>
          <img src={effect} alt='efeito' className='efeito'/>
        </section>
      </div>
      <section className='sectionSobre'>
        <div className='containerDetalhes'>
          <h1>Como é<br/>a estrutura do curso?</h1>
            <div className="detalhes">
              <Detalhe img={videoAula} alt="Video aula" title="Videoaula" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={suporte} alt="Suporte" title="Suporte" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={aulasAoVivo} alt="aulas ao vivo" title="Aulas Ao Vivo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={eBook} alt="e-book" title="E-book" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={relatorio} alt="Questionario de Auto Avaliação" title="Questionário de Auta Avaliação" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
              <Detalhe img={certificado} alt="certificado" title="Certificado" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pretium enim, eget convallis tellus. Mauris consequat dapibus" />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
