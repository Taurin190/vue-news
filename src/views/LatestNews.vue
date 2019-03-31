<template>
  <div class="latest_news">
    <NewsList title="Latest Hacker News" />
  </div>
</template>
<script>
import NewsList from "@/components/NewsList.vue";

export default {
  name: "latest",
  components: {
    NewsList
  },
  data() {
      return {
          newsIds: [],
          newsList: []
      }
  },
  methods: {

  },
  watch: {
      
  }
};
</script>