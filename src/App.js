import './App.css';
import udemy from './assets/Camada 3.png'
import notebook from './assets/clay-MBP.png'
import effect from './assets/Camada 1.png'

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
          <iframe width="405" height="240" src="https://www.youtube.com/embed/FDNNHh7TRN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='iframeyt'></iframe>
          <img src={effect} alt='efeito' className='efeito'/>
        </section>
      </div>
    </div>
  );
}

export default App;
