import { Step } from "./Step"
import { StepBlue } from "./StepBlue"
import { StepTrans } from "./StepTrans"

export const Steps = () => {
   return (
      <div className="group-steps steps-full">
        <Step step="Step 1 : Cart Review"/>
        <Step step="Step 2 : Checkout"/>
        <StepBlue number={3} step="Step 3 : Special Offer"/>
        <StepTrans number={4} step="Step 4 : Confirmation"/>
      </div>
   )
}