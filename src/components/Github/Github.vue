<template>
  <div>
    <label>Github username</label>
    <input type="text" v-model="username"><br><br>
    <button @click="searchGithubUser">Search Github User</button>
    <div v-html="error"></div>
    <div id="user_data" v-if="user_data!=''">
      <ul>
        <li><b>Username:</b> {{user_data.login}}</li>
        <li><b>Name:</b> {{user_data.name}}</li>
        <li><b>Location:</b> {{user_data.location}}</li>
        <li><b>Company:</b> {{user_data.company}}</li>
        <li><b>Followers:</b> {{user_data.followers}}</li>
        <li><b>Following:</b> {{user_data.following}}</li>
      </ul>
      <button @click="searchGithubRepos">Search Repos</button><br>
      <div v-if="user_repos.length!=0"> 
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Language</th>
              <th>License</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repos of user_repos">
              <td>{{repos.name}}</td>
              <td>{{repos.description}}</td>
              <td>{{repos.stargazers_count}}</td>
              <td>{{repos.forks_count}}</td>
              <td>{{repos.language}}</td>
              <td v-if=repos.license>{{repos.license.name}}</td>
            </tr>
          </tbody>
        </table>
        <button @click="prevPage" :disabled=isDisabled>Previous</button>
        <button @click="nextPage">Next</button>
      </div>
    </div>
  </div>
</template>
<script src="./Github.js"></script>