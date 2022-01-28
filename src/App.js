import './App.css';
import './style.css';
import myImageSrc from "../src/imageInSrc.png";

function App() {
  return (
    <div style={{ border: "solid 1 black", maxWidth:"100vw" }}>
      <h1 className="title red">Your name here</h1>
      <br/>
      <img src={myImageSrc} alt="gmc src" /> 
      <br/>
      <img src="/imageInPublic.jpg" alt="gmc public" />
      <br/>
      <>
        <video width="320" height="240" controls>
          <source src="/Video/myVideo.mp4" type="video/mp4" />
        </video>
      </>
    </div>
    


  );
}

export default App;
