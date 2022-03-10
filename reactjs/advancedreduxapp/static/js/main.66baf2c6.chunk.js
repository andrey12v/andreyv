(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,c){t.exports={item:"CartItem_item__3YHUR",details:"CartItem_details__DIqdR",quantity:"CartItem_quantity__24pmR",price:"CartItem_price__2INkc",itemprice:"CartItem_itemprice__1ttFo",actions:"CartItem_actions__URG7W"}},,,,function(t,e,c){t.exports={item:"ProductItem_item__crp46",price:"ProductItem_price__2hg05",actions:"ProductItem_actions__34ioT"}},function(t,e,c){t.exports={notification:"Notification_notification__24qOn",error:"Notification_error__3oXPA",success:"Notification_success__3JAJA"}},,,function(t,e,c){t.exports={button:"CartButton_button__1MtF8",badge:"CartButton_badge__1sZ4S"}},,function(t,e,c){t.exports={card:"Card_card__s5qQv"}},function(t,e,c){t.exports={cart:"Cart_cart__1quaE"}},function(t,e,c){t.exports={header:"MainHeader_header__2S88E"}},function(t,e,c){t.exports={products:"Products_products__2v5dT"}},,,,,,,,function(t,e,c){},,,function(t,e,c){"use strict";c.r(e);var n=c(7),i=c.n(n),r=c(2),a=c(5),s=Object(a.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),o=s.actions,u=s,d=Object(a.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items},addItemToCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c.id}));t.totalQuantity++,t.changed=!0,n?(n.quantity++,n.totalPrice=n.totalPrice+c.price):t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title})},removeItemFromCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c}));t.totalQuantity--,t.changed=!0,1===n.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(n.quantity--,n.totalPrice=n.totalPrice-n.price)}}}),l=d.actions,j=d,b=Object(a.a)({reducer:{ui:u.reducer,cart:j.reducer}}),p=(c(25),c(1)),f=c(14),h=c.n(f),m=c(0),x=function(t){return Object(m.jsx)("section",{className:"".concat(h.a.card," ").concat(t.className?t.className:""),children:t.children})},O=c(15),_=c.n(O),v=c(4),y=c.n(v),g=function(t){var e=Object(r.b)(),c=t.item,n=c.title,i=c.quantity,a=c.total,s=c.price,o=c.id;return Object(m.jsxs)("li",{className:y.a.item,children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:n}),Object(m.jsxs)("div",{className:y.a.price,children:["$",a.toFixed(2)," ",Object(m.jsxs)("span",{className:y.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(m.jsxs)("div",{className:y.a.details,children:[Object(m.jsxs)("div",{className:y.a.quantity,children:["x ",Object(m.jsx)("span",{children:i})]}),Object(m.jsxs)("div",{className:y.a.actions,children:[Object(m.jsx)("button",{onClick:function(){e(l.removeItemFromCart(o))},children:"-"}),Object(m.jsx)("button",{onClick:function(){e(l.addItemToCart({id:o,title:n,price:s}))},children:"+"})]})]})]})},N=function(t){var e=Object(r.c)((function(t){return t.cart.items}));return Object(m.jsxs)(x,{className:_.a.cart,children:[Object(m.jsx)("h2",{children:"Your Shopping Cart"}),Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(g,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},C=c(12),I=c.n(C),k=function(t){var e=Object(r.b)(),c=Object(r.c)((function(t){return t.cart.totalQuantity}));return Object(m.jsxs)("button",{className:I.a.button,onClick:function(){e(o.toggle())},children:[Object(m.jsx)("span",{children:"My Cart"}),Object(m.jsx)("span",{className:I.a.badge,children:c})]})},w=c(16),q=c.n(w),S=function(t){return Object(m.jsxs)("header",{className:q.a.header,children:[Object(m.jsx)("h1",{children:"ReduxCart"}),Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(k,{})})})})]})},P=function(t){return Object(m.jsxs)(p.Fragment,{children:[Object(m.jsx)(S,{}),Object(m.jsx)("main",{children:t.children})]})},F=c(8),Q=c.n(F),E=function(t){var e=Object(r.b)(),c=t.title,n=t.price,i=t.description,a=t.id;return Object(m.jsx)("li",{className:Q.a.item,children:Object(m.jsxs)(x,{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h3",{children:c}),Object(m.jsxs)("div",{className:Q.a.price,children:["$",n.toFixed(2)]})]}),Object(m.jsx)("p",{children:i}),Object(m.jsx)("div",{className:Q.a.actions,children:Object(m.jsx)("button",{onClick:function(){e(l.addItemToCart({id:a,title:c,price:n}))},children:"Add to Cart"})})]})})},T=c(17),B=c.n(T),J=[{id:"p1",price:6,title:"My First Book",description:"The first book I ever wrote"},{id:"p2",price:5,title:"My Second Book",description:"The second book I ever wrote"}],M=function(t){return Object(m.jsxs)("section",{className:B.a.products,children:[Object(m.jsx)("h2",{children:"Buy your favorite products"}),Object(m.jsx)("ul",{children:J.map((function(t){return Object(m.jsx)(E,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},R=c(9),A=c.n(R),V=function(t){var e="";"error"===t.status&&(e=A.a.error),"success"===t.status&&(e=A.a.success);var c="".concat(A.a.notification," ").concat(e);return Object(m.jsxs)("section",{className:c,children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{children:t.message})]})},U=c(6),$=c(3),H=c.n($),Y=!0;var D=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.ui.cartIsVisible})),c=Object(r.c)((function(t){return t.cart})),n=Object(r.c)((function(t){return t.ui.notification}));return Object(p.useEffect)((function(){t(function(){var t=Object(U.a)(H.a.mark((function t(e){var c,n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(U.a)(H.a.mark((function t(){var e,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-http-6b4a6.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:n=t.sent,e(l.replaceCart({items:n.items||[],totalQuantity:n.totalQuantity})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(o.showNotification({status:"error",title:"Error!",message:"Fetching cart data failed!"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(p.useEffect)((function(){Y?Y=!1:c.changed&&t(function(t){return function(){var e=Object(U.a)(H.a.mark((function e(c){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(o.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),n=function(){var e=Object(U.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-6b4a6.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,n();case 5:c(o.showNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(o.showNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(c))}),[c,t]),Object(m.jsxs)(p.Fragment,{children:[n&&Object(m.jsx)(V,{status:n.status,title:n.title,message:n.message}),Object(m.jsxs)(P,{children:[e&&Object(m.jsx)(N,{}),Object(m.jsx)(M,{})]})]})};i.a.render(Object(m.jsx)(r.a,{store:b,children:Object(m.jsx)(D,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.66baf2c6.chunk.js.map