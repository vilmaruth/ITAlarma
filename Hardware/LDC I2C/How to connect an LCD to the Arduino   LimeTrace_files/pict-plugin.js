var PictPlugin = {
  api: '//api.pict.com/',
  refName: 'pictref',
  cartCookieName: 'cart',
  myRef: '',
  order_value: 0,
  order_id: '',
  debug: false,
  shopName: '',
  cart: '',
  pload: function() {

    // where are we?
    if (document.URL.indexOf("checkout.shopify.com/orders/") >= 0) {
     
      // we are on the thank you page!
      // get cart id
      //var urlChunks = document.URL.split('/');
      //PictPlugin.cart = urlChunks[urlChunks.length - 1];

      // add 1px image to send order to api
      PictPlugin.sendOrder();

    } else if (PictPlugin.isPICT() && PictPlugin.getCartFromCookie()) {
      // we are on a cart page
      PictPlugin.myRef = PictPlugin.isPICT()
      PictPlugin.cart = PictPlugin.getCartFromCookie();
      PictPlugin.sendCartId();

    } else if (PictPlugin.getPictRef()) {
      // we are on prod page from pict.com
      PictPlugin.myRef = PictPlugin.getPictRef();
      if (PictPlugin.myRef) {
        PictPlugin.setCookie();
      }
    }
  },
  isPICT: function() {
    var nameEQ = PictPlugin.refName + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  },
  getCartFromCookie: function() {
    var nameEQ = PictPlugin.cartCookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  },
  getPictRef: function() {
    return decodeURIComponent((new RegExp('[?|&]' + PictPlugin.refName + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
  },
  setCookie: function() {
    this.console('setting cookie for: ' + this.myRef);

    document.cookie = "pictref="+ this.myRef +"; path=/";
  },
  sendCartId: function() {
    PictPlugin.shopName = Shopify.shop.replace(".myshopify.com","");
    var bodyID = document.getElementsByTagName("body")[0];
    var img = document.createElement('img');
    var apiurl = PictPlugin.api + 'data/pict/shopifyplugincart?shop=' + PictPlugin.shopName + '&pictref=' + PictPlugin.myRef + '&cart=' + PictPlugin.cart;
    img.src = apiurl;
    bodyID.appendChild(img);

  },
  sendOrder: function() {
    PictPlugin.shopName = Shopify.shop.replace(".myshopify.com","");
    //PictPlugin.order_id = encodeURIComponent(document.getElementById('content').getElementsByTagName('strong')[0].innerHTML).replace("%23","");
    PictPlugin.order_id = "none";
    var bodyID = document.getElementsByTagName("body")[0];
    var img = document.createElement('img');
    var apiurl = PictPlugin.api + 'data/pict/shopifypluginorder?shop=' + PictPlugin.shopName + '&order_id=' + PictPlugin.order_id;
    img.src = apiurl;
    bodyID.appendChild(img);

  },
  console: function(msg) {
    if (this.debug)
      console.log("[DEBUG] " + msg);
  }
};

PictPlugin.pload();