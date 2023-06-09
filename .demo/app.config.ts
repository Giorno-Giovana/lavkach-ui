export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  tairo: {
    title: 'Lavkach',
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: false,
            },
          },
        ],
      },
      navigation: {
        logo: {
          component: 'LavkaIcon',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            title: 'Заявки',
            icon: { name: 'material-symbols:order-approve', class: 'w-5 h-5' },
            to: '/orders',
          },
          {
            title: 'Оборудование',
            icon: { name: 'ph:cube-light', class: 'w-5 h-5' },
            to: '/assets',
          },
          {
            title: 'Курьеры',
            icon: { name: 'ic:twotone-directions-bike', class: 'w-5 h-5' },
            to: '/couriers',
          },
          {
            title: 'Компании',
            icon: { name: 'ic:baseline-business', class: 'w-5 h-5' },
            to: '/companies',
          },
          {
            title: 'Склады',
            icon: { name: 'lucide:warehouse', class: 'w-5 h-5' },
            to: '/stores',
          },
          {
            title: 'Контрагенты',
            icon: { name: 'carbon:partnership', class: 'w-5 h-5' },
            to: '/contractors',
          },
          {
            title: 'Поставщики',
            icon: { name: 'icon-park-solid:worker', class: 'w-5 h-5' },
            to: '/suppliers',
          },
          {
            title: 'Производители',
            icon: { name: 'fluent:manufacturer-24-filled', class: 'w-5 h-5' },
            to: '/manufacturers',
          },
          {
            title: 'Модели',
            icon: { name: 'carbon:3d-mpr-toggle', class: 'w-5 h-5' },
            to: '/models',
          },
          {
            title: 'Типы',
            icon: { name: 'uil:sitemap', class: 'w-5 h-5' },
            to: '/asset-types',
          },
          {
            title: 'My Account',
            subsidebar: { component: 'DemoSubsidebarLayouts' },
            component: 'DemoAccountMenu',
            position: 'end',
          },
        ],
      },
    },
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
