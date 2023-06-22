import React from 'react'
import YoutubeVideo from './YoutubeVideo';
import {useState, useEffect} from 'react'
import {getAnswers} from '../../services/scenarios'

const ScenarioFinal = ({id, final, onReset}) => {

  const [answers,setAnswers] = useState() 

  useEffect(() => {

      getAnswers(id).then(
        (answers) => {
          setAnswers(answers)
        }

      )

  }, [id])



  return (
    <>
        <div className="row">
          <div className="col-12">
            {/* <h2>Volledig scenario</h2> */}
            <YoutubeVideo videoId={final.videoId} />
          </div>
          {final.paragraphs.map((p, i) => (
            <div className="col-12" key={i}>
              <p>{p}</p>
            </div>
          ))}

          {final.links.map((l, i) => (
            <div className="col-12" key={i}>
              
              {l.title}: <a href={l.url} target="_blank" rel={"external noreferrer"}>{l.url}</a> 
            </div>
          ))}
        </div>
        <br></br>
        <div className="row">
            <div className="col-12">
            <h4>Jouw antwoorden:</h4>
            <ul>{answers ? answers.map((a, i) => (
              <li className="col-12" key={i}>
                <p>Stap {a.step}: Keuze {a.choice} - {a.feedback}</p>
              </li>
            )) : null}</ul>
            </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-danger" onClick={onReset}>Reset scenario</button>
          </div>
        </div>
    </>
  )
}

export default ScenarioFinal