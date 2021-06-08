import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import ModalCreatePost from './components/CreatePost/ModalCreatePost';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

import users from './dev-data/usersData';
import posts from './dev-data/postsData';
import ReactionsListModal from './components/ReactionsListModal/ReactionsListModal';
import Chats from './components/Chats/Chats';
import Friends from './components/Friends/Friends';
import ChatPage from './components/Chats/ChatPage';
import UserProfile from './components/Profile/UserProfile';
import MyProfile from './components/Profile/MyProfile';

function App() {
  const initialState = {
    createPostModal: false,
    reactionsList: {
      display: false,
      postId: null
    },
    postToEdit: null,
    user: users[0],
    posts,
    users,
    chats: []
  };

  const getUserById = (id) => users.find((u) => u.id == id);
  const getPostById = (id) => posts.find((p) => p.id == id);

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
        user.fR.sent = user.fR.sent.filter(
          (userId) => userId !== action.payload
        );

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
        const chats = JSON.parse(JSON.stringify(action.payload));
        chats.push(action.payload);

        return { ...state, chats };
      }

      case 'chatMinimize': {
        let chats = JSON.parse(JSON.stringify(action.payload));
        chats = chats.map((c) => {
          if (c.user.id == action.payload) {
            c.minimize = true;
          }
          return c;
        });

        return { ...state, chats };
      }

      case 'removeChat': {
        let chats = JSON.parse(JSON.stringify(action.payload));
        chats = chats.filter((c) => c.user.id != action.payload);

        return { ...state, chats };
      }

      case 'chatMaximize': {
        let chats = JSON.parse(JSON.stringify(action.payload));
        chats = chats.map((c) => {
          if (c.user.id == action.payload) {
            c.minimize = false;
          }
          return { ...state, chats };
        });
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

      default:
        return state;
    }
  };

  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <AppContext.Provider
        value={{ appState, appDispatch, getPostById, getUserById }}
      >
        <Header />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/friends'>
            <Friends />
          </Route>
          <Route path='/chat'>
            <ChatPage />
          </Route>
          <Route path='/my-profile'>
            <MyProfile />
          </Route>
          <Route path='/users/:id/profile'>
            <UserProfile />
          </Route>
        </Switch>
        {appState.createPostModal && <ModalCreatePost />}
        {appState.reactionsList.display && <ReactionsListModal />}
        {appState.chats.length > 0 && <Chats chats={appState.chats} />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
