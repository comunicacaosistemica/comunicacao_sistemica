import './App.css'

import {Link} from 'react-scroll'
import { useState } from 'react'

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
import Modulo from './components/modulo'
import Aula from './components/aula'



function App() {
  const [classes, setClasses]=useState('popupAprender hiddenPopup')
  const [classesBackground, setClassesBackground] = useState('hiddenBackground')
  const [classesEmenta, setClassesEmenta] = useState('hiddenEmenta')
  const [classesContainerEmenta, setClassesContainerEmenta] = useState('hiddenContainerEmenta')

  function hiddenClass() {
   setClasses('popupAprender hiddenPopup')
   setClassesBackground('backgroundEscuro hiddenBackground')
  }

  function showClass() {
    setClasses('popupAprender')
    setClassesBackground('backgroundEscuro')
  }

  function showPopupEmenta(){
    setClassesEmenta('ementa')
    setClassesBackground('backgroundEscuro')
    setClassesContainerEmenta('containerEmenta')
  }

  function hiddenPopupEmenta(){
    setClassesEmenta('ementa hiddenEmenta')
    setClassesBackground('backgroundEscuro hiddenBackground')
    setClassesContainerEmenta('hiddenContainerEmenta')
  }

  return (
    <div className="App">
      <header>
        <div className='containerHeader'>
          <div className='containerImgNav'>
          <img src={logo} alt='logo' />
          <ul>
            <li><Link to='sobre' smooth={true} offset={-110}>Sobre</Link></li>
            <li><Link to='professor' smooth={true} offset={-110}>Ministrantes</Link></li>
            <li><Link >Investimento</Link></li>
            <li><Link to='faq' smooth={true} offset={-110}>FAQ</Link></li>
          </ul>
          </div>
          <a href='http://ead.esmarn.tjrn.jus.br/course/index.php' target='blank'>Inscreva-se Já!</a>
        </div>
      </header>
      <div className={`${classesBackground}`}></div>
      <div className='headerMargin'></div>
      <section className='inicio'>
        <div className='containerInicio'>
          <div className='contentInicio'>
            <h1>Comunicar ao outro quem Verdadeiramente somos<br/>é um ato de Coragem, Profunda Aceitação,<br/>e Auto Amor.</h1>
            <p>A Comunicação Sistêmica revela a origem dos nossos conflitos, encoraja a expressar nossos sentimentos e necessidades, aprimora nossos relacionamentos, e nos impulsiona a estabelecer do uma conexão profunda,<br/> sincera e amorosa conosco e com o outro.</p>
            <Button content='Quero me Inscrever Já' link='http://ead.esmarn.tjrn.jus.br/course/index.php'/>
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
          <ButtonWhite content='Clique Aqui e Descubra' onClicar={showClass}/>
          </div>
          <section className={`${classes}`}>
            <div className='closed' onClick= {()=>hiddenClass()}>
            <span className='rotate1'></span>
            <span></span>
            </div>
        <div className='containerPopupAprender'>
          <h1>O que vou aprender</h1>
          <ul>
            <div className='numbered'><p>1.</p><li>Práticas de Atenção Plena (Mindfulness) para melhorar o manejo das minhas emoções e sentimentos, além de ter mais clareza e autonomia na minha comunicação. </li></div>
            <div className='numbered'><p>2.</p><li>Transformar meu “eu crítico” e “julgador”, em um “eu” mais gentil, compassivo e empático, ampliando minha autocompaixão.</li></div>
            <div className='numbered'><p>3.</p><li>Conhecer e praticar os 04 passos da Comunicação Não Violenta-CNV, entendendo minhas reais necessidades a partir de quem eu realmente sou e não do que os outros querem que eu seja.</li></div>
            <div className='numbered'><p>4.</p><li>Saber dizer não com amorosidade, me libertar de comparações e da necessidade de estar no controle de tudo.</li></div>
            <div className='numbered'><p>5.</p><li>Lidar com temas difíceis e iniciar conversas desafiantes.</li></div>
            <div className='numbered'><p>6.</p><li>Identificar as intenções que estão “por trás” daquilo que o outro quis dizer, escutando para além de minhas projeções.</li></div>
            <div className='numbered'><p>7.</p><li>Entender através da Constelação Familiar, as leis sistêmicas, as dinâmicas familiares e o contexto do lugar de fala de cada pessoa, sem exclusões, nem julgamentos</li></div>
          </ul>
        </div>
      </section>  
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
            <Button show={showPopupEmenta} content='Ver Ementa Completa' />
          </div>
      </section>
      <section className='sectionProfessor' id='professor'>
        <div className='boxProfessor'>
          <Professor name='Zeca Santos' description='Zeca Santos é advogado, ator, cantor, palestrante e pesquisador da ciência do bem-estar. Há 23 anos atuando como servidor do judiciário, sempre uniu seus conhecimentos técnicos com as práticas de autodesenvolvimento humano. Pós-graduado em Psicologia Organizacional e do Trabalho, é especialista em Comunicação Não Violenta e Pós-graduando em Neurociências, psicologia positiva e Mindfullness. Também possui Especialização em Teatro Musical na Royal Scottish Academy of Music -Escócia e está concluindo seu mestrado em Direção de Recursos Humanos pela UCES-Argentina.' image={zeca} />
          <Professor name='Glacia Marilac' description='Com mais de 20 anos atuando como jornalista profissional em renomadas empresas, Glácia Marillac também é escritora, consultora, palestrante, terapeuta familiar, psicanalista e especialista em Estratégias de Comunicação digital. Sempre muito dedicada a tudo o que faz, já realizou trabalhos em diferentes áreas e organizações e ganhou importantes prêmios.  Ao perceber que existia um gap na amorosidade da Comunicação entre as pessoas, Glácia viu que a união da Comunicação Não Violenta e da Constelação Familiar, poderia ser uma estratégica solução. Foi quando conversou com o Especialista em CNV Zeca Santos que também estava debruçado sobre as mesmas questões, o qual sugeriu a inclusão do Mindfullness, para potencializar ainda mais a força resolutiva da Comunicação Sistêmica.' image={glacia} reverse={true}/>
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
          <h1>Por enquanto,<br/>estamos disponíveis<br/>apenas para<br/>desktop</h1>
        </div>
      </section>
      <section className={`${classesEmenta}`}>
        <div className={`${classesContainerEmenta}`}>
          <div className='closedEmenta' onClick={()=> hiddenPopupEmenta()}><span></span><span className='rotate1'></span></div>
            <Modulo title='Modulo 01 - Orientações Gerais'>
                <Aula aula='Aula 01' content='Conhecendo os instrutores' />
                <Aula aula='Aula 02' content='Estrutura do curso (módulos, duração, aulas ao vivo, atividades avaliativas, plataforma, suporte)' />
            </Modulo>
            <Modulo title='Módulo 02 - Comunicação e Mindfulness (Atenção plena)'>
                <Aula aula='Aula 03' content='Atenção Plena (Mindfullness) para o dia a dia: primeiros passos, benefícios, desafios, mitos e verdades.' />
                <Aula aula='Aula 04' content='Desligando O Piloto Automático'/>
                <Aula aula='Aula 05' content='Prática 01: Auto Centramento (04 Minutos)'/>
                <Aula aula='Aula 06' content='Prática 02: Exercício de Respiração (08 Minutos)'/>
                <Aula aula='Aula 07' content='Prática 03: Meditação do amor universal (10 minutos)'/>
                <Aula aula='Aula 08' content='Prática 04: Escaneamento Corporal (12 minutos)'/>
            </Modulo>
            <Modulo title='Módulo 03 – Comunicação Não Violenta & Linguagem.'>
              <Aula aula='Aula 09' content='Introdução à Comunicação: contextualização histórica, comunicação x Linguagem'/>
              <Aula aula='Aula 10' content='Os Axiomas da Comunicação'/>
              <Aula aula='Aula 11' content='A Comunicação Não Violenta - CNV (conceitos, contextualização e referências).'/>
              <Aula aula='Aula 12' content='Os quatro passos da CNV: Observação, Sentimentos, Necessidades e Pedidos.'/>
              <Aula aula='Aula 13' content='A Comunicação Não Violenta e os desafios das mídias socias na atualidade.'/>
            </Modulo>
            <Modulo title='Módulo 04 – Comunicação Sistêmica'>
              <Aula aula='Aula 14' content='Introdução à prática da Comunicação Sistêmica (conceitos, contextualização, referências)'/>
              <Aula aula='Aula 15' content='A Constelação familiar.'/>
              <Aula aula='Aula 16' content='As leis do amor e as ordens da ajuda.'/>
              <Aula aula='Aula 17' content='As práticas sistêmicas como possível caminho para atuação dos profissionais jurídicos'/>            
            </Modulo>
        </div>
      </section>
    </div>
  );
}

export default App;
