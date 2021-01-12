import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I8t9VABCOc6JvEOOYKaid3T7k77jwJ9Not7kcADai4P8WxU6pDYTKSrfjrszQKG3PkrX6FrYEKSfhKlOkmdhnpn00qL7XNc2p';
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Attire Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You're total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;