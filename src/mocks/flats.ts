import { Apartment } from 'src/app/apartment';

export const FLATS: Apartment[] = [
  {
    id: '0',
    name: 'string',
    address: 'string',
    rent: 0,
    users: [
      {
        name: 'string',
        id: '0',
      },
    ],
    tasks: [
      {
        name: 'Wash dishes',
        status: 'New',
        deadline: '2019-08-24T14:15:22Z',
        priority: 'Normal',
        is_expense: true,
        total: 0,
        id: '0',
        creator_id: '0',
        assignee_id: '0',
        creator_name: 'Masha',
        assignee_name: 'Sasha',
      },
      {
        name: 'Take out rubbish',
        status: 'Done',
        deadline: '2019-08-24T14:15:22Z',
        priority: 'Low',
        is_expense: true,
        total: 0,
        id: '1',
        creator_id: '0',
        assignee_id: '0',
        creator_name: 'Masha',
        assignee_name: 'Sasha',
      },
      {
        name: 'iron curtains',
        status: 'Canceled',
        deadline: '2019-08-24T14:15:22Z',
        priority: 'High',
        is_expense: true,
        total: 0,
        id: '2',
        creator_id: '0',
        assignee_id: '0',
        creator_name: 'Masha',
        assignee_name: 'Sasha',
      },
    ],
  },
];
