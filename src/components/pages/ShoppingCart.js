import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization,
  cartReducer,
  setCartCurrency
} from "react-shopping-cart";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";

const { getDefaultLocalization } = cartLocalization;

// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
  color: "Color",
  aroma: "Aroma",
  base: "Base",
  iPadCase: "Sabonete",
  red: "Red",
  green: "Green",
  nivea: "Nívea",
  mel:"Mel",
  lavanda: "Lavanda e Alfazema",
  yellow: "Yellow",
  GBP: "£",
  EUR: "€",
  USD: "$"
};

const iPadPropertiesWithAdditionalCostLocalization = {
  yellow: "Yellow (+{cost, number, CUR})",
  mel: "Mel(+{cost, number, CUR})", 
  lavanda: "Lavanda e Alfazema(+{cost, number, CUR})",
  nivea: "Nivea(+{cost, number, CUR})", 
};

const store = createStore(
  combineReducers({
    cart: cartReducer
    // Your own reducers, sir
  })
);

store.dispatch(setCartCurrency("EUR"));

class App extends PureComponent {
  state = {
    product: {
      name: "Sabonete",
      id: "sabonete",
      path: "/loja/sabonete/",
      properties: {
          
        Base: [
            "Glicerina à Base de Leite de Cabra",
          ],
          Aroma: [
              "Mel",
              "Lavanda e Alfazema",
              "Bebe",
              "Nívea",
            ],      
      
        Extra: [
            {
                additionalCost: {
                  GBP: 1,
                  EUR: 1.5,
                  USD: 3.5
                },
                value: "mel",
               
              },
              {
                additionalCost: {
                  GBP: 1,
                  EUR: 1.5,
                  USD: 3.5
                },
                value: "lavanda",
               
              },
              {
                additionalCost: {
                  GBP: 1,
                  EUR: 1.5,
                  USD: 3.5
                },
                value: "nivea",
               
              }
          ]
        
      },
      propertiesToShowInCart: [ "Extra", "Base", "Aroma",],
      prices: { GBP: 70, EUR: 0, USD: 90 },
      currency: "EUR",
      imageSrc: "./macbook-case-photo.jpeg"
    },
    getProductLocalization: getDefaultLocalization("product", "en", {
      ...iPadCaseLocalization,
      ...iPadPropertiesWithAdditionalCostLocalization
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      "checkoutButton",
      "en",
      iPadCaseLocalization
    ),
    getCartLocalization: getDefaultLocalization(
      "cart",
      "en",
      iPadCaseLocalization
    )
  };

  render() {
    const {
      product,
      getCheckoutButtonLocalization,
      getProductLocalization,
      getCartLocalization
    } = this.state;

    const checkoutButtonElement = (
      <CheckoutButton
        getLocalization={getCheckoutButtonLocalization}
        checkoutURL="/to/my/checkout"
      />
    );
    return (
      <Provider store={store}>
        <div className="container">
          <Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={getProductLocalization}
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={getCartLocalization}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
