<template>
  <div class="l-top-navigator">
    <el-menu class="el-menu-demo lv-socialNw" mode="horizontal">
      <el-menu-item index="1">
        <i class="fa fa-github"></i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-weixin"></i>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-weibo"></i>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="fa fa-qq"></i>
      </el-menu-item>
    </el-menu>

    <el-menu :router="true" class="el-menu-demo lv-el-menu" mode="horizontal" default-active="/">
      <el-menu-item index="/">
        <i class="fa fa-home"></i>首页
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-user"></i>帐户
      </el-menu-item>
      <el-menu-item index="/register">
        <i class="fa fa-edit"></i>
        注册
      </el-menu-item>
      <el-menu-item index @click="openColorPanel">
        <i class="fa fa-cog"></i>切换主题色
        <el-color-picker v-model="theme" class="theme-picker" ref="customTheme"></el-color-picker>
      </el-menu-item>
      <el-menu-item index="/contactus">
        <i class="fa fa-envelope"></i>
        联系我们
      </el-menu-item>
      <el-menu-item index="/orderCart">
        <i class="fa fa-shopping-cart"></i>
        购物车-$0.00
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color
export default {
  name: "LTheTopNavigatorBar",
  components: {},
  data() {
    return {
      chalk: "", // content of theme-chalk css
      theme: ORIGINAL_THEME,
      dialogVisible: false
    };
  },
  watch: {
    theme(val, oldVal) {
      if (typeof val !== "string") return;
      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
      console.log(themeCluster, originalCluster);
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace("#", "")
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );
          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };
      };
      const chalkHandler = getHandler("chalk", "chalk-style");
      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
        this.getCSSString(url, chalkHandler, "chalk");
      } else {
        chalkHandler();
      }
      const styles = [].slice
        .call(document.querySelectorAll("style"))
        .filter(style => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach(style => {
        const { innerText } = style;
        if (typeof innerText !== "string") return;
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });
      this.$message({
        message: "换肤成功",
        type: "success"
      });
    }
  },
  methods: {
    openColorPanel: function() {
      this.$refs.customTheme.handleTrigger();
    },
    handleClose() {
      this.dialogVisible = false;
    },
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },
    getCSSString(url, callback, variable) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
          callback();
        }
      };
      xhr.open("GET", url);
      xhr.send();
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);
        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));
          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);
          return `#${red}${green}${blue}`;
        }
      };
      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);
        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);
        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);
        return `#${red}${green}${blue}`;
      };
      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "element-theme-chalk/src/common/var.scss";
.l-top-navigator {
  font-family: FontAwesome;
  .lv-socialNw {
    float: left;
    .el-menu-item {
      font-size: 25;
      padding: 0 5;
    }
  }
  .lv-el-menu {
    float: right;
  }
  .fa {
    color: #fff;
    text-shadow: 1px 1px 1px #ccc;
    font-size: 1.5em;
  }
  li.el-menu-item:hover,
  li.el-menu-item.active {
  }
  li.el-menu-item {
    background-color: $--color-primary;
    color: #fff;
  }
  .theme-picker {
    visibility: hidden;
    width: 0;
  }
}
</style>


