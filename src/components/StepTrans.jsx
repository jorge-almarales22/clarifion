export const StepTrans = ({step, number, classN}) => {
    return (
        <div className="circle-color">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#2C7EF8" strokeWidth="2" />
            </svg>
            <span className={`number-trans ${classN}`} style={{left: "14px"}}>{number}</span>
            <span className="text-green">{step}</span>
        </div>
    )
}