import Card from './components/Card/Card'
import theBoys from './assets/boys.jpg'
import invencivel from './assets/invencivel.jpg'
import './styles/global.css'

function App() {
  return (
    <div>
      <Card titulo="The Boys (2019)" poster={theBoys} link = "https://www.primevideo.com/detail/0SSV1CIYHPUKDFUE5JOYRDKF06/ref=atv_hm_hom_c_cjm7wb_2_1?jic=8%7CEgNhbGw%3D"/>

      <Card titulo="Invencível (2021)" poster={invencivel} link ="https://www.primevideo.com/detail/0KRK7IABRYDORGPDYP1XO3OT0Q/ref=atv_hm_hom_c_cjm7wb_2_3?jic=8%7CEgNhbGw%3D"/>


      <Card titulo="Nova serie" />
    </div>
  )
}

export default App