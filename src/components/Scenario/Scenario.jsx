import {useEffect, useState} from 'react'
import ScenarioStart from './ScenarioStart'
import ScenarioFinal from './ScenarioFinal'

import ScenarioChoice from './ScenarioChoice'
import { redirect, useLoaderData } from 'react-router-dom'
import { createStatus, updateStatus, getStatus, getScenarioAndStatus, resetScenario } from '../../services/scenarios'

export async function loader({params}){
  const data = await getScenarioAndStatus(params.id)
  return {data}
}

function Scenario() {

  const {data} = useLoaderData()
  const [scenario, setScenario] = useState(0)
  const [walkthrough, setWalkthrough] = useState(null)
  const [step, setStep] = useState(0)
  const [scenarioCompleted, setScenarioCompleted] = useState(false)


  //on page load, get the saved status
  useEffect(() => {
    //get the status
    if(data){
      setScenario(data.scenario)
      setWalkthrough(data.walkthrough)
      if(data.status){
        setStep(data.status.step)
        setScenarioCompleted(data.status.scenarioCompleted)
      }else{
        setStep(0)
        setScenarioCompleted(false)
      }
    }
  }, [data])

  function handleCompleteStep(choice, feedback) {
    const answers = {step, choice, feedback}
    const currentStep = step + 1
    
    
    if(step === scenario.steps.length -1){
      setStep(0)
      setScenarioCompleted(true)
      updateStatus(scenario.id, answers, 0, true);
    }else{
      setStep(currentStep)
      updateStatus(scenario.id, answers, currentStep, false);
    }
    

  }
 
  const handleStart = (fullname, email) => {
    setStep(step + 1)
    createStatus(fullname, email, scenario.id);
  }

  const handleReset = () => {
    setStep(0)
    setScenarioCompleted(false)
    resetScenario(scenario.id);
    redirect('/scenarios')
  }

  return (
    <>
      {scenario === 0 ? <h1>Loading...</h1> : <h1>{scenario.title}</h1>}
      {step === 0 && !scenarioCompleted ? 
        <ScenarioStart 
            description={scenario.description} 
            walkthrough={walkthrough} 
            onClickStart={handleStart} /> 
        : null}

      {scenarioCompleted ? <ScenarioFinal id={scenario.id} final={scenario.final}  onReset={handleReset}/> : null} 
      
      {step > 0 && step <= scenario.steps.length ? 
        <ScenarioChoice 
          step={scenario.steps[step]} 
          onComplete={handleCompleteStep} 
          onReset={handleReset}
          /> : null}
      
    </>
    // <Accordion alwaysOpen>
    //   <Accordion.Item eventKey={scenario.id}>
    //       <Accordion.Header>{scenario.title}</Accordion.Header>
    //         <Accordion.Body>
            

    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
  )
}

export default Scenario