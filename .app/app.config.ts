const iconTailwindClasses = 'w-10 h-10'

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
      },
      navigation: {
        logo: {
          component: 'LavkaIcon',
        },
        items: [
          {
            title: 'Курьеры',
            icon: { name: 'ic:twotone-directions-bike', class: 'w-5 h-5' },
            activePath: '/couriers',
            to: '/couriers',
          },
          {
            title: 'Заявки',
            icon: { name: 'material-symbols:order-approve', class: 'w-5 h-5' },
            activePath: '/orders',
            to: '/orders',
          },
          {
            title: 'Профиль',
            component: 'DemoAccountMenu',
            position: 'end',
          },
        ],
      },
    },
  },
})
