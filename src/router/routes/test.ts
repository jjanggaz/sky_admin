// 테스트 페이지
const Test = () => import("@/views/test/Test.vue");
const Campaign = () => import("@/views/test/Campaign.vue");
const CampaignPriority = () => import("@/views/test/CampaignPriority.vue");

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
