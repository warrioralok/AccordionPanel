
/* eslint-disable react/prop-types */
const FAQ = ({data , onToggle}) =>{
    const {question, answer  , isActive} = data;
    return(
        <>
        
            <li>
              <div className="accordion-grid">
                <p>{question}</p>
                <button onClick={onToggle}>{isActive ? 'Show' : 'Hide'}</button>
              </div>
              <p>{ isActive && answer}</p>
            </li>
        </>
    )
}

export default FAQ;