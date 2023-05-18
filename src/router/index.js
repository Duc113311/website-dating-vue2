import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Test các control
  {
    path: "/control",
    name: "control-page",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/control/index.vue"),
  },
  // Login PhoneNumber - Google - Facebook
  {
    path: "/",
    name: "login-page",
    component: () =>
      import(/* webpackChunkName: "login-page" */ "../views/login/index.vue"),
  },

  // Login Phone number
  {
    path: "/login",
    name: "type-login",
    component: () =>
      import(
        /* webpackChunkName: "login-page" */ "../views/login/type-login/index.vue"
      ),

    children: [
      {
        path: "/",
        name: "phone-number",
        component: () =>
          import(
            /* webpackChunkName: "phone-number" */ "../views/login/type-login/phone-number/index.vue"
          ),
      },
      {
        path: "/email",
        name: "email-page",
        component: () =>
          import(
            /* webpackChunkName: "email-page" */ "../views/login/type-login/form-email/email-page.vue"
          ),
      },
    ],
  },

  // Create account user-profile
  {
    path: "/create-user",
    name: "create-profile",
    component: () =>
      import(
        /* webpackChunkName: "create-profile" */ "../views/create-profile/index.vue"
      ),
  },

  // Page Home
  {
    path: "/home",
    name: "home-page",
    component: () =>
      import(
        /* webpackChunkName: "home-page" */ "../views/home-page/index.vue"
      ),

    children: [
      {
        path: "/",
        name: "home-default-page",
        component: () =>
          import(
            /* webpackChunkName: "home-default-page" */ "../views/home-page/default/index.vue"
          ),
      },
      {
        path: "/report/:userId",
        name: "report-page",
        component: () =>
          import(
            /* webpackChunkName: "report-page" */ "../views/home-page/report/index.vue"
          ),
      },
    ],
  },

  // Page explore
  {
    path: "/explore",
    name: "explore-page",
    component: () =>
      import(
        /* webpackChunkName: "explore-page" */ "../views/explore-page/index.vue"
      ),

    children: [
      // Dashboard
      {
        path: "/",
        name: "category-page-topic",
        component: () =>
          import(
            /* webpackChunkName: "category-page-topic" */ "../views/explore-page/category/index.vue"
          ),
      },
      // Verified user
      {
        path: "/verified",
        name: "verified-page",
        component: () =>
          import(
            /* webpackChunkName: "verified-page" */ "../views/explore-page/verified/index.vue"
          ),

        children: [
          {
            path: "/",
            name: "not-verified-page",
            component: () =>
              import(
                /* webpackChunkName: "not-verified-page" */ "../views/explore-page/verified/not-verified/not-verified-page.vue"
              ),
          },

          {
            path: "/photo-verified",
            name: "verified-filter-page",
            component: () =>
              import(
                /* webpackChunkName: "verified-filter-page" */ "../views/explore-page/verified/filter-page/verified-filter-page.vue"
              ),
          },

          {
            path: "/user-verified",
            name: "verified-user-page",
            component: () =>
              import(
                /* webpackChunkName: "verified-user-page" */ "../views/explore-page/verified/user-page/user-verified.vue"
              ),
          },
        ],
      },

      // Blind date
      {
        path: "/blind-date",
        name: "blind-date",
        component: () =>
          import(
            /* webpackChunkName: "blind-date" */ "../views/explore-page/date/index.vue"
          ),

        children: [
          {
            path: "/",
            name: "default-date",
            component: () =>
              import(
                /* webpackChunkName: "default-date" */ "../views/explore-page/date/default/index.vue"
              ),
          },
          {
            path: "/filter-date",
            name: "date-filter-user",
            component: () =>
              import(
                /* webpackChunkName: "date-filter-user" */ "../views/explore-page/date/filter-user/index.vue"
              ),
          },
          {
            path: "/message-date",
            name: "message-time-page",
            component: () =>
              import(
                /* webpackChunkName: "message-time-page" */ "../views/explore-page/date/message-time/message-time-page.vue"
              ),
          },
        ],
      },

      // Let-be-friends
      {
        path: "/let-be-friend",
        name: "let-be-friend-page",
        component: () =>
          import(
            /* webpackChunkName: "let-be-friend-page" */ "../views/explore-page/verified/index.vue"
          ),

        children: [
          {
            path: "/",
            name: "photo-friend-page",
            component: () =>
              import(
                /* webpackChunkName: "photo-friend-page" */ "../views/explore-page/let-be-friend/photo-friend/index.vue"
              ),
          },

          {
            path: "/user-friend",
            name: "user-friend-page",
            component: () =>
              import(
                /* webpackChunkName: "user-friend-page" */ "../views/explore-page/let-be-friend/user-friend/index.vue"
              ),
          },
        ],
      },

      // common page
      {
        path: "/common-explore/:screamName/:topicId",
        name: "common-explore-page",
        component: () =>
          import(
            /* webpackChunkName: "common-explore-page" */ "../views/explore-page/common/index.vue"
          ),

        children: [
          {
            path: "/",
            name: "photo-explore-page",
            component: () =>
              import(
                /* webpackChunkName: "photo-friend-page" */ "../views/explore-page/common/photo-common/index.vue"
              ),
          },

          {
            path: "/common-friend/:screamName/:topicId",
            name: "users-explore-page",
            component: () =>
              import(
                /* webpackChunkName: "users-explore-page" */ "../views/explore-page/common/users-common/index.vue"
              ),
          },
        ],
      },
    ],
  },

  // Page like & topic
  {
    path: "/like-topic",
    name: "like-topic-page",
    component: () =>
      import(
        /* webpackChunkName: "like-topic-page" */ "../views/like-topic/index.vue"
      ),
    children: [
      {
        path: "/",
        name: "you-like-action",
        component: () =>
          import(
            /* webpackChunkName: "you-like-action" */ "../views/like-topic/99-like/index.vue"
          ),
      },
      {
        path: "/for-you",
        name: "for-you-page",
        component: () =>
          import(
            /* webpackChunkName: "for-you-page" */ "../views/like-topic/for-you/index.vue"
          ),
      },
    ],
  },

  // Page message
  {
    path: "/message",
    name: "message-page",
    component: () =>
      import(
        /* webpackChunkName: "message-page" */ "../views/message-page/index.vue"
      ),

    children: [
      // Dashboard màn chat: List user friend
      {
        path: "/",
        name: "dashboard-chat",
        component: () =>
          import(
            /* webpackChunkName: "dashboard-chat" */ "../views/message-page/dashboard-chat/index.vue"
          ),
      },
      // Chat with user
      {
        path: "/chat/:userId",
        name: "chat-page",
        component: () =>
          import(
            /* webpackChunkName: "chat-page" */ "../views/message-page/chat-page/index.vue"
          ),
      },
    ],
  },

  // Page Profile - Setting - Update
  {
    path: "/profile",
    name: "profile-page",
    component: () =>
      import(
        /* webpackChunkName: "profile-page" */ "../views/profile-page/index.vue"
      ),

    children: [
      // Default page
      {
        path: "/",
        name: "default-page",
        component: () =>
          import(
            /* webpackChunkName: "default-page" */ "../views/profile-page/default-page/default.vue"
          ),
      },
      // Detail profile user admin
      {
        path: "/admin",
        name: "detail-admin",
        component: () =>
          import(
            /* webpackChunkName: "detail-admin" */ "../views/profile-page/detail-admin/index.vue"
          ),
      },
      // edit profile
      {
        path: "/edit-profile",
        name: "edit-profile",
        component: () =>
          import(
            /* webpackChunkName: "edit-profile" */ "../views/profile-page/edit-profile/index.vue"
          ),
        children: [
          {
            path: "/",
            name: "default-user",
            component: () =>
              import(
                /* webpackChunkName: "default-user" */ "../views/profile-page/edit-profile/default/index"
              ),
          },
          {
            path: "/media",
            name: "media-user-crop",
            component: () =>
              import(
                /* webpackChunkName: "media-user-crop" */ "../views/profile-page/edit-profile/media/index"
              ),
          },
          {
            path: "/test-edit",
            name: "test-edit-page",
            component: () =>
              import(
                /* webpackChunkName: "test-edit-page" */ "../views/profile-page/edit-profile/test-edit-page"
              ),
          },
          {
            path: "/add-school",
            name: "add-school-page",
            component: () =>
              import(
                /* webpackChunkName: "add-school-page" */ "../views/profile-page/edit-profile/school/add-school.vue"
              ),
          },

          {
            path: "/sexual-page",
            name: "sexual-page",
            component: () =>
              import(
                /* webpackChunkName: "sexual-page" */ "../views/profile-page/edit-profile/sexuals/sexual-page.vue"
              ),
          },
        ],
      },
      // Setting profile
      {
        path: "/setting",
        name: "setting-page",
        component: () =>
          import(
            /* webpackChunkName: "setting-page" */ "../views/profile-page/setting/index.vue"
          ),

        children: [
          {
            path: "/",
            name: "setting-default",
            component: () =>
              import(
                /* webpackChunkName: "setting-default" */ "../views/profile-page/setting/default/index.vue"
              ),
          },
          {
            path: "/phone-number",
            name: "phone-number-setting",
            component: () =>
              import(
                /* webpackChunkName: "phone-number-setting" */ "../views/profile-page/setting/phone-number/index.vue"
              ),
          },
          {
            path: "/test-setting",
            name: "test-setting-page",
            component: () =>
              import(
                /* webpackChunkName: "test-setting-page" */ "../views/profile-page/setting/test-setting/index.vue"
              ),
          },

          {
            path: "/global-language",
            name: "global-language-page",
            component: () =>
              import(
                /* webpackChunkName: "global-language-page" */ "../views/profile-page/setting/global-language/index.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
