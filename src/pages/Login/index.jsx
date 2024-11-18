import './index.scss';

export default function Login() {
  return (
      <div class="container">

        <div class="login-box">
            <img src="https://via.placeholder.com/80" alt="logo-amitaf" class="logo-amitaf"/> 
                <h2>Conta - ADM</h2>
            <input type="text" placeholder="CPF"/>
            <input type="password" placeholder="Senha"/>
            <button>Entrar</button>
            <div class="redes-sociais">
                <img src="https://via.placeholder.com/25" alt="Instagram"/> 
                <img src="https://via.placeholder.com/25" alt="Whatsapp"/>
                <img src="https://via.placeholder.com/25" alt="Facebook"/>
            </div>
            <p>A moda passa, o estilo permanece</p>
        </div>
        <div class="image-box"></div>
    </div>
    )
}