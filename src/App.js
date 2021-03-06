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
          <a href='http://ead.esmarn.tjrn.jus.br/course/index.php' target='blank'>Inscreva-se J??!</a>
        </div>
      </header>
      <div className={`${classesBackground}`}></div>
      <div className='headerMargin'></div>
      <section className='inicio'>
        <div className='containerInicio'>
          <div className='contentInicio'>
            <h1>Comunicar ao outro quem Verdadeiramente somos<br/>?? um ato de Coragem, Profunda Aceita????o,<br/>e Auto Amor.</h1>
            <p>A Comunica????o Sist??mica revela a origem dos nossos conflitos, encoraja a expressar nossos sentimentos e necessidades, aprimora nossos relacionamentos, e nos impulsiona a estabelecer do uma conex??o profunda,<br/> sincera e amorosa conosco e com o outro.</p>
            <Button content='Quero me Inscrever J??' link='http://ead.esmarn.tjrn.jus.br/course/index.php'/>
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
          <h1>O Que Vou Aprender com Este Curso?</h1>
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
            <div className='numbered'><p>1.</p><li>Pr??ticas de Aten????o Plena (Mindfulness) para melhorar o manejo das minhas emo????es e sentimentos, al??m de ter mais clareza e autonomia na minha comunica????o. </li></div>
            <div className='numbered'><p>2.</p><li>Transformar meu ???eu cr??tico??? e ???julgador???, em um ???eu??? mais gentil, compassivo e emp??tico, ampliando minha autocompaix??o.</li></div>
            <div className='numbered'><p>3.</p><li>Conhecer e praticar os 04 passos da Comunica????o N??o Violenta-CNV, entendendo minhas reais necessidades a partir de quem eu realmente sou e n??o do que os outros querem que eu seja.</li></div>
            <div className='numbered'><p>4.</p><li>Saber dizer n??o com amorosidade, me libertar de compara????es e da necessidade de estar no controle de tudo.</li></div>
            <div className='numbered'><p>5.</p><li>Lidar com temas dif??ceis e iniciar conversas desafiantes.</li></div>
            <div className='numbered'><p>6.</p><li>Identificar as inten????es que est??o ???por tr??s??? daquilo que o outro quis dizer, escutando para al??m de minhas proje????es.</li></div>
            <div className='numbered'><p>7.</p><li>Entender atrav??s da Constela????o Familiar, as leis sist??micas, as din??micas familiares e o contexto do lugar de fala de cada pessoa, sem exclus??es, nem julgamentos</li></div>
          </ul>
        </div>
      </section>  
        </div>
      </section>
      <section className='sectionSobre'>
      <h1>Como ??<br/>a Estrutura do Curso?</h1>
        <div className='containerDetalhes'>
            <div className="detalhes">
              <Detalhe img={videoAula} alt="Video aula" title="Videoaula" description="Ser??o 40 horas, divididas em 04 m??dulos disponibilizados semanalmente, com conte??do ??gil, consistente e de f??cil entendimento." />
              <Detalhe img={suporte} alt="Suporte" title="Suporte" description="Ser?? ciado um grupo de WhatsApp para d??vidas, sugest??es, al??m do aluno poder se comunicar diretamente com os instrutores." />
              <Detalhe img={aulasAoVivo} alt="aulas ao vivo" title="Aulas Ao Vivo" description="Aprofundamento dos conhecimentos e atividades pr??ticas para integrar conhecimento e pr??tica." />
              <Detalhe img={eBook} alt="e-book" title="E-book" description="Ser?? disponibilizado ao longo do curso com o referencial te??rico-pr??tico necess??rio ?? aplica????o da Comunica????o Sist??mica." />
              <Detalhe img={relatorio} alt="Questionario de Auto Avalia????o" title="Question??rio de Auto Avalia????o" description="Ao final de cada m??dulo, o aluno poder?? se auto avaliar, bem como, observar as melhorias em sua vida di??ria." width={70}/>
              <Detalhe img={certificado} alt="certificado" title="Certificado" description="Ser?? certificado pela ESMARN- Escola da Magistratura do RN, o qual servir?? para progress??o funcional do servidor. " />
            </div>
            <Button show={showPopupEmenta} content='Ver Ementa Completa' />
          </div>
      </section>
      <section className='sectionProfessor' id='professor'>
        <div className='boxProfessor'>
          <Professor name='Zeca Santos' description='Zeca Santos ?? advogado, ator, cantor, palestrante e pesquisador da ci??ncia do bem-estar. H?? 23 anos atuando como servidor do judici??rio, sempre uniu seus conhecimentos t??cnicos com as pr??ticas de autodesenvolvimento humano. P??s-graduado em Psicologia Organizacional e do Trabalho, ?? especialista em Comunica????o N??o Violenta e P??s-graduando em Neuroci??ncias, psicologia positiva e Mindfullness. Tamb??m possui Especializa????o em Teatro Musical na Royal Scottish Academy of Music -Esc??cia e est?? concluindo seu mestrado em Dire????o de Recursos Humanos pela UCES-Argentina.' image={zeca} />
          <Professor name='Glacia Marilac' description='Com mais de 20 anos atuando como jornalista profissional em renomadas empresas, Gl??cia Marillac tamb??m ?? escritora, consultora, palestrante, terapeuta familiar, psicanalista e especialista em Estrat??gias de Comunica????o digital. Sempre muito dedicada a tudo o que faz, j?? realizou trabalhos em diferentes ??reas e organiza????es e ganhou importantes pr??mios.  Ao perceber que existia um gap na amorosidade da Comunica????o entre as pessoas, Gl??cia viu que a uni??o da Comunica????o N??o Violenta e da Constela????o Familiar, poderia ser uma estrat??gica solu????o. Foi quando conversou com o Especialista em CNV Zeca Santos que tamb??m estava debru??ado sobre as mesmas quest??es, o qual sugeriu a inclus??o do Mindfullness, para potencializar ainda mais a for??a resolutiva da Comunica????o Sist??mica.' image={glacia} reverse={true}/>
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
            <h3>D??vidas?</h3>
            <p className='footerDuvidaP'>Envie-nos um e-mail pelo endere??o</p>
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
          <img className='mobileConfig' src={config} alt='configura????es' />
        </div>
        <div className='emConstrucaoText'>
          <h1>Por enquanto,<br/>estamos dispon??veis<br/>apenas para<br/>desktop</h1>
        </div>
      </section>
      <section className={`${classesEmenta}`}>
        <div className={`${classesContainerEmenta}`}>
        <h1>Ementa do Curso</h1>
          <div className='closedEmenta' onClick={()=> hiddenPopupEmenta()}><span></span><span className='rotate1'></span></div>
            <Modulo title='Modulo 01 - Orienta????es Gerais'>
                <Aula aula='Aula 01' content='Conhecendo os instrutores' />
                <Aula aula='Aula 02' content='Estrutura do curso (m??dulos, dura????o, aulas ao vivo, atividades avaliativas, plataforma, suporte)' />
            </Modulo>
            <Modulo title='M??dulo 02 - Comunica????o e Mindfulness (Aten????o plena)' bottom='42px'>
                <Aula aula='Aula 03' content='Aten????o Plena (Mindfullness) para o dia a dia: primeiros passos, benef??cios, desafios, mitos e verdades.' />
                <Aula aula='Aula 04' content='Desligando O Piloto Autom??tico'/>
                <Aula aula='Aula 05' content='Pr??tica 01: Auto Centramento (04 Minutos)'/>
                <Aula aula='Aula 06' content='Pr??tica 02: Exerc??cio de Respira????o (08 Minutos)'/>
                <Aula aula='Aula 07' content='Pr??tica 03: Medita????o do amor universal (10 minutos)'/>
                <Aula aula='Aula 08' content='Pr??tica 04: Escaneamento Corporal (12 minutos)'/>
            </Modulo>
            <Modulo title='M??dulo 03 ??? Comunica????o N??o Violenta & Linguagem.' bottom='42px'>
              <Aula aula='Aula 09' content='Introdu????o ?? Comunica????o: contextualiza????o hist??rica, comunica????o x Linguagem'/>
              <Aula aula='Aula 10' content='Os Axiomas da Comunica????o'/>
              <Aula aula='Aula 11' content='A Comunica????o N??o Violenta - CNV (conceitos, contextualiza????o e refer??ncias).'/>
              <Aula aula='Aula 12' content='Os quatro passos da CNV: Observa????o, Sentimentos, Necessidades e Pedidos.'/>
              <Aula aula='Aula 13' content='A Comunica????o N??o Violenta e os desafios das m??dias socias na atualidade.'/>
            </Modulo>
            <Modulo title='M??dulo 04 ??? Comunica????o Sist??mica'>
              <Aula aula='Aula 14' content='Introdu????o ?? pr??tica da Comunica????o Sist??mica (conceitos, contextualiza????o, refer??ncias)'/>
              <Aula aula='Aula 15' content='A Constela????o familiar.'/>
              <Aula aula='Aula 16' content='As leis do amor e as ordens da ajuda.'/>
              <Aula aula='Aula 17' content='As pr??ticas sist??micas como poss??vel caminho para atua????o dos profissionais jur??dicos'/>            
            </Modulo>
        </div>
      </section>
    </div>
  );
}

export default App;
