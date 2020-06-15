import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
  AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
  return ({
    type: AUTHENTICATE_USER,
    payload: {
      user: {
        _id: 0,
        name: 'Estelo Abellanosa',
        address: '39238 I live here',
        cartProducts: []
      }
    }
  })
}

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function addCartProduct(product) {
  return ({
    type: ADD_CART_PRODUCT,
    payload: product
  })
}

export function fetchCartProducts() {
  return ({
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id:0,
        product: {
          _id: 0,
          title: 'JavaScript in the Browser',
          description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
          price: 5.99,
          belongsTo: [0, 1],
          imageUrl: 'http://via.placeholder.com/80x80'
        },
        quantity: 2
      },
      {
        _id:1,
        product: {
          _id: 1,
          title: 'Graph Database',
          description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
          price: 4.02,
          belongsTo: [0, 1, 6],
          imageUrl: 'http://via.placeholder.com/80x80'
        },
        quantity: 1
      },
    ]
  })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 122.03,
        orderNumber: '5646sdfs',
        orderDate: new Date().toDateString(),
        creditCard: '-8962',
        user: {
          name: 'Kate Perry',
          shippingAddress: '8422 South Side'
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
          name: 'Jackie Chan',
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
          shippingAddress: '4654 Round Lake'
        }
      },
    ]
  })
};