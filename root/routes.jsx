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

import ShopProductListContainer from 'Shop/containers/ShopProductListContainer'
import ShopProductDetailContainer from 'Shop/containers/ShopProductDetailContainer'

import CartContainer from 'Cart/containers/CartContainer'
import CheckoutInfoContainer from 'Checkout/containers/CheckoutInfoContainer'
import CheckoutCompleteContainer from 'Checkout/containers/CheckoutCompleteContainer'

import MemberRegister from 'Member/components/MemberRegister'


const getProductPageTitle = (state, params) => {
  let product = state.products.detail[params.productID];
  return '商品訂購' + ((product && product.data)? ` - ${product.data.name}` : '');
}

const getDepartmentPageTitle = (state, params) => {
  let data = state.products.list.data;
  const {dptID, subDptID} = params;

  if (subDptID) {
    data = data.filter((product) => product.subDpt.includes(parseInt(subDptID)));
  } else {
    data = data.filter((product) => product.dpt.includes(parseInt(dptID)));
  }
  
  let titleStr = '商品訂購'
  if (state.dpts.status == "success") {
    const dpt = state.dpts.data.filter(dpt => dpt.id == dptID)[0];
    const subDpt = (subDptID)? dpt.DptSubs.filter(sd => sd.id == subDptID)[0] : null;
    titleStr += ` - ${dpt.name} ${(subDptID)? ` - ${subDpt.name}` : ''}`;
  }
  return titleStr;
}

export default (
  <Route path="/" component={App}>
    <IndexRoute name="home" component={Home} getTitle={() => ''}/>
    <Route path="shop" component={Shop}>
      <Route path="department/:dptID(/:subDptID)" component={ShopProductListContainer} getTitle={getDepartmentPageTitle}/>
      <Route path="product/:productID" component={ShopProductDetailContainer} getTitle={getProductPageTitle}/>
    </Route>
    <Route path="cart" component={Cart}>
      <IndexRoute component={CartContainer} getTitle={() => '購物車'}/>
    </Route>
    <Route path="member/register" component={MemberRegister} getTitle={() => '會員專區 - 註冊會員'}/>

    <Route path="member" component={Member}>
      <Route path="orders" component={MemberOrderContainer} getTitle={() => '會員專區 - 訂單管理'}/>
    </Route>

    <Route path="checkout" component={Checkout}>
      <Route path="information" component={CheckoutInfoContainer} getTitle={() => '結帳購買 - 結帳資訊'}/>
      <Route path="complete" component={CheckoutCompleteContainer} getTitle={() => '結帳購買 - 結帳完成'}/>
    </Route>
  </Route>
);
