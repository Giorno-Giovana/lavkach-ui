const iconTailwindClasses = 'w-10 h-10'

export default defineAppConfig({
  tairo: {
    title: 'Lavkach',
    sidebar: {
      navigation: {
        items: [
          {
            title: 'Компании',
            icon: { name: 'ph:buildings-duotone', class: iconTailwindClasses },
            to: '/companies',
            activePath: '/companies',
          },
        ]
      }
    }
  }
})
