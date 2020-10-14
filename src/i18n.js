import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function getLocale() {
  const LSLocale = localStorage.getItem("locale");
  if (LSLocale) return LSLocale;

  let locale = process.env.VUE_APP_I18N_LOCALE || "en";

  const userLocale = navigator?.languages?.[0] || navigator?.language;

  locale = userLocale ? userLocale.split("-")?.[0] : locale;

  return locale;
}

export default new VueI18n({
  locale: getLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});
