import App from "../src/App.vue";
import HelloWorld from "../src/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("App.vue", () => {
  it("renders the Vite logo", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find(".logo").exists()).toBe(true);
  });

  it("renders the Vue logo", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find(".logo.vue").exists()).toBe(true);
  });

  it("renders the HelloWorld component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });
});
