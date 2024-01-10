import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let imgobject = imageData();
  let imgarr = [];

  imgobject.forEach(e => {
    imgarr.push(
      <img src={e.img} alt={`number${e.id}`}/>
    )
  });

  return (
    <section>
      <h1>Gallery for App.jsx</h1>
      <div className="gallery">
        {imgarr}
      </div>
    </section>
  )
}

export default App;

