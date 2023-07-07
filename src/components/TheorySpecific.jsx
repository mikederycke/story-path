
const TheorySpecific = ({data}) => {

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

        {data.list.map(e =>
          <div key={e.block}>
            <h4>{e.title}</h4>
                {contentList(e.content)}
          </div>
        )}
    </>
  )
}

export default TheorySpecific