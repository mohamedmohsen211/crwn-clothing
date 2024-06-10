import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button'

import { PaymentContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        

    }

    return ( 
        <PaymentContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>pay now</Button>
            </FormContainer>
        </PaymentContainer>
    );
}

export default PaymentForm;