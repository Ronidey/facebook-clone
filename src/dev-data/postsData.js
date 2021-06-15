const posts = [
  {
    id: 1,
    text: 'Hey kageyama! Did you see my block',
    img: 'hinata-defence.jpg',
    author: {
      id: 1,
      firstName: 'Hinata',
      lastName: 'Shoyo',
      avatar: 'hinata.jpg'
    },
    reactions: [
      {
        user: {
          id: 1,
          firstName: 'Hinata',
          lastName: 'Shoyo',
          avatar: 'hinata.jpg'
        },
        reaction: 'like'
      },
      {
        user: {
          id: 2,
          firstName: 'Kageyama',
          lastName: 'Tobio',
          avatar: 'kageyama.jpg'
        },
        reaction: 'laugh'
      },
      {
        user: {
          id: 3,
          firstName: 'Levi',
          lastName: 'Ackerman',
          avatar: 'levi.jpg'
        },
        reaction: 'laugh'
      },
      {
        user: {
          id: 4,
          firstName: 'Asta',
          lastName: 'Staria',
          avatar: 'asta.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 5,
          firstName: 'Houtarou',
          lastName: 'Oreki',
          avatar: 'houtarou.jpg'
        },
        reaction: 'like'
      }
    ],
    shareCount: 1,
    comments: [
      {
        id: 'comment1',
        user: {
          id: 2,
          firstName: 'Kageyama',
          lastName: 'Tobio',
          avatar: 'kageyama.jpg'
        },
        comment: "No i didn't"
      },
      {
        id: 'comment2',
        user: {
          id: 1,
          firstName: 'Hinata',
          lastName: 'Shoyo',
          avatar: 'hinata.jpg'
        },
        comment: "But i heard you said 'Nice block'"
      },
      {
        id: 'comment3',
        user: {
          id: 2,
          firstName: 'Kageyama',
          lastName: 'Tobio',
          avatar: 'kageyama.jpg'
        },
        comment: 'I never said that'
      },
      {
        id: 'comment4',
        user: {
          id: 1,
          firstName: 'Hinata',
          lastName: 'Shoyo',
          avatar: 'hinata.jpg'
        },
        comment: 'You liar!'
      }
    ]
  },
  {
    id: 2,
    text: 'Today is our match with Siratorizawa, wish us luck guys!',
    img: '',
    author: {
      id: 1,
      firstName: 'Hinata',
      lastName: 'Shoyo',
      avatar: 'hinata.jpg'
    },
    reactions: [
      {
        user: {
          id: 1,
          firstName: 'Hinata',
          lastName: 'Shoyo',
          avatar: 'hinata.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 2,
          firstName: 'Kageyama',
          lastName: 'Tobio',
          avatar: 'kageyama.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 3,
          firstName: 'Levi',
          lastName: 'Ackerman',
          avatar: 'levi.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 4,
          firstName: 'Asta',
          lastName: 'Staria',
          avatar: 'asta.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 5,
          firstName: 'Houtarou',
          lastName: 'Oreki',
          avatar: 'houtarou.jpg'
        },
        reaction: 'like'
      }
    ],
    comments: []
  },
  {
    id: 3,
    text: 'Hello guys! i am the official setter of Karasuno Vollyball Team',
    img: 'kageyama-setting-ball.jpg',
    author: {
      id: 2,
      firstName: 'Kageyama',
      lastName: 'Tobio',
      avatar: 'kageyama.jpg'
    },
    reactions: [
      {
        user: {
          id: 2,
          firstName: 'Kageyama',
          lastName: 'Tobio',
          avatar: 'kageyama.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 3,
          firstName: 'Levi',
          lastName: 'Ackerman',
          avatar: 'levi.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 4,
          firstName: 'Asta',
          lastName: 'Staria',
          avatar: 'asta.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 5,
          firstName: 'Houtarou',
          lastName: 'Oreki',
          avatar: 'houtarou.jpg'
        },
        reaction: 'like'
      }
    ],
    comments: []
  },
  {
    id: 4,
    author: {
      id: 5,
      firstName: 'Houtarou',
      lastName: 'Oreki',
      avatar: 'houtarou.jpg'
    },
    isShared: true,
    post: {
      id: 1,
      text: 'Hey kageyama! Did you see my block',
      img: 'hinata-defence.jpg',
      author: {
        id: 1,
        firstName: 'Hinata',
        lastName: 'Shoyo',
        avatar: 'hinata.jpg'
      }
    },
    reactions: [],
    comments: []
  },
  {
    id: 5,
    text: 'One day I am gonna be the Wizard King',
    img: 'asta-beast-mode.jpg',
    author: {
      id: 4,
      firstName: 'Asta',
      lastName: 'Staria',
      avatar: 'asta.jpg'
    },
    reactions: [
      {
        user: {
          id: 2,
          firstName: 'Kageyama',
          lastName: 'Tobio',
          avatar: 'kageyama.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 3,
          firstName: 'Levi',
          lastName: 'Ackerman',
          avatar: 'levi.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 4,
          firstName: 'Asta',
          lastName: 'Staria',
          avatar: 'asta.jpg'
        },
        reaction: 'love'
      },
      {
        user: {
          id: 5,
          firstName: 'Houtarou',
          lastName: 'Oreki',
          avatar: 'houtarou.jpg'
        },
        reaction: 'like'
      }
    ],
    comments: []
  }
];

export default posts;
