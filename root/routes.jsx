import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from 'App/pages/App'
import Home from 'Home/pages/Home'

import Shop from 'Shop/pages/Shop'
import Cart from 'Cart/pages/Cart'
import Checkout from 'Checkout/pages/Checkout'
import Member from 'Member/pages/Member'
import MemberInfo from 'Member/pages/MemberInfo'
import MemberOrderContainer from 'Member/containers/MemberOrderContainer'
import MemberEditPersonalDataContainer from 'Member/containers/MemberEditPersonalDataContainer'
import MemberRegister from 'Member/components/MemberRegister'

import ShopProductListContainer from 'Shop/containers/ShopProductListContainer'
import ShopProductDetailContainer from 'Shop/containers/ShopProductDetailContainer'

import CartContainer from 'Cart/containers/CartContainer'
import CheckoutInfoContainer from 'Checkout/containers/CheckoutInfoContainer'
import CheckoutCompleteContainer from 'Checkout/containers/CheckoutCompleteContainer'


function getDepartmentTitle(state, params) {
  let products = state.products.list.data;
  const {dptID, subDptID} = params;
  products = (subDptID)? products.filter(p => p.subDpt.includes(parseInt(subDptID))) : products.filter(p => p.dpt.includes(parseInt(dptID)));
  
  let title;
  if (state.dpts.status == "success") {
    const dpt = state.dpts.data.filter(dpt => dpt.id == dptID)[0];
    const subDpt = (subDptID)? dpt.DptSubs.filter(sd => sd.id == subDptID)[0] : null;
    title = dpt.name + ((subDptID)? ` - ${subDpt.name}` : '');
  }
  return title;
}

function getProductTitle(state, params) {
  let product = state.products.detail[params.productID];
  return (product && product.data) && product.data.name;
}

export default (
  <Route path="/" component={App}>
    <IndexRoute name="home" component={Home}/>
    <Route path="shop" component={Shop} title="商品訂購">
      <Route path="department/:dptID(/:subDptID)" component={ShopProductListContainer} title={getDepartmentTitle}/>
      <Route path="product/:productID" component={ShopProductDetailContainer} title={getProductTitle}/>
    </Route>

    <Route path="cart" component={Cart} title="購物車">
      <IndexRoute component={CartContainer}/>
    </Route>

    <Route path="member" component={Member} title="會員專區">
      <Route path="register" component={MemberRegister} title="註冊會員"/>
      <Route path="edit" component={MemberEditPersonalDataContainer} title="編輯會員資料"/>
      <Route path="orders" component={MemberOrderContainer} title="訂單管理"/>
    </Route>

    <Route path="checkout" component={Checkout} title="結帳購買">
      <Route path="information" component={CheckoutInfoContainer} title="結帳資訊"/>
      <Route path="complete" component={CheckoutCompleteContainer} title="結帳完成"/>
    </Route>
  </Route>
);
