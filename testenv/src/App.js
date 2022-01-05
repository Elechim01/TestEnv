import logo from "./logo.svg";
import "./App.css";
import { ListGroup } from "react-bootstrap";

function App() {
  const styleCode = {
    fontFamily: "Consolas,courier new",
    color: "black",
    backgroundColor: "#f1f1f1",
    padding: "3px",
    fontSize: "100%",
  };

  const stylePageD = {
      backgroundColor: "black",
      color: "white"
  }

  const stylePageW= {
    backgroundColor: "white"
  }
  var isWhite = false;

  return (
    <div  className="App"  >
      <h1 style={{padding:"20px"}} >Guida su come implementare <br/> .env in app React JS</h1>
      <p>
        Per inziare bisogna installare un programma che gestisce .env <br /><br />
        <b style={styleCode} >npm install env-cmd</b>
        <br />
        <br />
        In questa guida andremo ad <b> implemntare 2 file  .env </b> <br />
      </p>
      <ListGroup  as="ol" numbered>
        <ListGroup.Item   as="li">
          Per lo svluppo e il testing del app, lo chiameremo local{" "}
        </ListGroup.Item>
        <ListGroup.Item   as="li">
          Per la messa in produzione dell app, lo chiameremo prod{" "}
        </ListGroup.Item>
      </ListGroup>
      <p>
        <br/>
        <b >Per implementare il local:</b>
      </p>

      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          Creiamo un nuovo file nella cartella del <br /> progetto chiamandolo{" "}
          <b>.env.local</b>{" "}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Andiamo nel file <b> package.json</b>{" "}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Cerchiamo la sezione scripts e aggiungiamo:{" "}
        </ListGroup.Item>
      </ListGroup>

    <br/>
      <code style={styleCode}>
        "start:local": "env-cmd -f .env.local react-scripts start",
        <br />
        <br />
        "build:local": "env-cmd -f .env.local react-scripts build"
      </code>

      <p>
        <br /> Per farlo partite invece di usare npm start <br/> <br/> bisogna usare
        :<b> npm run start:local </b>
      </p>
      <hr/>
      <p>
        <b>Per implementare il prod:</b>
      </p>

      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          Creiamo un nuovo file nella cartella del <br /> progetto chiamandolo{" "}
          <b>.env.prod</b>{" "}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Andiamo nel file <b> package.json</b>{" "}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Cerchiamo la sezione scripts e aggiungiamo:{" "}
        </ListGroup.Item>
      </ListGroup>

      <br />
      <code style={styleCode}>
        "start:prod": "env-cmd -f .env.prod react-scripts start",
        <br />
        <br />
        "build:prod": "env-cmd -f .env.prod react-scripts build",
      </code>

      <p>
        {" "}
        <br /> Per farlo partite invece di usare npm start <br/>  <br/> bisogna usare
        :<b> npm run start:prod </b>
      </p>
      <hr />

      <p>
        {" "}
        il progetto è in runnig on{" "}
        <b>
          {process.env.REACT_APP_ENV === "local"
            ? "local host"
            : "www.example.com"}{" "}
        </b>{" "}
        - env{" "}
      </p>
    </div>
  );
}

export default App;

/*
"start:prod": "env-cmd -f .env.prod react-scripts start",
  "start:local": "env-cmd -f .env.local react-scripts start",
        "start:prod": "env-cmd -f .env.prod react-scripts start",
        "build:local": "env-cmd -f .env.local react-scripts build",
        "build:prod": "env-cmd -f .env.prod react-scripts build",
*/
