import reducer, {
  changeTheme,
  setDefaultTheme,
  ThemeState,
} from '@/store/theme';

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
  const action = changeTheme({ darkMode: true });

  //* `expect.any(String)` => for handle dynamic type that generated from redux toolkit but expect to be a String
  expect(action).toEqual({
    type: expect.any(String),
    payload: { darkMode: true },
  });
});

test('should setup default theme action object when value is undefined', () => {
  const action = setDefaultTheme({ theme: undefined, darkMode: undefined });

  expect(action).toEqual({
    type: expect.any(String),
    payload: {},
  });
});

//* reducer test
test('should set initial theme value', () => {
  const result = reducer(undefined, { type: undefined });

  expect(result).toEqual({ ...data, darkMode: null });
});

test('should set darkmode to true', () => {
  const result = reducer(data, changeTheme({ darkMode: true }));

  expect(result).toEqual({ ...data, darkMode: true });
});

test('should set darkmode to false', () => {
  const result = reducer(data, changeTheme({ darkMode: false }));

  expect(result).toEqual({ ...data, darkMode: false });
});

const data: ThemeState = {
  theme: 'default',
  darkMode: false,
};
