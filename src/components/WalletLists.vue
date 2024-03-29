<template>
  <div class="box" v-for="data in walletData" :key="data.walletName">
    <div class="imgbox">
      <img :src="data.walletImage" alt="" />
    </div>
    <p class="title">{{ data.walletName }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  walletData: [
    {
      String,
      String,
    },
  ],
});
</script>

<style scoped>
.box {
  height: 15rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
}

.imgbox {
  height: 14rem;
  width: 14rem;
  margin-bottom: 1rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

p {
  font-size: 2rem;
  text-align: center;
}
</style>
