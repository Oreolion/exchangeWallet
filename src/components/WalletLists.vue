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
  flex: 1 1 15rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  cursor: pointer;
}

.imgbox {
  height: 13rem;
  width: 13rem;
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
  max-width: 13rem;
}

@media (max-width: 768px) {
  .imgbox {
    height: 15rem;
    width: 15rem;
  }
  p {
    font-size: 1.7rem;
  }
}

@media (max-width: 480px) {
  .box {
    height: 15rem;
    width: 15rem;
  }
  .imgbox {
    height: 12rem;
    width: 12rem;
  }

  p {
    font-size: 1.5rem;
    max-width: 13rem;

  }
}

@media (max-width: 320px) {
  .box {
    height: 12rem;
    width: 12rem;
  }
  .imgbox {
    height: 8rem;
    width: 8rem;
  }
}
</style>
