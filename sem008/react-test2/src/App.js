import './App.css';
import Ej1 from './comps/Ej1';
import Ej2Profile from './comps/Ej2Profile';
import Ej2Nav from './comps/Ej2Nav';
import Form from './comps/Form/Form';
import Card from './comps/Ej3/Card';
import Window from './comps/Ej3/Window';

function App() {

  const urlUsrImg = <img src='https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png'/>

  const imgCard = 'https://yoreportero.com/wp-content/uploads/2020/12/Portugal-visa-para-nomadas.jpg'

  return (
    <div className="App">
      {/* <p>Ejercicio 1</p>
      <Ej1 name='Harry Potter' gender='M' born='31/07/1980' house='Gryffindor' description='Harry es descrito con el pelo negro siempre despeinado de su padre, los ojos verdes brillantes de su madre, y una cicatriz con forma de rayo en su frente.'/>
      <div className='divLine'></div>
      <p>Ejercicio 2</p>
      <Ej2Nav img={urlUsrImg} /> */}
      {/* <Ej2Profile name='Bob' img={urlUsrImg} /> */}
      <div className='divLine'></div>
      {/* <p>Marzo 24</p> */}
      {/* <Form /> */}
      <Card country='Portugal' description='Portugal, oficialmente la República Portuguesa en portugués: República Portuguesa; pron. AFI rɛpuβlikɐ puɾtuɣezɐ o ʁɛpuβlikɐ puɾtuɣezɐ; en mirandés: República Pertuesa, es uno de los veintisiete estados soberanos que forman la Unión Europea' image={imgCard}/>
    </div>
  );
}

export default App;
