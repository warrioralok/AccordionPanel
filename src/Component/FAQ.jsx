
/* eslint-disable react/prop-types */
const FAQ = ({data , onToggle, isActive}) =>{
    const {question, answer } = data;
    console.log(isActive)
    return(
        <>
        
            <li>
              <div className="accordion-grid">
                <p>{question}</p>
                    <button onClick={onToggle} className={isActive ? 'active-btn' : ''}>{ isActive ? 'Hide' : 'Show'}</button>
              </div>
              <p>{ isActive && answer}</p>
            </li>
        </>
    )
}

export default FAQ;