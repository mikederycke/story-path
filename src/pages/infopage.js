import React, {useState} from 'react'
import Exercise from '../components/exercise'
import InfoSection from '../components/infoSection'
//data
import pathdata from "../data/pathdata.json"
import Accordion from 'react-bootstrap/Accordion'
import ExerciseFeedback from '../components/exerciseFeedback'

function InfoPage() {

  const [info, setInfo] = useState(pathdata)
  const [currentExercise, setCurrentExercise] = useState(pathdata.exercises[0])

  function handleExerciseFinish(){
    setCurrentExercise({...currentExercise, finished: true})
    setInfo({...info, exercises: info.exercises.map(e => e.id === currentExercise.id ? {...e, finished: true} : e) })
  }

  let content = false
  if(currentExercise.finished){
    content = <ExerciseFeedback ex={currentExercise}/>
  }else{
    content = <Exercise ex={currentExercise} onClick={handleExerciseFinish}/>
  }

  return (
    <div className='container'>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        <hr></hr>
        <Accordion defaultActiveKey="0">
          <InfoSection {...info.goals}/>
          <InfoSection {...info.theory}/>
        </Accordion>
        
        <hr></hr>
        <h2>Exercises</h2>
        {/* choice of 6 scenes, represented by 6 buttons */}
        <div className="row">
          <p>You can choose your scenario here</p>
          {info.exercises.map(e =>
            <div className="col-2">
              <button 
                className={`btn ${e.finished ? "btn-success" : "btn-primary"}`} 
                onClick={() => setCurrentExercise(e)}>{e.title}
              </button>
            </div>
          )}
        </div>
        <br></br>
        {/* the current scene */}
        <Accordion alwaysOpen>
          {content}
        </Accordion>
        
        <hr></hr>
        <br></br>
        <div className="row">
          <div className="col-6">
          <div class="float-right">
            <img src="https://www.hogent.be/themes/hogent/assets/images/HOGENT_Logo.png" alt="logo" />
           
            </div>
            
          </div>
          <div className="col-6">
            <img src="https://www.erasmushogeschool.be/themes/custom/ehb/logo.svg" alt="logo" />
            <div>
              <p>Erasmushogeschool Brussel</p>
              
            </div>
          </div>
        </div>
          
    </div>
  )
}

export default InfoPage