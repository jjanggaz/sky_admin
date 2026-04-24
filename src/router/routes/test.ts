// 테스트 페이지
const Test = () => import("@/views/test/Test.vue");
const Campaign = () => import("@/views/test/Campaign.vue");
const CampaignPriority = () => import("@/views/test/CampaignPriority.vue");
const ObtmStatus = () => import("@/views/test/ObtmStatus.vue");
const Scis = () => import("@/views/test/Scis.vue");
const Obtm = () => import("@/views/test/Obtm.vue");
const ObtmAssign = () => import("@/views/test/ObtmAssign.vue");
const ObtmAssignCenter = () => import("@/views/test/ObtmAssignCenter.vue");
const Counselor = () => import("@/views/test/Counselor.vue");
const Sky = () => import("@/views/test/Sky.vue");

export const testRoute = {
  path: "/test",
  name: "Test",
  component: Test,
  meta: {
    requiresAuth: true,
    titleKey: "pageTitles.test",
    icon: "test",
  },
};

export const campaignRoute = {
  path: "/campaign",
  name: "Campaign",
  component: Campaign,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.campaign",
    icon: "campaign",
  },
};

export const campaignPriorityRoute = {
  path: "/campaign-priority",
  name: "CampaignPriority",
  component: CampaignPriority,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.campaignPriority",
    icon: "campaignPriority",
  },
};

export const obtmStatusRoute = {
  path: "/obtm-status",
  name: "ObtmStatus",
  component: ObtmStatus,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.obtmStatus",
    icon: "obtmStatus",
  },
};

export const scisRoute = {
  path: "/scis",
  name: "Scis",
  component: Scis,
  meta: {
    requiresAuth: false,
    titleKey: "SCIS",
    icon: "scis",
  },
};

export const obtmRoute = {
  path: "/obtm",
  name: "Obtm",
  component: Obtm,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.obtm",
    icon: "obtm",
  },
};

export const obtmAssignRoute = {
  path: "/obtm-assign",
  name: "ObtmAssign",
  component: ObtmAssign,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.obtmAssign",
    icon: "obtmAssign",
  },
};

export const obtmAssignCenterRoute = {
  path: "/obtm-assign-center",
  name: "ObtmAssignCenter",
  component: ObtmAssignCenter,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.obtmAssignCenter",
    icon: "obtmAssignCenter",
  },
};

export const counselorRoute = {
  path: "/counselor",
  name: "Counselor",
  component: Counselor,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.counselor",
    icon: "counselor",
  },
};

export const skyRoute = {
  path: "/sky",
  name: "Sky",
  component: Sky,
  meta: {
    requiresAuth: false,
    titleKey: "pageTitles.sky",
    icon: "sky",
  },
};
