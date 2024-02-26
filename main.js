const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'They are socks',
            image: './assets/images/greensocks.jpg',
            url: 'https://www.vuemastery.com/',
             inventory:100,
             onSale: false,
             details: ['50% cotton', '30% wool', '20% polyster'],
             variants: [
                { id: 2234, color: 'green', image: './assets/images/greensocks.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socksblue.jpg'},
             ],
             sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge'],

        }
    },
methods:
 {
    addToCart() {
        this.cart += 1;
    },
    removeFromCart() {
        if(this.cart >= 0)
        this.cart-= 1;
    },
    updateImage(variantImage) {
        this.image = variantImage;
    }
 }})