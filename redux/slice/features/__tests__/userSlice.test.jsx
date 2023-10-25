import userReducer, { loginUser, logoutUser } from '../userSlice';

describe('userSlice', () => {
  it('should log in the user', () => {
    const initialState = { currentUser: null };
    const user = { username: "Nico", email: "nico@gmail.com", photo:""  };
    const action = loginUser(user);

    const newState = userReducer(initialState, action);

    expect(newState.currentUser).toEqual(user);
  });

  it('should log out the user', () => {
    const initialState = { currentUser: { username: "Nico", email: "nico@gmail.com", photo:""  } };
    const action = logoutUser();

    const newState = userReducer(initialState, action);

    expect(newState.currentUser).toBeNull();
  });
});
