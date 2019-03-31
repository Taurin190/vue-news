<template>
  <div class="latest_news">
    <NewsList title="Latest Hacker News" :newsList="newsList" />
  </div>
</template>
<script>
import NewsList from "@/components/NewsList.vue";
import axios from 'axios';

export default {
  name: "latest",
  components: {
    NewsList
  },
  data() {
      return {
          newsIds: []
        //   newsList: []
      }
  },
  mounted () {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => (this.newsIds = response));
  },
  computed: {
      newsList() {
          var list = [];
          var count = 0;
          if (this.newsIds.length == 0) return list;
          for (var id of this.newsIds.data) {
              console.log(id);
              if (count++ > 9) return list;
              var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json";
              axios
              .get(url)
              .then(response => (list.push(response)));
          }
      }
  },
  methods: {

  }
//   watch: {
//       newsIds(idList, oldIdList) {
//           for (var id of idList.data) {
//               console.log(id);
//               if (this.newsList.length > 10) return;
//               var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json";
//               axios
//               .get(url)
//               .then(response => (this.newsList.push(response)));
//           }
//       }
//   }
};
</script>