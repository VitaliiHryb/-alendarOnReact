const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2022, 9, 1, 2, 15),
    dateTo: new Date(2022, 9, 1, 2, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2022, 8, 30, 10, 15),
    dateTo: new Date(2022, 8, 30, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2022, 9, 9, 10, 30),
    dateTo: new Date(2022, 9, 9, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2022, 9, 5, 10, 30),
    dateTo: new Date(2022, 9, 5, 11, 0),
  },
  {
    id: 5,
    title: 'live coding',
    description: 'this is react lesson',
    dateFrom: new Date(2022, 9, 1, 10, 30),
    dateTo: new Date(2022, 9, 1, 11, 0),
  },
  {
    id: 6,
    title: 'interview',
    description: 'this is js interview',
    dateFrom: new Date(2022, 9, 2, 10, 30),
    dateTo: new Date(2022, 9, 2, 11, 30),
  },
  {
    id: 7,
    title: 'english',
    description: 'today is an english lesson',
    dateFrom: new Date(2022, 9, 3, 10, 15),
    dateTo: new Date(2022, 9, 3, 11, 0),
  },
];

const baseUrl = 'https://63375d775327df4c43d370d7.mockapi.io/events';

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });
};

export const fetchEvents = () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

export const deleteEvents = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
};

export default events;
