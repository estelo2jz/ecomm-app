import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 12.12,
        orderNumber: '345dgdfg',
        orderDate: new Date().toDateString(),
        creditCard: '-1235',
        user: {
          name: 'Monica Estrada',
          shippingAddress: '4652 Cylinders South'
        }
      },
      {
        _id: 1,
        total: 12.12,
        orderNumber: '345dgdfg',
        orderDate: new Date().toDateString(),
        creditCard: '-1235',
        user: {
          name: 'Monica Estrada',
          shippingAddress: '4652 Cylinders South'
        }
      },
      {
        _id: 2,
        total: 46.33,
        orderNumber: 'dfgd345',
        orderDate: new Date().toDateString(),
        creditCard: '-7845',
        user: {
          name: 'Daniela Andrade',
          shippingAddress: '6975 Reno West'
        }
      },
      {
        _id: 3,
        total: 23.01,
        orderNumber: '7789dfsfs',
        orderDate: new Date().toDateString(),
        creditCard: '-5784',
        user: {
          name: 'Mike Punce',
          shippingAddress: '8944 Over Drive'
        }
      },
      {
        _id: 4,
        total: 32.12,
        orderNumber: 'dfgd5465',
        orderDate: new Date().toDateString(),
        creditCard: '-7981',
        user: {
          name: 'Michal Buble',
          shippingAddress: '2465 Sunset'
        }
      },
      {
        _id: 5,
        total: 8.07,
        orderNumber: '3435dfgfdgdf',
        orderDate: new Date().toDateString(),
        creditCard: '-6973',
        user: {
          name: 'Steve Irwin',
          shippingAddress: '6548 Buffalo'
        }
      },
      {
        _id: 6,
        total: 45.89,
        orderNumber: 'eet34535',
        orderDate: new Date().toDateString(),
        creditCard: '-1458',
        user: {
          name: 'Jacki Chan',
          shippingAddress: '5876 Mundelien'
        }
      },
      {
        _id: 7,
        total: 12.58,
        orderNumber: 'A00002342',
        orderDate: new Date().toDateString(),
        creditCard: '-4588',
        user: {
          name: 'Jaden Smith',
          shippingAddress: '4654 Rounf Lake'
        }
      },
    ]
  })
};