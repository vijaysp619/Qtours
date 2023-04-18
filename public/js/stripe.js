/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51MbyUrSDELoG6W5gsTyG8Brrq9AFUaKqUaGy5VPNPyHVNX5Qy1Ova63JJpO5TeE0a31IIwEd6PCt1AdL8hhFeYDL00BH1IE8xo');

export const bookTour = async tourId => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // Checkout form
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
