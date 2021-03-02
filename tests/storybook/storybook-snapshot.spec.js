import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'vue3',
  test: multiSnapshotWithOptions(),
  suite: 'Storybook Snapshots',
});