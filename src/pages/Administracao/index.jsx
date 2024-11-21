import './index.scss';

export default function administracao() {
    return (
        <div className="containeradm">
            <header>
                <img src="/assets/images/amitaf.png" alt="" />
                <h1>Perfil administrativo</h1>
            </header>
            <main>
                <div className="card">
                    <img src="/assets/images/procedimentos.png" alt="" />
                    <h2>Procedimentos</h2>
                </div>
                <div className="card">
                    <img src="/assets/images/controle.png" alt="" />
                    <h2>Controle de atendimento</h2>
                </div>
            </main>
        </div>
    )
}