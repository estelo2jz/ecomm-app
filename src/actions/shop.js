import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCT_WTIH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
  return ({
    type: FILTER_PRODUCTS_WITH_QUERY,
    payload: fields
  })
}

export function filterProductsWithCategoryId(_id) {
  return ({
    type: FILTER_PRODUCT_WTIH_CATEGORY_ID,
    payload: _id
  })
}

export function fetchShopCategories(done) {
  return ({
    type: SET_SHOP_CATEGORIES,
      payload: [
        {
          _id: 0,
          title: 'All',
        },
        {
          _id: 1,
          title: 'JavaScript',
        },
        {
          _id: 2,
          title: 'UI/UX',
        },
        {
          _id: 3,
          title: 'Linux',
        },
        {
          _id: 4,
          title: 'Python',
        },
        {
          _id: 5,
          title: 'UML',
        },
        {
          _id: 6,
          title: 'Ruby',
        },
      ]
  })
}

export function fetchProducts() {
  return ({
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: 'JavaScript in the Browser',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 1.99,
        belongsTo: [0, 1],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 1,
        title: 'Graph Database',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 4.02,
        belongsTo: [0, 1, 6],
          imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 2,
        title: 'Full Stack Development',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 6.03,
        belongsTo: [0, 1, 4],
          imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 3,
        title: 'User Interface Design',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 12.86,
        belongsTo: [0, 2],
          imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 4,
        title: 'JavaScript Development',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 6.33,
        belongsTo: [0, 1],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 5,
        title: 'User Experience Design',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 8.56,
        belongsTo: [0, 2],
          imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 6,
        title: 'Advance OOP',
        description: 'git push origin will push changes from all local branches to matching branches the origin remote. git push origin master will push changes from the local master branch to the remote master branch. git push origin master:staging will push changes from the local master branch to the remote staging branch if it exists.',
        price: 9.55,
        belongsTo: [0, 6],
          imageUrl: 'http://via.placeholder.com/80x80'
      },
    ]
  })
}