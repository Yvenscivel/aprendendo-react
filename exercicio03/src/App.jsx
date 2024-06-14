import Card from './components/Card/Card'
import avatar from './assets/yvens.jpg'
import './styles/global.css'

function App(){
  return(
    <div>
        <Card avatar = {avatar} nome = "Yvens Almeida" bio = "Front-end developer | Computer Science - UFC" email = "Yvensalmeida21@gmail.com" telefone = "+55 (12)9.1234-5678" githubUrl = "https://github.com/Yvenscivel" linkedinUrl = "https://www.linkedin.com/in/yvens-almeida/" instagramUrl = "https://www.instagram.com/yvens_almeida/"/>
    </div>
  )
}

export default App