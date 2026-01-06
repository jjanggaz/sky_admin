<template>
  <aside class="sidebar"> <!-- :class="{ closed : isclosed}" -->
    <div class="sidebar-content">
      <!-- Navigation Menu -->
      <nav class="nav-menu">
        <!-- 권한에 따른 메뉴 동적 표시 -->
        <template v-for="menuItem in availableMenus" :key="menuItem.path">
          <router-link :to="menuItem.path" class="nav-item">
            <span class="nav-icon">
              <img
                :src="menuItem.icon"
                alt="menu icon"
                width="24"
                height="24"
              />
            </span>
            <span class="nav-text">{{ t(menuItem.titleKey) }}</span>
          </router-link>
        </template>

        <!-- <router-link to="/test" class="nav-item">
          <span class="nav-icon">🧪</span>
          <span class="nav-text">{{ t("sidebar.test") }}</span>
        </router-link> -->
      </nav>
    </div>

    <!-- <div class="side-btn"> --> <!-- :class="{ on : !isclosed }" -->
      <!-- <button></button> --> <!-- @click="toggleSideBar" -->
    <!-- </div> -->
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore();

// 사이드바
// const breakPoint = 1024;
// const isclosed = ref(false);
// const userToggle = ref(false);
// const lastScreenSmall = ref(false);

// const toggleSideBar = () => {
//   isclosed.value = !isclosed.value;
//   userToggle.value = true;
// }

// const checkScreen = () => {
//   const ScreenSmall = window.innerWidth <= breakPoint;

//   if(ScreenSmall !== lastScreenSmall.value) {
//     userToggle.value = false;
//   }
//   if(!userToggle.value){
//     if(ScreenSmall) {
//       isclosed.value = true;
//     } else {
//       isclosed.value = false;
//     }
//   }
//   lastScreenSmall.value = ScreenSmall;
// };

// onMounted(() => {
//   checkScreen();
//   window.addEventListener('resize', checkScreen);
// })
// onUnmounted(() => {
//   checkScreen();
//   window.removeEventListener('resize', checkScreen);
// })

// 코드 기반 메뉴 정의
const codeBasedMenus = {
  WEB01: {
    path: "/dashboard",
    icon: "/images/icons/WEB01.svg",
    titleKey: "sidebar.dashboard",
  },
  WEB02: {
    path: "/code",
    icon: "/images/icons/ico_code.svg",
    titleKey: "sidebar.code",
  },
  WEB03: {
    path: "/project",
    icon: "/images/icons/ico_project.svg",
    titleKey: "sidebar.project",
  },
  WEB04: {
    path: "/asset",
    icon: "/images/icons/ico_inflow.svg",
    titleKey: "sidebar.asset",
  },
  WEB05: {
    path: "/process",
    icon: "/images/icons/ico_process.svg",
    titleKey: "sidebar.process",
  },
  WEB06: {
    path: "/machine",
    icon: "/images/icons/ico_constType.svg",
    titleKey: "sidebar.machine",
  },
  WEB07: {
    path: "/cost",
    icon: "/images/icons/ico_price.svg",
    titleKey: "sidebar.cost",
  },
  WEB08: {
    path: "/model",
    icon: "/images/icons/WEB08.svg",
    titleKey: "sidebar.model",
  },
  WEB09: {
    path: "/user",
    icon: "/images/icons/ico_user.svg",
    titleKey: "sidebar.user",
  },
  WEB10: {
    path: "/vendors",
    icon: "/images/icons/WEB10.svg",
    titleKey: "sidebar.vendors",
  },
};

// 현재 사용자 코드에 따른 메뉴 계산
const availableMenus = computed(() => {
  const userCodes = authStore.user?.codes;

  if (!userCodes || userCodes.length === 0) {
    return [];
  }

  // 코드 기반으로 메뉴 필터링
  return userCodes
    .map((code) => codeBasedMenus[code as keyof typeof codeBasedMenus])
    .filter(Boolean);
  // 라우트 확인 로직 비활성화 (타이밍 이슈로 인해)
  // .filter((menu) => {
  //   return router.hasRoute(menu.path.substring(1)); // '/' 제거
  // });
});
</script>

<style scoped lang="scss">
.sidebar {
  //position: fixed;
  left: 0;
  top: 0;
  width: 260px;
  height: 100vh;
  background-color: $background-darker;
  z-index: 100;
  transform: translateX(0);
  transition: transform .3s ease;

  // &.closed {
  //   transform: translateX(-100%);
  // }

  .sidebar-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .nav-menu {
    flex: 1;
    padding: 20px 0;

    .nav-item {
      display: flex;
      align-items: center;
      padding: 0 32px;
      color: rgba($text-white, 0.7);
      text-decoration: none;
      cursor: pointer;
      transition: $transition-base;

      &:hover {
        background: rgba(39, 155, 216, 0.15);
        color: $text-white;
      }

      &.router-link-active {
        background-color: rgba($text-sky, 1);
        color: $text-white;
        border-left-color: $primary-color;

        .nav-icon {
          color: $primary-color;
        }
      }

      .nav-icon {
        font-size: 18px;
        margin-right: $spacing-md;
        width: 24px;
        height: 60px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .nav-text {
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.2px;
      }
    }
  }

  // .side-btn {
  //   position: fixed;
  //   top: 49.75%;
  //   right: -35px;
  //   transform: translateY(-50%);
  //   width: 35px;
  //   height: 35px;

  //   button {
  //     position: relative;
  //     width: 30px;
  //     height: 60px;
  //     background-color: #1f2937;
  //     border-radius: 0 20px 20px 0;

  //     &:hover {
  //       background: #394a61;
  //     }

  //     &::after {
  //       content: "";
  //       position: absolute;
  //       top: 50%;
  //       left: 50%;
  //       margin: -6px -8px;
  //       width: 12px;
  //       height: 12px;
  //       background: url(../../assets/icons/ico_detail-arrow.svg) no-repeat center / 12px auto;
  //       transform: rotate(-90deg);
  //     }
  //   }
  // }

  // .side-btn.on {
  //   button {
  //     &::after {
  //       transform: rotate(90deg);
  //     }
  //   }
  // }
}

// .sidebar.closed .app-header {
//   left: 0;
// }

@media (max-width: $breakpoint-lg) {
  .sidebar {
    overflow: hidden;
    width: 0;
    //transform: translateX(-100%);
    transition: width .3s ease;

    // &:not(.closed) {
    //   transform: translateX(0);
    // }
  }
}
</style>
