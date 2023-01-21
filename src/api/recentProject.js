/**
 * Mocking client-server processing
 */
const _Projects = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at natus ducimus maiores quam sint doloremque culpa a dignissimos recusandae!',
        image: './../src/assets/images/latest-project/1.jpg'
       },
       {
        id: 2,
        title: 'Nesciunt, natus sapiente eum aperiam aspernatur aliquam, minima cumque.',
        desc: 'Nesciunt, natus sapiente eum aperiam aspernatur aliquam, minima cumque inventore numquam fuga maxime autem eius sequi reprehenderit iste quasi doloremque quam labore,',
        image: './../src/assets/images/latest-project/2.jpg'
       },
       {
        id: 3,
        title: 'Tempora iure accusantium delectus ratione reiciendis saepe numquam quos.',
        desc: 'Tempora iure accusantium delectus ratione reiciendis saepe numquam quos possimus fuga et quam pariatur optio eos aut commodi, dolorum eveniet! Consequatur nam molestias odio!',
        image: './../src/assets/images/latest-project/3.jpg'
       },
       {
        id: 4,
        title: 'Tempora dolorem tempore atque maiores in deleniti officiis, animi rerum.',
        desc: 'Tempora dolorem tempore atque maiores in deleniti officiis, animi rerum. Delectus esse totam ducimus distinctio necessitatibus placeat accusantium quo explicabo repellat.',
        image: './../src/assets/images/latest-project/4.jpg'
       },
       {
        id: 5,
        title: 'Sit adipisci dignissimos dolor eum, quisquam est recusandae velit.',
        desc: 'Sit adipisci dignissimos dolor eum, quisquam est recusandae velit. Hic aliquid quasi dolorum minima nobis quod rerum, doloremque cum eos quidem ullam ut.',
        image: './../src/assets/images/latest-project/5.jpg'
       }
  ]
  
export default {
    getProjects (cb) {
      setTimeout(() => cb(_Projects), 100)
    },
}