<template>
  <div>
    {{token}}
    <hr>
    {{items}}
    <b-table :items="items"/>
  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi = new Strapi("http://localhost:1337");

export default {
  data() {
    return {
      token: "",
      items: []
    };
  },
  mounted() {
    strapi.login("demo@demo123.com", "demo123").then(({ jwt }) => {
      this.$set(this, "token", jwt);
      console.log(jwt);
    });
  },
  watch: {
    token(val) {
      strapi
        .request("post", "/graphql", {
          headers: {
            Authorization: `Bearer ${val}`
          },
          data: {
            query: `{
            products {
              id
              name
              quantity
              description
            }
          }
          `
          }
        })
        .then(({ data }) => {
          console.log(data);
          this.items = data.products;
        });
    }
  }
};
</script>
