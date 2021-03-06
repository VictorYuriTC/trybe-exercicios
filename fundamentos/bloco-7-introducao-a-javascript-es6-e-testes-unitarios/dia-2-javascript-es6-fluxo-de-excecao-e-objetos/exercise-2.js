/*

1. Agora você vai fazer alguns exercícios de fixação.

Complete a função customerInfo() para que seu retorno
seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade,
Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

Note que o parâmetro da função já está sendo passado na chamada da função.

2. Complete a função orderModifier() para que seu retorno seja similar a
"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

Modifique o nome da pessoa compradora.

Modifique o valor total da compra para R$ 50,00.
 */

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = ( orderData ) => {
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701"

  const { name, phoneNumber, address } = order;
  const { deliveryPerson } = orderData.order.delivery;

  return (
    `Olá, ${ deliveryPerson }, entrega para ${ name },
Telefone: ${ phoneNumber }, R. ${ address.street }, Nº: ${ address.number }, AP: ${ address.apartment }.`
  )
}

console.log(customerInfo(order));

const orderModifier = ( orderData ) => {
  // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00

  const { coke } = orderData.order.drinks; 
  const { deliveryPerson } = orderData.order.delivery;
  const { total } = orderData.payment;

  const pizzaTypes = Object.keys(orderData.order.pizza);
  const showPizzaFlavors = pizzaTypes.reduce((allPizzas, pizzaType) => `${allPizzas}, ${pizzaType}`)
  
  return (
    `Olá ${deliveryPerson}, o total do seu pedido de
${showPizzaFlavors} e ${ coke.type }
é ${ total }.`
)}

console.log(orderModifier(order));
