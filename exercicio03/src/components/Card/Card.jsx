import './Card.css'


function Card({avatar, nome, bio, telefone, email, githubUrl, linkedinUrl, instagramUrl}) {
    return (
        <div className="main">
            <div className="cartao">
            <img src={avatar} alt="Avatar do usuário" />
            <h2>{nome}</h2>
            <p className='descricao'>{bio}</p>
            <p className='numero'>{telefone}</p>
            <p className='email'>{email}</p>
            <a href={githubUrl}><button>Github</button></a>
            <a href={linkedinUrl}><button>LinkedIn</button></a>
            <a href={instagramUrl}><button>Instagram</button></a>
        </div>
        </div>
    )
}

export default Card