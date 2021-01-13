<template>
  <table>
    <caption>Users List</caption>
    <thead>
      <tr>
        <th>Username</th>
        <th>E-Mail</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <!--<td><router-link to="/user/{{user.id}}" tag="button">Details</router-link></td>-->
      </tr>
    </tbody>
  </table>
</template>

<script>
import UserService from '../service/UserService';
export default {
  data() {
    return {
      users: {
        user: {
          id: '',
          username: '',
          email: ''
        }
      }
    };
  },
  methods: {
    getUsers() {
      UserService.getUsers()
        .then(response => {
          this.users = response.data;
        });
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style scoped>

</style>