<template>
  <div class="latest_news">
    <NewsList title="Latest Hacker News" :newsList="newsList" />
  </div>
</template>
<script>
import NewsList from "@/components/NewsList.vue";
import axios from 'axios';

export default {
  name: "Top",
  components: {
    NewsList
  },
  data() {
      return {
          newsIds: [],
          newsList: []
      }
  },
  mounted () {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => (this.newsIds = response));
  },
  methods: {
    getNewsList() {
      var vm = this;
      var count = 0;
      if (vm.newsIds.length == 0) return;
      for (var id of vm.newsIds.data) {
        console.log(id);
        if (count++ > 9) return;
        var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json";
        axios
        .get(url)
        .then(response => (vm.newsList.push(response)));
      }
    },
    compareArrays(arr1, arr2) {
      if (arr1.length != arr2.length) return false;
      for (var item of arr1) {
        var index = arr2.indexOf(item);
        if (index < 0) return false;
      }
      return true;
    }
  },
  watch: {
    newsIds(newIdList, oldIdList) {
      if (this.compareArrays(newIdList, oldIdList)) return;
      this.newsList = [];
      this.getNewsList();
    }
  }
};

</script>