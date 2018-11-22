import axios from 'axios'

export default {
  name: 'github',
  data() {
    return {
      username:'',
      error: '',
      user_data: '',
      user_repos: [],
      repo_next: 2,
      repo_prev: 0
    }
  },
  methods: {
    searchGithubUser() {
      this.error = '';
      this.user_data = '';
      axios.get(this.$store.getters.getUser(this.username)).then(response => {
        this.user_data = response.data
      }).catch(error => {
        let error_content = error.response.status + '<br>';
        error_content += error.response.data.message;
        this.error = error_content
      })
    },
    searchGithubRepos() {
      this.user_repos = []
      this.getRepoData(this.username, 1)
    },
    getRepoData(username,page){
      axios.get(this.$store.getters.getRepos(username,page)).then(response => {
        this.user_repos = response.data
      })
    },
    nextPage(){
      this.getRepoData(this.username, this.repo_next)
      this.repo_next += 1
      this.repo_prev += 1
    },
    prevPage(){
      if(this.repo_prev >= 1){
        console.log(this.repo_prev)
        this.getRepoData(this.username, this.repo_prev)
        this.repo_next -= 1
        this.repo_prev -= 1
      }
    },
  },
  computed: {
    isDisabled(){
      return this.repo_prev == 0 ? true:false
    }
  }
}