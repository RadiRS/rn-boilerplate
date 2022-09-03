const waitToNavigate = duration =>
  new Promise(resolve => setTimeout(() => resolve(), duration));

describe('Example E2E Testing', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should have home screen', async () => {
    await waitToNavigate(1300);
    await expect(element(by.text('Header Section'))).toBeVisible();
  });

  it('should press change theme between dark and light', async () => {
    await element(by.id('dark-button')).tap();
    await element(by.id('light-button')).tap();
  });

  it('should navigate between tab screen', async () => {
    await element(by.text('Preview')).tap();
    await element(by.text('User')).tap();
    await element(by.text('Home')).tap();
  });
});
