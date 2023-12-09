import { HiCreditCard, HiCurrencyDollar, HiGift } from "react-icons/hi2";
import ButtonOrder from "../../ui/ButtonOrder";

function OrderForm() {
  return (
    <div class="checkout_bill">
      <header class="checkout-header">
        <h1 class="checkout-title">Checkout</h1>
      </header>

      <form class="form checkoutForm">
        <div class="shipping__bill"></div>
        <h3 class="">Address</h3>

        <div class="form-div">
          <input type="text" name="city" id="city" placeholder="City" />
          <input type="text" name="address" id="address" placeholder="Addess" />
          <input type="text" name="zip" id="zip" placeholder="Zip Code" />
        </div>

        <fieldset>
          <legend class="form__legend">Payment Method</legend>

          <div class="form__radios">
            <div class="form__radio">
              <label for="visa">
                <HiCreditCard /> Visa Payment
              </label>
              <input id="visa" name="payment-method" type="radio" disabled />
            </div>

            <div class="form__radio">
              <label for="paypal">
                <HiCurrencyDollar />
                PayPal
              </label>
              <input id="paypal" name="payment-method" type="radio" disabled />
            </div>

            <div class="form__radio">
              <label for="cod">
                <HiGift /> Cash On Delivery
              </label>
              <input id="cod" name="payment-method" type="radio" checked />
            </div>
          </div>
        </fieldset>

        <div className="flex justify-end">
          <ButtonOrder>Buy Now</ButtonOrder>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
