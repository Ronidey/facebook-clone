const users = [
  {
    id: 1,
    firstName: 'Hinata',
    lastName: 'Shoyo',
    avatar: 'hinata.jpg',
    bio: "I'm gonna be the Ace",
    coverImage: 'hinata-cover.jpg',
    friends: [
      {
        id: 2,
        firstName: 'Kageyama',
        lastName: 'Tobio',
        avatar: 'kageyama.jpg',
        bio: 'I am gonna be the Best Setter'
      },
      {
        id: 3,
        firstName: 'Levi',
        lastName: 'Ackerman',
        avatar: 'levi.jpg',
        bio: 'Give up on your dreams and Die!!'
      },
      {
        id: 4,
        firstName: 'Asta',
        lastName: 'Staria',
        avatar: 'asta.jpg',
        bio: 'Never give up!'
      }
    ],
    fR: {
      sent: [],
      received: []
    },
    personalInfo: {
      working: 'karasuno vollyball team player',
      study: 'karasuno high school',
      lives: 'yukigaoka',
      relationship: 'single',
      birthday: 'june 21, 1996'
    }
  },
  {
    id: 2,
    firstName: 'Kageyama',
    lastName: 'Tobio',
    avatar: 'kageyama.jpg',
    bio: 'I am gonna be the Best Setter',
    coverImage: 'kageyama-cover.jpg',
    friends: [
      {
        id: 1,
        firstName: 'Hinata',
        lastName: 'Shoyo',
        avatar: 'hinata.jpg',
        bio: "I'm gonna be the Ace"
      },
      {
        id: 5,
        firstName: 'Houtarou',
        lastName: 'Oreki',
        avatar: 'houtarou.jpg',
        bio: "If i don't have to i'm not going to, if i have to i'll do it as quickly as possible."
      }
    ],
    fR: {
      sent: [],
      received: []
    },
    personalInfo: {
      working: 'karasuno vollyball team setter',
      study: 'karasuno high school',
      lives: 'yukigaoka',
      relationship: 'single',
      birthday: 'Dec 22, 1996'
    }
  },
  {
    id: 3,
    firstName: 'Levi',
    lastName: 'Ackerman',
    coverImage: 'levi-cover.jpg',
    bio: 'Give up on your dreams and Die!!',
    avatar: 'levi.jpg',
    friends: [
      {
        id: 1,
        firstName: 'Hinata',
        lastName: 'Shoyo',
        avatar: 'hinata.jpg',
        bio: "I'm gonna be the Ace"
      },
      {
        id: 4,
        firstName: 'Asta',
        lastName: 'Staria',
        avatar: 'asta.jpg',
        bio: 'Never give up!'
      },
      {
        id: 5,
        firstName: 'Houtarou',
        lastName: 'Oreki',
        avatar: 'houtarou.jpg',
        bio: "If i don't have to i'm not going to, if i have to i'll do it as quickly as possible."
      }
    ],
    fR: {
      sent: [],
      received: []
    },
    personalInfo: {
      working: 'soldier',
      lives: 'shiganshina',
      relationship: 'single',
      birthday: 'Dec 25, 850'
    }
  },
  {
    id: 4,
    firstName: 'Asta',
    lastName: 'Staria',
    avatar: 'asta.jpg',
    bio: 'Never give up!',
    coverImage: 'asta-cover.jpg',
    friends: [
      {
        id: 1,
        firstName: 'Hinata',
        lastName: 'Shoyo',
        avatar: 'hinata.jpg',
        bio: "I'm gonna be the Ace"
      },
      {
        id: 3,
        firstName: 'Levi',
        lastName: 'Ackerman',
        avatar: 'levi.jpg',
        bio: 'Give up on your dreams and Die!!'
      },
      {
        id: 5,
        firstName: 'Houtarou',
        lastName: 'Oreki',
        avatar: 'houtarou.jpg',
        bio: "If i don't have to i'm not going to, if i have to i'll do it as quickly as possible."
      }
    ],
    fR: {
      sent: [],
      received: []
    },
    personalInfo: {
      working: 'member of black bull',
      lives: 'clover kingdom',
      relationship: 'single'
    }
  },
  {
    id: 5,
    firstName: 'Houtarou',
    lastName: 'Oreki',
    avatar: 'houtarou.jpg',
    bio: "If i don't have to i'm not going to, if i have to i'll do it as quickly as possible.",
    coverImage: 'houtarou-cover.jpg',
    friends: [
      {
        id: 2,
        firstName: 'Kageyama',
        lastName: 'Tobio',
        avatar: 'kageyama.jpg',
        bio: 'I am gonna be the Best Setter'
      },
      {
        id: 3,
        firstName: 'Levi',
        lastName: 'Ackerman',
        avatar: 'levi.jpg',
        bio: 'Give up on your dreams and Die!!'
      },
      {
        id: 4,
        firstName: 'Asta',
        lastName: 'Staria',
        avatar: 'asta.jpg',
        bio: 'Never give up!'
      }
    ],
    fR: {
      sent: [],
      received: []
    },
    personalInfo: {
      working: 'highschool student',
      study: 'Kamiyama High School',
      lives: 'Kamiyama',
      relationship: 'single',
      birthday: 'Apr 28, 1984'
    }
  }
];

export default users;
