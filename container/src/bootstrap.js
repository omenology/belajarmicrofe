import 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartIndex'

const elementCart = document.querySelector('#root-cart')

cartMount(elementCart)
console.log('Container!');
