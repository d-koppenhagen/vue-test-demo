import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the component completely', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper).toMatchSnapshot();
  })
})
