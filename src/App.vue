<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo" />
            <span>vue3 admin</span>
          </div>
        </div>
        <!--line for good looking-->
        <div class="line" />
        <el-menu background-color="#222832" text-color="#fff" :router="true">
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">
                <el-icon>
                  <DataLine />
                </el-icon>
                首页
              </el-menu-item>
              <el-menu-item index="/add">
                <el-icon>
                  <DataLine />
                </el-icon>
                添加商品
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper">
                <el-icon>
                  <Picture />
                </el-icon>
                轮播图配置
              </el-menu-item>
              <el-menu-item index="/hot"
                ><el-icon><StarFilled /></el-icon>热销商品配置</el-menu-item
              >
              <el-menu-item index="/new"
                ><el-icon><Sell /></el-icon>新品上线配置</el-menu-item
              >
              <el-menu-item index="/recommend"
                ><el-icon><ShoppingCart /></el-icon>为你推荐配置</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"
                ><el-icon><Menu /></el-icon>分类管理</el-menu-item
              >
              <el-menu-item index="/good"
                ><el-icon><Goods /></el-icon>商品管理</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { localGet, pathMap } from "@/utils";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// route doesn't need left menu
const noMenu = ["/login"];
const router = useRouter();
const state = reactive({
  showMenu: true,
  defaultOpen: ["1", "2", "3"],
  currentPath: "/",
});
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    if (!localGet("token")) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
  state.showMenu = !noMenu.includes(to.path);
  state.currentPath = to.path;
  document.title = pathMap[to.name];
});
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
