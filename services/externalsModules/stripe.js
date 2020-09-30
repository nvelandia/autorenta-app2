import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(
  'pk_test_51Gr3HzJLMLJITI9DZyz3oQkB9pLy0N42fdYnRwA7agn8OEIHb0kfLnsjQvGfHiKSaE3YWu7nNf2UfZ8fg2nkjsBv009JbIH8IV',
);

let elements = stripe.elements();

// Set up Stripe.js and Elements to use in checkout form
let cardElement = elements.create('card', { style: style });
cardElement.mount('#card-element');

let form = document.getElementById('payment-form');

form.addEventListener('submit', function (event) {
  // We don't want to let default form submission happen here,
  // which would refresh the page.
  event.preventDefault();

  stripe
    .createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        // Include any additional collected billing details.
        name: 'Jenny Rosen',
      },
    })
    .then(stripePaymentMethodHandler);
});

function stripePaymentMethodHandler(result) {
  console.log('stripePaymentMethodHandler__________________');
  console.log(result);
  if (result.error) {
    // Show error in payment form
    console.log('Error');
  } else {
    // Otherwise send paymentMethod.id to your server (see Step 4)
    console.log('Success! Do fetch...');
    fetch('http://localhost:8000/autorenta/api/pays/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payment_method_id: result.paymentMethod.id,
        language: form.elements['language'].value,
        passenger_lastname: form.elements['passenger_lastname'].value,
        reservation: form.elements['reservation'].value,
      }),
    }).then(function (result) {
      // Handle server response (see Step 4)
      console.log('Response status: ' + result.status);
      result.json().then(function (json) {
        handleServerResponse(json.response);
      });
    });
  }
}

function handleServerResponse(response) {
  console.log('handleServerResponse__________________');
  console.log(response);
  if (response.error) {
    // Show error from server on payment form
    console.error('ERROR!!!');
  } else if (response.requires_action) {
    // Use Stripe.js to handle required card action
    stripe.handleCardAction(response.payment_intent_client_secret).then(handleStripeJsResult);
  } else {
    // Show success message
    console.log('SUCCESS!!!');
  }
}

function handleStripeJsResult(result) {
  console.log('handleStripeJsResult__________________');
  console.log(result);
  if (result.error) {
    // Show error in payment form
    console.error('ERROR!!!');
  } else {
    // The card action has been handled
    // The PaymentIntent can be confirmed again on the server
    fetch('http://localhost:8000/autorenta/api/pays/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payment_intent_id: result.paymentIntent.id,
        language: form.elements['language'].value,
        passenger_lastname: form.elements['passenger_lastname'].value,
        reservation: form.elements['reservation'].value,
      }),
    })
      .then(function (confirmResult) {
        return confirmResult.json().response;
      })
      .then(handleServerResponse);
  }
}
