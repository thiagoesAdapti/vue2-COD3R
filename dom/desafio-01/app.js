new Vue({
  el: '#desafio',
  data: {
    name: 'Thiago',
    age: 24,
    img: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1-768x512.png',
    alt: 'Cachorro da raça Golden Retriever de cor amarela feliz'
  },
  methods: {
    multiply() {
      return this.age * 3
    }
  }
})