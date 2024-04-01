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
const images = import.meta.glob("../assets/wallets/*", { eager: true });

const walletData = reactive([
  {
    walletImage: images["../assets/wallets/trust-wallet-150x150.png"].default,
    walletName: "Multicoin",
  },
  {
    walletImage: images["../assets/wallets/blockchainwallet.png"].default,
    walletName: "BlockChain Wallet",
  },
  {
    walletImage: images["../assets/wallets/zvqWFfy-150x150.jpg"].default,
    walletName: "Ledger",
  },
  {
    walletImage: images["../assets/wallets/trust-wallet-150x150.png"].default,
    walletName: "Trust Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96-150x150.jpg"
      ].default,
    walletName: "Metamask",
  },
  {
    walletImage:
      images[
        "../assets/wallets/29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09-150x150.jpg"
      ].default,
    walletName: "Zelcore",
  },
  {
    walletImage:
      images[
        "../assets/wallets/78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4-150x150.jpg"
      ].default,
    walletName: "XDC Wallet",
  },
  {
    walletImage: images["../assets/wallets/rainbow-150x150.png"].default,
    walletName: "Rainbow",
  },
  {
    walletImage:
      images[
        "../assets/wallets/8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad-150x150.jpg"
      ].default,
    walletName: "Ownbit",
  },
  {
    walletImage:
      images[
        "../assets/wallets/b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c-150x150.jpg"
      ].default,
    walletName: "Vision",
  },
  {
    walletImage:
      images[
        "../assets/wallets/185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a-150x150.jpg"
      ].default,
    walletName: "Atomic",
  },
  {
    walletImage:
      images[
        "../assets/wallets/b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e-150x150.jpg"
      ].default,
    walletName: "Coin98",
  },
  {
    walletImage:
      images[
        "../assets/wallets/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d-150x150.jpg"
      ].default,
    walletName: "Crypto.com | DeFi Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26-150x150.jpg"
      ].default,
    walletName: "MathWallet",
  },
  {
    walletImage: images["../assets/wallets/hw9IIkS-150x150.png"].default,
    walletName: "Morix Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150-150x150.jpg"
      ].default,
    walletName: "SafePal",
  },
  {
    walletImage:
      images[
        "../assets/wallets/3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1-150x150.jpg"
      ].default,
    walletName: "SparkPoint",
  },
  {
    walletImage:
      images[
        "../assets/wallets/7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd-150x150.jpg"
      ].default,
    walletName: "Unstoppable Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b-150x150.jpg"
      ].default,
    walletName: "PeakDeFi Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f-150x150.jpg"
      ].default,
    walletName: "Infinity Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d.jpg"
      ].default,
    walletName: "Autherium",
  },
  {
    walletImage:
      images[
        "../assets/wallets/244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c.jpg"
      ].default,
    walletName: "Easy Pocket",
  },
  {
    walletImage:
      images[
        "../assets/wallets/1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719.jpg"
      ].default,
    walletName: "Midas Wallet",
  },
  {
    walletImage: images["../assets/wallets/walleth.png"].default,
    walletName: "Walleth",
  },
  {
    walletImage:
      images[
        "../assets/wallets/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137-150x150.jpg"
      ].default,
    walletName: "Onto",
  },
  {
    walletImage: images["../assets/wallets/FNeEqEY-150x150.jpg"].default,
    walletName: "Meet.One",
  },
  {
    walletImage:
      images[
        "../assets/wallets/6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702-150x150.jpg"
      ].default,
    walletName: "GridPlus",
  },
  {
    walletImage:
      images[
        "../assets/wallets/d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6-150x150.jpg"
      ].default,
    walletName: "Infinito",
  },
  {
    walletImage:
      images[
        "../assets/wallets/d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e-150x150.jpg"
      ].default,
    walletName: "Dok Wallet",
  },
  {
    walletImage: images["../assets/wallets/X4pm9U0-150x150.jpg"].default,
    walletName: "TronLink",
  },
  {
    walletImage:
      images[
        "../assets/wallets/9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814-150x150.jpg"
      ].default,
    walletName: "Coinomi",
  },
  {
    walletImage:
      images["../assets/wallets/Myetherwallet-logo-square-150x150.png"].default,
    walletName: "MyEtherWallet",
  },
  {
    walletImage: images["../assets/wallets/argent-150x150.jpg"].default,
    walletName: "Argent",
  },
  {
    walletImage: images["../assets/wallets/nEmaX3p-150x150.png"].default,
    walletName: "Coinbase",
  },
  {
    walletImage:
      images[
        "../assets/wallets/42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106-150x150.jpg"
      ].default,
    walletName: "Bitkeep",
  },
  {
    walletImage:
      images[
        "../assets/wallets/61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e-150x150.jpg"
      ].default,
    walletName: "MyKey",
  },
  {
    walletImage:
      images[
        "../assets/wallets/176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b-150x150.jpg"
      ].default,
    walletName: "Wallet.io",
  },
  {
    walletImage:
      images[
        "../assets/wallets/1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d-150x150.jpg"
      ].default,
    walletName: "Cool Wallet S",
  },
  {
    walletImage:
      images[
        "../assets/wallets/efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61-150x150.jpg"
      ].default,
    walletName: "Eidoo",
  },
  {
    walletImage:
      images[
        "../assets/wallets/881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb-150x150.jpg"
      ].default,
    walletName: "Bridge Wallet",
  },
  {
    walletImage:
      images[
        "../assets/wallets/c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0-150x150.jpg"
      ].default,
    walletName: "Tokenary",
  },
  {
    walletImage:
      images[
        "../assets/wallets/3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5-150x150.jpg"
      ].default,
    walletName: "AT.Wallet",
  },
  {
    walletImage: images["../assets/wallets/nEmaX3p-150x150.png"].default,
    walletName: "Harmony",
  },
  {
    walletImage: images["../assets/wallets/IDFef99-150x150.png"].default,
    walletName: "Stellar",
  },
  {
    walletImage:
      images[
        "../assets/wallets/beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693-150x150.jpg"
      ].default,
    walletName: "Alice",
  },
  {
    walletImage: images["../assets/wallets/gnosis-safe-150x150.jpg"].default,
    walletName: "Gnosis Safe",
  },
  {
    walletImage: images["../assets/wallets/xdTTF08-150x150.png"].default,
    walletName: "Solana",
  },
  {
    walletImage: images["../assets/wallets/6a1JUkC-150x150.png"].default,
    walletName: "Oxen",
  },
  {
    walletImage:
      images[
        "../assets/wallets/c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266-150x150.jpg"
      ].default,
    walletName: "Guard",
  },
  {
    walletImage:
      images[
        "../assets/wallets/6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6-150x150.jpg"
      ].default,
    walletName: "TrustVault",
  },
  {
    walletImage: images["../assets/wallets/D9Aog3V-150x150.png"].default,
    walletName: "Tezos",
  },
  {
    walletImage: images["../assets/wallets/GaW0bMm-150x150.png"].default,
    walletName: "DigiTex",
  },
  {
    walletImage: images["../assets/wallets/sWzuT4u-150x150.png"].default,
    walletName: "Thundertoken",
  },
  {
    walletImage:
      images[
        "../assets/wallets/ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b-150x150.jpg"
      ].default,
    walletName: "Bitpay",
  },
  {
    walletImage:
      images[
        "../assets/wallets/1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1-150x150.jpg"
      ].default,
    walletName: "Trustee Wallet",
  },

  {
    walletImage: images["../assets/wallets/vsZwKGL-150x150.png"].default,
    walletName: "SumCoin",
  },
  {
    walletImage:
      images[
        "../assets/wallets/ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1-150x150.jpg"
      ].default,
    walletName: "ViaWallet",
  },
  {
    walletImage: images["../assets/wallets/electrum.png"].default,
    walletName: "Electrum",
  },
  {
    walletImage: images["../assets/wallets/bitbuy.png"].default,
    walletName: "Bitbuy",
  },
  {
    walletImage: images["../assets/wallets/mycelium.png"].default,
    walletName: "Mycelium",
  },
  {
    walletImage: images["../assets/wallets/exodus.png"].default,
    walletName: "Exodus",
  },
  {
    walletImage: images["../assets/wallets/trezor.png"].default,
    walletName: "Trezor",
  },
  {
    walletImage: images["../assets/wallets/edge.png"].default,
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
  font-size: 4.3rem;
  margin-top: 13rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #888;
}

nav {
  height: 10rem;
  padding: 2rem 7%;
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

nav div div {
  cursor: pointer;
}

.nav__img {
  height: 18rem;
  width: 18rem;
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
  padding: 1rem 15%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  nav {
    gap: 6rem;
    font-size: 2rem;
  }

  .rightnav {
    gap: 3rem;
  }
  .leftnav {
    gap: 3rem;
  }

  .box__container {
    gap: 5rem;
    padding: 1rem 0;
  }
}

@media (max-width: 480px) {
  section {
    padding: 3rem 2%;
  }
  nav {
    gap: 1rem;
    font-size: 1.6rem;
  }

  .nav__img {
    height: 11rem;
    width: 11rem;
    margin-top: 6rem;
  }

  h1 {
    font-size: 3rem;
  }

  .rightnav {
    gap: 1rem;
  }
  .leftnav {
    gap: 1rem;
  }

  .box__container {
    gap: 2rem;
  }
}

@media (max-width: 320px) {
  nav {
    gap: 0.3rem;
    font-size: 1.4rem;
  }

  .rightnav {
    gap: 0.6rem;
  }
  .leftnav {
    gap: 0.6rem;
  }

  .nav__img {
    height: 9rem;
    width: 9rem;
    margin-top: 6rem;
  }

  .box__container {
    gap: 1rem;
  }
}
</style>
