import styles from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import { useRef, useState } from "react"

const MealItemForm = (props) => {
    const amountEnteredRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountEnteredRef.current.value
        const enteredAmountNumber = +enteredAmount

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            return setAmountIsValid(false)
        }

        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountEnteredRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm
