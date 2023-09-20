import { Step } from "./Step"
import { StepBlue } from "./StepBlue"
import { StepTrans } from "./StepTrans"

export const StepsMin = () => {
   return (
      <div className={`group-steps min-steps`}>
        <Step classN="first_step" step="Cart Review"/>
        <Step classN="second_step" step="Checkout"/>
        <StepBlue classN="three_step" number={3} step="Special Offer"/>
        <StepTrans classN="three_step" number={4} step="Confirmation"/>
      </div>
   )
}