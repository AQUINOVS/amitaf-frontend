import { Link } from 'react-router-dom';
import './index.scss';
<script src="https://kit.fontawesome.com/0486cc027d.js" crossorigin="anonymous"></script>

export default function App() {
  return (
    <div className="Home">
      <header>
        <a href=""><img src="/assets/images/amitaf.png" alt="" /></a>
        <nav>
          <a href="#principal">PRINCIPAL</a>
          <a href="#servicos">SERVIÇOS</a>
          <a href="#localizacao">LOCALIZAÇÃO</a>
          <a href="#sobre">SOBRE NÓS <i class="fa-solid fa-chevron-down fa-2xs"></i> </a>
          <a href="/login"><img src="/assets/images/login.png" alt="" /></a>
        </nav>
      </header>
      <main id='principal'>
        <img className='mulher' src="/assets/images/mulher.png" alt="" />
        <div className='conteudo'>
          <img className='letreiro' src="/assets/images/letreiro.png" alt="" />
          <img className='logo-amitaf' src="/assets/images/amitaf.png" alt="" />
        </div>
      </main>
      <div id='sobre' className="transicao">
        <h1>Renove sua AUTOESTIMA com amitaf</h1>
      </div>
      <div className="sobre">
        <img src="/assets/images/mulher2.png" alt="" />
        <div className="textos">
          <h1>Sobre nós</h1>
          <p>A empresa Amitaf foi fundada em 2021 para ajudar na autoestima de muitas mulheres, através de procedimentos estéticos, realçando a beleza natural de cada cliente.</p>
          <p>A nossa <span> MISSÃO </span> é trazer soluções no segmento da beleza com alta qualidade, dedicação e respeito.</p>
        </div>
      </div>
      <div id='servicos' className="procedimentos">
        <h1>Nossos procedimentos</h1>
      </div>
      <div className="mudardps">
        <h2>Conheça nossos serviços e procedimentos</h2>
      </div>
      <div className="cards">
        <div className="card">
          <img src="/assets/images/naildesigner.png" alt="" />
          <h1>Nail Designer</h1>
          <p>Especialista em design de unhas, cria decorações e aplica embelezamento com esmaltes e gel</p>
          <button>Agende seu horário</button>
        </div>
        <div className="card">
          <img src="/assets/images/designersombracelha.png" alt="" />
          <h1>Sombrancelha <br /> de henna</h1>
          <p>Sobrancelhas impecáveis, moldadas por especialistas para realçar o formato do seu rosto.</p>
          <button>Agende seu horário</button>
        </div>
        <div className="card">
          <img src="/assets/images/Brownlaminashion.png" alt="" />
          <h1>Brown <br /> laminashion</h1>
          <p>Procedimento ideal para quem possui sobrancelhas rebeldes e quer um design mais harmonioso.</p>
          <button>Agende seu horário</button>
        </div>
        <div className="card">
          <img src="/assets/images/Botoxlabial.png" alt="" />
          <h1>Botox labial</h1>
          <p>Procedimento ideal para quem possui sobrancelhas rebeldes e quer um design mais harmonioso.</p>
          <button>Agende seu horário</button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src="/assets/images/limpezapele.png" alt="" />
          <h1>Limpeza de pele</h1>
          <p>Processo de remoção do excesso de impurezas, manchas e células mortas da pele.</p>
          <button>Agende seu horário</button>
        </div>
        <div className="card">
          <img src="/assets/images/depilacao.png" alt="" />
          <h1>Depilação</h1>
          <p>Seu corpo sem pelos em procedimentos com a qualidade que só nossos profissionais entregam.</p>
          <button>Agende seu horário</button>
        </div>
        <div className="card">
          <img src="/assets/images/hidragloss.png" alt="" />
          <h1>Hidra gloss</h1>
          <p>Tratamento que torna os lábios mais bonitos, hidratados e contribui para um aspecto jovem.</p>
          <button>Agende seu horário</button>
        </div>
        <div className="card">
          <img src="/assets/images/extensaocilios.png" alt="" />
          <h1>Extensão <br /> de cílios</h1>
          <p>Alongamento de cílios realizado com método 100% próprio e de maneira totalmente artesanal.</p>
          <button>Agende seu horário</button>
        </div>
      </div>
      <footer>
        <a href="/"><img src="/assets/images/amitaf.png" alt="" /></a>
        <div className="redessociais">
          <a href="https://instagram.com/amitaf"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://facebook.com/amitaf"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://wa.me"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </footer>
    </div>
  );
}