import './index.scss';

export default function Login () {
  return (
    <div class="centraliza">
        <div class="containerlogin">
            <div class="login-box">
                <img src="/assets/images/amitaf.png" alt="Logo" class="logo-amitaf" />
                <h2>Login</h2>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
                <div class="redes-sociais">
                    <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://facebook.com"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://wa.me"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <p>A moda passa,o estilo permanece</p>
            </div>
            <div class="image-box"></div>
        </div>
    </div>
    )
}