<template>
  <section>
    <nav>
      <div class="leftnav">
        <div>GITHUB</div>
        <div>DOCS</div>
      </div>
      <div class="midnav">
        <div class="nav__img">
          <img
            src="../assets/wallets/spaces_-LJJeCjcLrr53DcT1Ml7_avatar-150x150.png"
            alt=""
          />
        </div>
      </div>
      <div class="rightnav">
        <div>WALLETS</div>
        <div>APPS</div>
      </div>
    </nav>
    <h1>Choose your wallet</h1>
    <main class="box__container">
      <WalletLists :walletData="walletData"></WalletLists>
    </main>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import WalletLists from "./WalletLists.vue";

const walletData = reactive([
  {
    walletImage: "",
    walletName: "Multicoin",
  },
  {
    walletImage: "",
    walletName: "BlockChain Wallet",
  },
  {
    walletImage: "",
    walletName: "Ledger",
  },
  {
    walletImage: "",
    walletName: "TrustWallet",
  },
  {
    walletImage: "src/assets/wallets/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96-150x150.jpg",
    walletName: "Metamask",
  },
  {
    walletImage: "",
    walletName: "Zelcore",
  },
  {
    walletImage: "",
    walletName: "XDC Wallet",
  },
  {
    walletImage: "",
    walletName: "Rainbow",
  },
  {
    walletImage:
      "src/assets/wallets/8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad-150x150.jpg",
    walletName: "Ownbit",
  },
  {
    walletImage: "src/assets/wallets/b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c-150x150.jpg",
    walletName: "Vision",
  },
  {
    walletImage: "src/assets/wallets/185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a-150x150.jpg",
    walletName: "Atomic",
  },
  {
    walletImage: "src/assets/wallets/b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e-150x150.jpg",
    walletName: "Coin98",
  },
  {
    walletImage: "",
    walletName: "Crypto.com | DeFi Wallet",
  },
  {
    walletImage:
      "src/assets/wallets/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26-150x150.jpg",
    walletName: "MathWallet",
  },
  {
    walletImage: "",
    walletName: "Morix Wallet",
  },
  {
    walletImage:
      "\src\assets\wallets\0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150-150x150.jpg",
    walletName: "SafePal",
  },
  {
    walletImage:
      "src/assets/wallets/3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1-150x150.jpg",
    walletName: "SparkPoint",
  },
  {
    walletImage:
      "src/assets/wallets/7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd-150x150.jpg",
    walletName: "Unstoppable Wallet",
  },
  {
    walletImage:
      "src/assets/wallets/38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b-150x150.jpg",
    walletName: "PeakDeFi Wallet",
  },
  {
    walletImage:
      "src/assets/wallets/802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f-150x150.jpg",
    walletName: "Infinity Wallet",
  },
  {
    walletImage:
      "src/assets/wallets/71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d.jpg",
    walletName: "Autherium",
  },
  {
    walletImage:
      "src/assets/wallets/244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c.jpg",
    walletName: "Easy Pocket",
  },
  {
    walletImage:
      "src/assets/wallets/1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719.jpg",
    walletName: "Midas Wallet",
  },
  {
    walletImage: "",
    walletName: "Walleth",
  },
  {
    walletImage: "",
    walletName: "Onto",
  },
  {
    walletImage: "",
    walletName: "Meet.One",
  },
  {
    walletImage:
      "src/assets/wallets/6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702-150x150.jpg",
    walletName: "GridPlus",
  },
  {
    walletImage: "",
    walletName: "Infinito",
  },
  {
    walletImage: "",
    walletName: "Dok Wallet",
  },
  {
    walletImage: "",
    walletName: "TronLink",
  },
  {
    walletImage: "src/assets/wallets/9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814-150x150.jpg",
    walletName: "Coinomi",
  },
  {
    walletImage: "",
    walletName: "MyEtherWallet",
  },
  {
    walletImage: "src/assets/wallets/argent-150x150.jpg",
    walletName: "Argent",
  },
  {
    walletImage: "",
    walletName: "Coinbase",
  },
  {
    walletImage:
      "src/assets/wallets/42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106-150x150.jpg",
    walletName: "Bitkeep",
  },
  {
    walletImage:
      "src/assets/wallets/61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e-150x150.jpg",
    walletName: "MyKey",
  },
  {
    walletImage:
      "src/assets/wallets/176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b-150x150.jpg",
    walletName: "Wallet.io",
  },
  {
    walletImage:
      "src/assets/wallets/1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d-150x150.jpg",
    walletName: "Cool Wallet S",
  },
  {
    walletImage: "",
    walletName: "Eidoo",
  },
  {
    walletImage: "src/assets/wallets/881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb-150x150.jpg",
    walletName: "Bridge Wallet",
  },
  {
    walletImage: "src/assets/wallets/c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0-150x150.jpg",
    walletName: "Tokenary",
  },
  {
    walletImage:
      "src/assets/wallets/3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5-150x150.jpg",
    walletName: "AT.Wallet",
  },
  {
    walletImage: "",
    walletName: "Harmony",
  },
  {
    walletImage: "",
    walletName: "Stellar",
  },
  {
    walletImage: "src/assets/wallets/beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693-150x150.jpg",
    walletName: "Alice",
  },
  {
    walletImage: "",
    walletName: "Gnosis Safe",
  },
  {
    walletImage: "",
    walletName: "Solana",
  },
  {
    walletImage: "src/assets/wallets/6a1JUkC-150x150.png",
    walletName: "Oxen",
  },
  {
    walletImage: "src/assets/wallets/c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266-150x150.jpg",
    walletName: "Guard",
  },
  {
    walletImage:
      "src/assets/wallets/6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6-150x150.jpg",
    walletName: "TrustVault",
  },
  {
    walletImage: "",
    walletName: "Tezos",
  },
  {
    walletImage: "",
    walletName: "DigiTex",
  },
  {
    walletImage: "",
    walletName: "Thundertoken",
  },
  {
    walletImage: "",
    walletName: "Bitpay",
  },
  {
    walletImage:
      "src/assets/wallets/1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1-150x150.jpg",
    walletName: "Trustee Wallet",
  },

  {
    walletImage: "",
    walletName: "SumCoin",
  },
  {
    walletImage: "src/assets/wallets/ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1-150x150.jpg",
    walletName: "ViaWallet",
  },
  {
    walletImage: "",
    walletName: "Electrum",
  },
  {
    walletImage: "src/assets/wallets/bitbuy.png",
    walletName: "Bitbuy",
  },
  {
    walletImage: "",
    walletName: "Mycelium",
  },
  {
    walletImage: "",
    walletName: "Exodus",
  },
  {
    walletImage: "",
    walletName: "Trezor",
  },
  {
    walletImage: "",
    walletName: "Edge Wallet",
  },
]);
</script>

<style scoped>
section {
  padding: 6rem 5%;
  background-color: #fff;
  width: 100%;
  height: 100vh;
}

h1 {
  font-size: 4rem;
  margin-top: 15rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #888;
}

nav {
  height: 13rem;
  padding: 3rem 7%;
  background-color: #fff;
  display: flex;
  gap: 18rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  font-weight: bold;
  top: 0;
  color: #999;
  left: 0;
  right: 0;
  font-size: 2.5rem;
}

.nav__img {
  height: 8rem;
  width: 8rem;
  margin-top: 6rem;
}

.nav__img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.leftnav {
  display: flex;
  gap: 18rem;
}
.rightnav {
  display: flex;
  gap: 18rem;
}

.box__container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
