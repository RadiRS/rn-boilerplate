import { changeTheme, setDefaultTheme, ThemeState } from '@/store/theme';

/**
 ** since we are using redux toolkit that type of action is auto generated
 * so I think that is an option if we want to check the action `type`
 * */
test('should setup change theme action payload object', () => {
  const action = changeTheme(data);

  expect(action.payload).toEqual({
    theme: 'default',
    darkMode: false,
  });
});

test('should setup change theme action object', () => {
  const action = changeTheme(data);

  expect(action).toEqual({
    type: 'theme/changeTheme',
    payload: data,
  });
});

test('should setup change theme action object to dark mode', () => {
  const action = changeTheme(data);

  //* `expect.any(String)` => for handle dynamic type that generated from redux toolkit but expect to be a String
  expect(action).toEqual({
    type: expect.any(String),
    payload: data,
  });
});

test('should setup default theme action object', () => {
  const action = setDefaultTheme({});

  expect(action).toEqual({
    type: expect.any(String),
    payload: {},
  });
});

const data: ThemeState = {
  theme: 'default',
  darkMode: false,
};
