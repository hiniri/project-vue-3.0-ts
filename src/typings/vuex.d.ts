import vuex from 'vuex'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $store: typeof vuex
  }
}
