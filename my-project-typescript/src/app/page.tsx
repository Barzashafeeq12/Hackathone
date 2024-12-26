import Description from '@/components/AsmarSofa/Describtion';
import Cart from '@/components/Contact/Cart/Cart';
import Checkout from '@/components/Contact/Checkout';
import Hero from '@/components/Hero/Hero';
import Shop from '@/components/Shop/Shop';
import React from 'react';
import Contact from '@/components/Contact/Contact';
import MyAccount from '@/components/MyAccount/MyAccount';
import Blog from '@/components/Blog/Blog';

const App = () => {
  return (
   <div>
<Hero/>
<Shop/>
<Description/>
<MyAccount/>
<Checkout/>
<Cart/>
<Contact/>
<Blog/>

   </div>
  );
};

export default App;
