const GoalsSpecific = ({data}) => {

  const contentList = (content) => {
    return (
      <ul key={Math.random()}>
        {content.map(e => 
            <li key={Math.random()}>
              {e.title ?  <i>{e.title}: </i>: null}
              {e.description}
              {e.content ? contentList(e.content) : null}
            </li>
        )}
      </ul>
    )
  }

  return (
    <>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.list ? contentList(data.list) : null}       
        
    </>
  )
}

export default GoalsSpecific