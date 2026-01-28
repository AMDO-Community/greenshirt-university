import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/greenshirt-university/blog',
    component: ComponentCreator('/greenshirt-university/blog', '474'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/archive',
    component: ComponentCreator('/greenshirt-university/blog/archive', '7ec'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/authors',
    component: ComponentCreator('/greenshirt-university/blog/authors', '036'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/greenshirt-university/blog/authors/all-sebastien-lorber-articles', '710'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/authors/yangshun',
    component: ComponentCreator('/greenshirt-university/blog/authors/yangshun', '578'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/first-blog-post',
    component: ComponentCreator('/greenshirt-university/blog/first-blog-post', '7a3'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/long-blog-post',
    component: ComponentCreator('/greenshirt-university/blog/long-blog-post', '6f4'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/mdx-blog-post',
    component: ComponentCreator('/greenshirt-university/blog/mdx-blog-post', 'd23'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/tags',
    component: ComponentCreator('/greenshirt-university/blog/tags', '70e'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/tags/docusaurus',
    component: ComponentCreator('/greenshirt-university/blog/tags/docusaurus', '3f4'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/tags/facebook',
    component: ComponentCreator('/greenshirt-university/blog/tags/facebook', 'b9f'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/tags/hello',
    component: ComponentCreator('/greenshirt-university/blog/tags/hello', '473'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/tags/hola',
    component: ComponentCreator('/greenshirt-university/blog/tags/hola', '713'),
    exact: true
  },
  {
    path: '/greenshirt-university/blog/welcome',
    component: ComponentCreator('/greenshirt-university/blog/welcome', '2bc'),
    exact: true
  },
  {
    path: '/greenshirt-university/markdown-page',
    component: ComponentCreator('/greenshirt-university/markdown-page', 'd97'),
    exact: true
  },
  {
    path: '/greenshirt-university/docs',
    component: ComponentCreator('/greenshirt-university/docs', 'f40'),
    routes: [
      {
        path: '/greenshirt-university/docs',
        component: ComponentCreator('/greenshirt-university/docs', 'c28'),
        routes: [
          {
            path: '/greenshirt-university/docs',
            component: ComponentCreator('/greenshirt-university/docs', '64b'),
            routes: [
              {
                path: '/greenshirt-university/docs/category/tutorial---basics',
                component: ComponentCreator('/greenshirt-university/docs/category/tutorial---basics', 'caf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/category/tutorial---extras',
                component: ComponentCreator('/greenshirt-university/docs/category/tutorial---extras', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/intro',
                component: ComponentCreator('/greenshirt-university/docs/intro', '7d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-basics/congratulations', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-basics/create-a-blog-post', '6bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-basics/create-a-document', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-basics/create-a-page', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-basics/deploy-your-site', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-basics/markdown-features', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-extras/manage-docs-versions', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/greenshirt-university/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/greenshirt-university/docs/tutorial-extras/translate-your-site', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/greenshirt-university/',
    component: ComponentCreator('/greenshirt-university/', '17d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
