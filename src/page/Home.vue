<template>
  <div>
    <l-header></l-header>
    <l-main></l-main>
    <l-footer></l-footer>
  </div>
</template>

<script>
import footer from "./Footer.vue";
import header from "./Header.vue";
import main from "./Main.vue";
import mainLeft from "./MainLeft.vue";
import mainRight from "./MainRight.vue";
export default {
  name: "index",
  components: {
    "l-footer": footer,
    "l-header": header,
	"l-main": main,
	"l-main-left": mainLeft,
	"l-main-right": mainRight
  }
};
</script>

<style lang="sass" scoped>
</style>
