export default {
  state: {
    ads: [
      {
        title: "Караби",
        desc: "First Desc",
        promo: true,
        src: "https://64.media.tumblr.com/184c32f9137714fe83fbbeac7203ffd6/tumblr_pg8r7dmXRI1vtdgbmo2_1280.jpg",
        id: "1",
      },
      {
        title: "Чатырдаг",
        desc: "Second Desk",
        promo: true,
        src: "https://64.media.tumblr.com/3d46118960be0644209a279a385407d1/ccc72a237c25a059-87/s2048x3072/ef5ee9355ae7c99654a3ebbb0d8fa85cc1bdb16b.jpg",
        id: "2",
      },
      {
        title: "Караул-Оба",
        desc: "Third Desc",
        promo: true,
        src: "https://64.media.tumblr.com/65c46ebb760495c4fcb671d7ff36fdf4/ccc72a237c25a059-70/s2048x3072/52ebd5275b58266a2c5d0b1ea82b49dfc9cfb92c.jpg",
        id: "3",
      },
      {
        title: "Северная Демерджи",
        desc: "Fouth Desc",
        promo: true,
        src: "https://64.media.tumblr.com/198283b05cb8d8ad44a383212a380aff/ccc72a237c25a059-02/s2048x3072/4bf23819e9915459917dbf0a2c8bab75c94e2371.jpg",
        id: "4",
      },
    ],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = Math.random();
      commit("createAd", payload);
    },
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter((ad) => {
        return ad.promo;
      });
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return (id) => {
        return state.ads.find((ad) => ad.id == id);
      };
    },
  },
};
