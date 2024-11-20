import './index.scss';

export default function Login () {
  return (
    <div class="centraliza">
        <div class="container">
            <div class="login-box">
                <img src="/assets/images/amitaf.png" alt="Logo" class="logo-amitaf" />
                <h2>Login</h2>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
                <div class="redes-sociais">
                    <img src="https://via.placeholder.com/25" alt="Facebook" />
                    <img src="https://via.placeholder.com/25" alt="Twitter" />
                    <img src="https://via.placeholder.com/25" alt="Google" />
                </div>
                <p>A moda passa,o estilo permanece</p>
            </div>
            <div class="image-box"></div>
        </div>
    </div>
    )
}