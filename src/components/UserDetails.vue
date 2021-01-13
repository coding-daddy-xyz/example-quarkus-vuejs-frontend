<template>
  <div>
    <div>
      <label>Username:</label>
      <span>{{ user.username }}</span>
    </div>
    <div>
      <label>E-Mail:</label>
      <span>{{ user.email }}</span>
    </div>
  </div>
</template>

<script>
import UserService from '../service/UserService';
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    };
  },
  methods: {
    getUser(id) {
      UserService.getUserById(id)
        .then(response => {
          this.user = response.data;
        });
    }
  },
  created() {
    this.getUser(this.$route.params.id);
  }
};
</script>

<style scoped>

</style>