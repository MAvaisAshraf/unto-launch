/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'unto-toscano.myshopify.com',
      storefrontAccessToken: '31f2f5a9f93b96427bf3bde77b95d39c',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6911915393211',
          variantId: '40638992810171',
        node: document.getElementById('product-component-1632519451819'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "PT Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa",
          "background-color": "#32664d"
        },
        "background-color": "#377156",
        ":focus": {
          "background-color": "#32664d"
        },
        "border-radius": "12px",
        "padding-left": "45px",
        "padding-right": "45px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false
    },
    "text": {
      "button": "Add to cart"
    },
    "googleFonts": [
      "PT Sans"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "PT Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa",
          "background-color": "#32664d"
        },
        "background-color": "#377156",
        ":focus": {
          "background-color": "#32664d"
        },
        "border-radius": "12px",
        "padding-left": "45px",
        "padding-right": "45px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "googleFonts": [
      "PT Sans"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "PT Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa",
          "background-color": "#32664d"
        },
        "background-color": "#377156",
        ":focus": {
          "background-color": "#32664d"
        },
        "border-radius": "12px"
      },
      "title": {
        "color": "#ffffff"
      },
      "header": {
        "color": "#ffffff"
      },
      "lineItems": {
        "color": "#ffffff"
      },
      "subtotalText": {
        "color": "#ffffff"
      },
      "subtotal": {
        "color": "#ffffff"
      },
      "notice": {
        "color": "#ffffff"
      },
      "currency": {
        "color": "#ffffff"
      },
      "close": {
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "empty": {
        "color": "#ffffff"
      },
      "noteDescription": {
        "color": "#ffffff"
      },
      "discountText": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "discountAmount": {
        "color": "#ffffff"
      },
      "cart": {
        "background-color": "#da8d34"
      },
      "footer": {
        "background-color": "#da8d34"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "PT Sans"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "PT Sans, sans-serif",
        "background-color": "#377156",
        ":hover": {
          "background-color": "#32664d"
        },
        ":focus": {
          "background-color": "#32664d"
        }
      },
      "count": {
        "font-size": "18px",
        "color": "#fafafa",
        ":hover": {
          "color": "#fafafa"
        }
      },
      "iconPath": {
        "fill": "#fafafa"
      }
    },
    "googleFonts": [
      "PT Sans"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#ffffff"
      },
      "title": {
        "color": "#ffffff"
      },
      "price": {
        "color": "#ffffff"
      },
      "fullPrice": {
        "color": "#ffffff"
      },
      "discount": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "quantity": {
        "color": "#ffffff"
      },
      "quantityIncrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityDecrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityInput": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
