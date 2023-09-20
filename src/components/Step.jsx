export const Step = ({step, classN}) => {
    return (
        <div className="circle-color">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <circle cx="20.6667" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />
            </svg>
            <img src="icons/check-white.svg" alt="" className={`check-white ${classN}`}/>
            <span className="number-green">{step}</span>
        </div>
    )
}