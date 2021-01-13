<template>
  <div>
    <form @submit="submit">
      <div>
        <label>Username</label>
        <input type="text" class="form-control" v-model="user.username">
      </div>
      <div>
        <label>Password</label>
        <input type="password" class="form-control" v-model="user.password">
      </div>
      <div>
        <label>E-Mail</label>
        <input type="text" class="form-control" v-model="user.email">
      </div>
      <button class="btn btn-success" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import UserService from '../service/UserService';
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        email: ''
      }
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      UserService.createUser(this.user)
        .then(response => {
          this.$router.push('/user/' + response.data.id);
        });
    },
  }
};
</script>

<style scoped>

</style>