import Describtion from '@/Components/asmar sofa/describtion';
import Cart from '@/Components/contact/cart/cart';
import Checkout from '@/Components/contact/checkout';
import Hero from '@/Components/hero/hero';
import Shop from '@/Components/Shop/shop';
import React from 'react';
import Contact from '@/Components/contact/contact';
import Myaccount from '@/Components/myaccount/myaccount';
import Blog from '@/Components/blog/blog';

const App = () => {
  return (
   <div>
<Hero/>
<Shop/>
<Describtion/>
<Myaccount/>
<Checkout/>
<Cart/>
<Contact/>
<Blog/>

   </div>
  );
};

export default App;
