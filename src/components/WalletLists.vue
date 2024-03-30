<template>
  <div
    @click="handleRoute(data)"
    class="box"
    v-for="data in walletData"
    :key="data.walletName"
  >
    <div class="imgbox">
      <img :src="data.walletImage" alt="" />
    </div>
    <p class="title">{{ data.walletName }}</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
    walletData: {
    type: Array,
    required: true,
  },
});

const handleRoute = (data) => {
  console.log(data);
  localStorage.setItem("authname", JSON.stringify(data.walletName));

   router.push({
    name: "authenticate-page",
  });
};
</script>

<style scoped>
.box {
  height: 15rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  cursor: pointer;
}

.imgbox {
  height: 19rem;
  width: 19rem;
  margin-bottom: 4rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

p {
  font-size: 2rem;
  text-align: center;
  color: #60aac9;
  font-weight: bold;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .imgbox {
    height: 15rem;
    width: 15rem;
  }
}

p {
  font-size: 1.7rem;
}
</style>
