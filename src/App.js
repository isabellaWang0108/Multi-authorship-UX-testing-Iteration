import './App.css';
import Img from './img.jpg'
import Creator from './creatos';


function App() {

  return (
    <div className="container-sm" style={{ maxWidth: 450 }}>
      <div style={{ marginTop: 100 }}></div>
      <h1>Create an Art piece</h1>
      <form>
        <div className="form-group">
          <label>Name your piece</label>
          <input value="Trippy" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly />
        </div>

        <div className="form-group">
          <label>Image: </label>
          <br />
          <img src={Img} alt="imag" />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input value="$100" className="form-control" id="exampleInputPassword1" readOnly />
        </div>

        <div className="form-group">
          <label>Creator(s)</label>
          
          <Creator />

        </div>

      </form>
    </div>
  );
}

export default App;
