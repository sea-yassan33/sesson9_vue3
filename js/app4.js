const app4 = Vue.createApp({
  data: () => ({
    largeClass: {
      'large': true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: true
  })
})
app4.mount('#app4')