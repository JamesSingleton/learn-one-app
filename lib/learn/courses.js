const courses = [
  {
    id: 'basics',
    name: 'Basics',
    lessons: [
      {
        id: 'create-a-module',
        name: 'Create a Module',
        steps: [
          {
            id: 'setup',
            points: 20
          },
          {
            id: 'welcome-to-one-app',
            points: 15
          },
          {
            id: 'editing-the-module',
            points: 15
          }
        ]
      },
      {
        id: 'routing',
        name: 'Routing',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'one-app-router',
            points: 10
          },
          {
            id: 'holocron-module-route',
            points: 10
          }
        ]
      },
      {
        id: 'metadata-styles',
        name: 'Metadata and CSS',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'metadata',
            points: 10
          },
          {
            id: 'css-styling',
            points: 10
          },
          {
            id: 'global-styles',
            points: 15
          }
        ]
      },
      {
        id: 'making-an-api-call',
        name: 'Making an API Call',
        steps: [
          {
            id: 'setup',
            points: 5
          }
        ]
      }
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    lessons: [
      {
        id: 'mocking-an-api-call',
        name: 'Mocking an API Call',
        steps: [
          {
            id: 'setup',
            points: 5
          }
        ]
      },
      {
        id: 'setup-internationalization',
        name: 'Internationalization',
        steps: [
          {
            id: 'setup',
            points: 5
          }
        ]
      },
      {
        id: 'enable-server-side-rendering',
        name: 'Server Side Rendering',
        steps: [
          {
            id: 'setup',
            points: 5
          }
        ]
      }
    ]
  }
];

export default courses;
