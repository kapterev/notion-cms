import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 🔗 Главная страница сайта (Notion Page ID)
  rootNotionPageId: 'c282379f869e49dc9028a8d0bbb9225f',

  // 🔒 (опционально) ограничить контент одной workspace — оставим null
  rootNotionSpaceId: null,

  // 🌍 Общая информация о сайте
  name: 'Алексей Каптерев',
  domain: 'kapterev.vercel.app', // Заменишь, если подключишь кастомный домен
  author: 'Алексей Каптерев',
  description: 'Персональный сайт Алексея Каптерева: размышления, проекты, статьи.',

  // 🧭 Навигация
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Обо мне',
      pageId: 'PAGE_ID_ОБО_МНЕ'
    },
    {
      title: 'Проекты',
      pageId: 'PAGE_ID_ПРОЕКТЫ'
    },
    {
      title: 'Блог',
      pageId: 'PAGE_ID_БЛОГ'
    },
    {
      title: 'Контакты',
      pageId: 'PAGE_ID_КОНТАКТЫ'
    }
  ],

  // 🖼 OG-превью и соцсети
  socialImageTitle: 'Алексей Каптерев',
  socialImageSubtitle: 'Стратегия · Лидерство · Развитие',

  // 🧩 Дефолтные обложки/иконки
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // 🖼 SEO и предпросмотр
  isPreviewImageSupportEnabled: true,

  // 🧠 Кеширование (оставим выключенным)
  isRedisEnabled: false,

  // 📊 Аналитика (можно указать ID Google Analytics)
  googleAnalyticsId: null,

  // 🔗 Соцсети (опционально)
  github: 'kapterev',
  linkedin: 'kapterev',
  twitter: null
})