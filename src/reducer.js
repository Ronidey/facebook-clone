import { v4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'showCreateModal': {
      return { ...state, createPostModal: true };
    }

    case 'hideCreateModal': {
      return { ...state, createPostModal: false };
    }

    case 'editPost': {
      return { ...state, postToEdit: action.payload, createPostModal: true };
    }

    case 'cancelEditPost': {
      return { ...state, postToEdit: null, createPostModal: false };
    }

    case 'createPost': {
      const posts = [...state.posts];
      posts.unshift(action.payload);

      return { ...state, posts, createPostModal: false };
    }

    case 'updatePost': {
      const posts = JSON.parse(JSON.stringify(state.posts));
      for (let post of posts) {
        if (post.id == action.payload.id) {
          post.text = action.payload.text;
        }
      }

      return { ...state, posts, createPostModal: false };
    }

    case 'deletePost': {
      const posts = state.posts.filter((p) => p.id !== action.payload);
      return { ...state, posts };
    }

    case 'addReaction': {
      const posts = JSON.parse(JSON.stringify(state.posts));

      let userReaction;
      for (let post of posts) {
        if (post.id == action.payload.postId) {
          for (let reactionObj of post.reactions) {
            if (reactionObj.user.id == state.user.id) {
              userReaction = reactionObj;
            }
          }
        }
      }

      // If user already reacted, update reaction
      if (userReaction) {
        userReaction.reaction = action.payload.reaction;
      } else {
        // Else ADD New reaction
        for (let post of posts) {
          if (post.id == action.payload.postId) {
            post.reactions.push({
              user: {
                id: state.user.id,
                firstName: state.user.firstName,
                lastName: state.user.lastName,
                avatar: state.user.avatar
              },
              reaction: action.payload.reaction
            });
          }
        }
      }

      return { ...state, posts };
    }

    case 'removeReaction': {
      const posts = JSON.parse(JSON.stringify(state.posts));

      for (let post of posts) {
        if (post.id == action.payload) {
          post.reactions = post.reactions.filter(
            (p) => p.user.id !== state.user.id
          );
        }
      }
      return { ...state, posts };
    }

    case 'showReactionsList': {
      return {
        ...state,
        reactionsList: { display: true, postId: action.payload }
      };
    }

    case 'hideReactionsList': {
      state.reactionsList.display = false;
      state.reactionsList.postId = null;
      return { ...state, reactionsList: { display: false, postId: null } };
    }

    case 'sendFriendReq': {
      const user = JSON.parse(JSON.stringify(state.user));
      user.fR.sent.push(action.payload);

      return { ...state, user };
    }

    case 'cancelFriendReq': {
      const user = JSON.parse(JSON.stringify(state.user));
      user.fR.sent = user.fR.sent.filter((userId) => userId !== action.payload);

      return { ...state, user };
    }

    case 'friendReqAccept': {
      const user = JSON.parse(JSON.stringify(state.user));
      user.friends.push(action.payload.id);

      return { ...state, user };
    }

    case 'unfriend': {
      const friends = state.user.friends.filter((f) => {
        return f.id != action.payload;
      });

      const users = JSON.parse(JSON.stringify(state.users));

      for (let user of users) {
        if (user.id == action.payload) {
          user.friends = state.user.friends.filter((f) => {
            return f.id != state.user.id;
          });
        }
      }

      return { ...state, user: { ...state.user, friends }, users };
    }

    case 'addNewChat': {
      const chats = JSON.parse(JSON.stringify(state.chats));
      chats.push(action.payload);

      return { ...state, chats };
    }

    case 'chatMinimize': {
      let chats = JSON.parse(JSON.stringify(state.chats));
      chats = chats.map((c) => {
        if (c.user.id == action.payload) {
          c.minimize = true;
        }
        return c;
      });

      return { ...state, chats };
    }

    case 'removeChat': {
      let chats = JSON.parse(JSON.stringify(state.chats));
      chats = chats.filter((c) => c.user.id != action.payload);

      return { ...state, chats };
    }

    case 'chatMaximize': {
      let chats = JSON.parse(JSON.stringify(state.chats));

      chats = chats.map((c) => {
        if (c.user.id == action.payload) {
          c.minimize = false;
        }
        return c;
      });

      return { ...state, chats };
    }

    case 'updateBio': {
      return { ...state, user: { ...state.user, bio: action.payload } };
    }

    case 'updatePersonalInfo': {
      return {
        ...state,
        user: { ...state.user, personalInfo: action.payload }
      };
    }

    case 'sharePost': {
      const posts = JSON.parse(JSON.stringify(state.posts));
      posts.unshift({
        id: v4(),
        author: {
          ...state.user
        },
        post: action.payload,
        reactions: [],
        comments: [],
        isShared: true
      });

      return { ...state, posts: posts };
    }

    case 'addComment': {
      let posts = JSON.parse(JSON.stringify(state.posts));
      posts = posts.map((p) => {
        if (p.id == action.payload.postId) {
          p.comments.push({
            id: v4(),
            user: state.user,
            comment: action.payload.comment
          });
        }
        return p;
      });

      return { ...state, posts };
    }

    case 'login': {
      const user = {
        id: v4(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        avatar: 'user-default.jpg',
        bio: 'Hey there! i am using facebook',
        coverImage: 'cover-default.jpg',
        friends: [state.users[0], state.users[1], state.users[2]],
        fR: {
          sent: [],
          received: []
        },
        personalInfo: {
          working: 'wroking at facebook',
          relationship: 'single'
        }
      };
      return { ...state, user, isLoggedIn: true };
    }

    default:
      return state;
  }
};

export default reducer;
