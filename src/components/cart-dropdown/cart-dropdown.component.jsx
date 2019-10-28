import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));


// import React from 'react';
// import { connect } from 'react-redux';
// // import { createSelector } from 'reselect';
// import { createStructuredSelector } from 'reselect';
// import CustomButton from '../custom-button/custom-button.component';
// import CartItem from '../cart-item/cart-item.component';
// import { selectCartItems } from '../../redux/cart/cart.selectors';

// import './cart-dropdown.styles.scss';

// const CartDropdown = ({ cartItems }) => (
//   <div className='cart-dropdown'>
//     <div className='cart-items'>
//       {cartItems.map(cartItem => (
//         <CartItem key={cartItem.id} item={cartItem} />
//       ))}
//     </div>
//     <CustomButton>GO TO CHECKOUT</CustomButton>
//   </div>
// );

// const mapStateToProps = createStructuredSelector => ({
//   cartItems: selectCartItems
// });

// // const mapStateToProps = (state) => ({
// //   cartItems: selectCartItems(state)
// // });



// // const mapStateToProps = ({ cart: { cartItems } }) => ({
// //   cartItems
// // });

// export default connect(mapStateToProps)(CartDropdown);

// // const CartDropdown = ({ cartItems }) => (
// //   <div className='cart-dropdown'>
// //     <div className='cart-items'>
// //     </div>
// //     <CustomButton>GO TO CHECKOUT</CustomButton>
// //   </div>
// // );

// // export default CartDropdown;

