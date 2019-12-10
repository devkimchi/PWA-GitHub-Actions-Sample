import Vue from 'vue'
import Index from './Index'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe ('Home', () => {
  let vm;

  beforeEach(() => {
    vm = new Vue(Index).$mount();
  });

  it ('should be Hello, World!', () => {
    expect(vm.$refs.greeting.innerHTML).to.equal('Hello, World!');
  });
});
