<template>
  <div id="app">
    <div class="title container">ЗАГОЛОВОК БЛОКА</div>
    <div class="subtitle container">Подзаголовок блока</div>
    <div class="cardblock container">
      <div class="cardblock__item" v-for="(item, index) in items" :key="item.id">
        <div class="cardblock__item__title">
          {{ item.name }}
        </div>

        <div class="cartblock__item__img">
           <img :src="item.url" alt="">
        </div>

        <div class="cardblock__item__description">
          {{ item.description }}
        </div>

        <div class="cardblock__item__price">{{ item.price.toLocaleString('ru') }} РУБ.</div>

        <div v-if="!cart.includes(items[index].id)" class="cardblock__item__button" v-on:click="addToCart(index)">ДОБАВИТЬ В КОРЗИНУ</div>
        <div v-else class="cardblock__item__button cardblock__item__button__active">ДОБАВЛЕНО</div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        ОБЩАЯ СУММА: <span>{{ lastPrice }}</span> руб
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "app",
  data() {
    const data = [
      {
        id: 1,
        name: "Коптильня 10л",
        price: 1200,
        url: require('./assets/bravo-10.png'),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi. ",
      },

      {
        id: 2,
        name: "Коптильня 20л",
        price: 1400,
        url: require('./assets/bravo-20.png'),
        description:
          "Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.",
      },

      {
        id: 3,
        name: "Коптильня 30л",
        price: 1600,
        url: require('./assets/bravo-30.png'),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ",
      },
    ];

    let lastPrice = 0;
    let cart = [];

    return {
      items: data,
      lastPrice: lastPrice,
      cart: cart
    };
  },

  methods: {

    addToCart(index) {

      if(!this.cart.includes(this.items[index].id)) {
        this.cart.push(this.items[index].id);
        this.lastPrice += this.items[index].price;
      }
      
    }


  }
};
</script>
 
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
body {
  font-family: "Roboto", sans-serif;
  background: #e5e5e5;
  box-sizing: border-box;
  margin: 0;
  color: #323232;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.title {
  font-weight: 900;
  line-height: 56px;
  font-style: normal;
  font-size: 48px;
  margin: 100px auto 40px auto;
  text-align: center;
}

.subtitle {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}

.cardblock {
  display: flex;
  gap: 30px;
  margin-top: 80px;
  margin-bottom: 60px;
  align-items: flex-start;
}

.cardblock__item {
  padding: 30px;
  background: #fff;
  width: 360px;
}

.cardblock__item__title {
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
}

.cardblock__item__img {
  background: url('./assets/bravo-10.png');
  height: 100px;
  width: 100px;
}

.cardblock__item__description {
  margin: 30px 0px;
}

.cardblock__item__button {
  margin-top: 30px;
  background: #2cc34f;
  transition: all 1s;
  padding: 18px 0px;
  text-align: center;
  color: #fff;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  border-radius: 3px;
  cursor: pointer;
}

.cardblock__item__button:hover,
.cardblock__item__button__active {
  background: #22943c;
}
.cardblock__item__button__active {
  cursor: default;
}
.cardblock__item__price {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
}

.footer {
  background: #fff;
  padding: 60px 0px;
  color: #000000;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
    margin: 0;
}

.footer span {
  color: red;
}
</style>