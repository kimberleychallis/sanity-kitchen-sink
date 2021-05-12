export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609c49ec705044358c927f38',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ophvxfaq',
                  apiId: 'f099abbb-5ce7-4974-a4f9-b2fc6d5bba42'
                },
                {
                  buildHookId: '609c49ecb478fa2f2b717430',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y45zvhfk',
                  apiId: '0f7bc3d9-7e8e-43f9-9cf4-9c8cb34fcc3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kimberleychallis/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y45zvhfk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
