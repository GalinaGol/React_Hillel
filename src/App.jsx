import './assets/styles/style.css'
import Progress from "./components/Progress.jsx";
import Alert from "./components/Alert.jsx";
import ListGroup from "./components/ListGroup.jsx";
import BtnGroup from "./components/BtnGroup.jsx";

function App() {

  return (
        <div className="container py-4">
            <div className='row row-cols-2 g-4'>
                <div className="col">
                    <h3>Progress</h3>
                    <div
                        className="ratio ratio-21x9 indigo rounded d-flex align-items-center justify-content-center">
                        <Progress percentage={80} />
                    </div>
                </div>
                <div className="col">
                    <h3>Alert</h3>
                    <div
                        className="ratio ratio-21x9 rounded d-flex align-items-center justify-content-center">
                        <Alert type="warning" text="what is love?" />
                    </div>
                </div>
                <div className="col">
                    <h3>List</h3>
                    <div
                        className="ratio ratio-21x9 green rounded d-flex align-items-center justify-content-center">
                        <ListGroup>
                            <p>Hello</p>
                            <p>World</p>
                        </ListGroup>
                    </div>
                </div>
                <div className="col">
                    <h3>Buttons</h3>
                    <div
                        className=" ratio ratio-21x9 red rounded d-flex align-items-center justify-content-center">
                        <BtnGroup />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default App
