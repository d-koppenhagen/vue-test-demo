import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = ({ context : { kind, story }, url }) => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  }
}
const beforeScreenshot = (page, { context : { kind, story }, url }) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 200)
  )
}

const afterScreenshot = ({ image, context }) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 200)
  )
}

initStoryshots({
  framework: 'vue3',
  test: imageSnapshot({
    getMatchOptions,
    beforeScreenshot,
    afterScreenshot
  }),
  suite: 'Storybook Visual',
});