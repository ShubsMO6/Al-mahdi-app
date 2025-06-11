import * as Stripe from "@stripe/stripe-react-native";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";

export const StripeProvider: React.FC<{
  publishableKey: string;
  children: JSX.Element | JSX.Element[];
}> = ({ publishableKey, children }) => {
  return (
    <Stripe.StripeProvider publishableKey={'pk_live_51RWODaGKKZSVyWUMzuW3G43Jwmd3efrWfJAeMkx4YIMecsK17Or6Om86GyRv17apuKfDFvMqZ8xPYFt5scPemNIS006A4YgQaC'}>
      {children}
    </Stripe.StripeProvider>
  );
};

export { initPaymentSheet, presentPaymentSheet };
