import React from 'react'
import YoutubeVideo from './YoutubeVideo';
import Accordion from 'react-bootstrap/Accordion'

const ExerciseFeedback = ({step, answer, choice,  onComplete}) => {

  return (
    <>
        <div className="row">
          <div className="col-12">
            <p>Stap {step.step} antwoord: {choice}: {answer}</p>
          </div>
        </div>

    
        <div className="row">
          <div className="col-12">
          <h2>Feedback</h2>
          </div>
          <div className="col-6">
            <p>{step.titleChoiceA}</p>
            <YoutubeVideo videoId={step.videoIdChoiceA} />
            <p>{step.feedbackA.explanation}</p>
          </div>
          <div className="col-6">
            <p>{step.titleChoiceB}</p>
            <YoutubeVideo videoId={step.videoIdChoiceB} />
            <p>{step.feedbackB.explanation}</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => onComplete(choice, answer)}>
            Volgende stap
        </button>
    </>
  );
};


export default ExerciseFeedback