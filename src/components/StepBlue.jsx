export const StepBlue = ({step, number, classN}) => {
    return (
        <div className="circle-color">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
            <circle cx="20.3333" cy="20" r="19" fill="#2C7EF8" stroke="#2C7EF8" strokeWidth="2"/>
            </svg>
            <span className={`number-blue ${classN}`}>{number}</span>
            <span className="text-blue">{step}</span>
        </div>
    )
}