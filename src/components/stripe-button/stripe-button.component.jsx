import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IRhc4C6pshHaCpGS1YkVbXNzPET5d19OJxcp5j9zb8ATHUELXtKcwqoMiD75oAUY5bGao7Box0TzlQItTCZ0C9D00FBhgp2t1';
    const onToken = token=> {
        console.log(token);
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;