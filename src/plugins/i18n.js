import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

export default createI18n({
  locale: getLocale(),
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
  legacy: false,
  globalInjection: true,
  messages
});

function getLocale() {
  let locale = import.meta.env.VITE_I18N_LOCALE || "es";

  if (import.meta.env.SSR) return locale;

  const LSLocale = localStorage.getItem("locale");
  if (LSLocale) return LSLocale;

  const userLocale = navigator?.languages?.[0] || navigator?.language;

  locale = userLocale ? userLocale.split("-")?.[0] : locale;

  return locale;
}
