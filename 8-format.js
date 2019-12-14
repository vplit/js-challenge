const data = [
  {
    userId: 2,
    surname: 'Đức',
    title: 'Three',
    production: 'test 2',
    image:
      '/imgs/works/5be25f10-22da-452c-b03c-6c23e44be5dd/bd361a35-16dd-4047-b9b7-9fdc3469293a.jpg'
  },
  {
    userId: 2,
    surname: 'Đức',
    title: 'Two',
    production: 'Two',
    image:
      '/imgs/works/5be25f10-22da-452c-b03c-6c23e44be5dd/40d455e4-6f92-432d-8a15-8523b88d5fd3.jpg'
  },
  {
    userId: 1,
    surname: '小田',
    title: 'Three',
    production: 'Three',
    image:
      '/imgs/works/99bace59-c60a-4f4c-99bf-ec04a06c5978/90b48ac0-ac02-4cf6-ba66-d5397deb34c5.jpg'
  },
  {
    userId: 1,
    surname: '小田',
    title: 'Three',
    production: 'Three',
    image:
      '/imgs/works/99bace59-c60a-4f4c-99bf-ec04a06c5978/90b48ac0-ac02-4cf6-ba66-d5397deb34c5.jpg'
  }
];

const result = data.reduce((acc, cur) => {
  let isExist = false;
  let newData = acc.map(item => {
    if (item.userId === cur.userId) {
      isExist = true;
      let newItem = { ...item };
      newItem.products.push({
        title: cur.title,
        production: cur.production,
        image: cur.image
      });
      return newItem;
    } else {
      return item;
    }
  });

  if (!isExist) {
    newData.push({
      userId: cur.userId,
      surname: cur.surname,
      products: [
        {
          title: cur.title,
          production: cur.production,
          image: cur.image
        }
      ]
    });
  }

  return newData;
}, []);

console.log(result);
