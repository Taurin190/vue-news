<template>
    <div>
        <h1> {{ title }} </h1>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <span>
                    <a :href="news.url">{{ news.title }}</a>
                </span>
            </li>
        </ul>
        <div v-if="!newsList.length">
            No Contents
        </div>
        <button>Reload</button>
    </div>
</template>
<script>
export default {
    name: 'NewsList',
    props: {
        title: String
    },
    data() {
        return {
            newsList: [
                {
  "by" : "dhouston",
  "descendants" : 71,
  "id" : 8863,
  "kids" : [ 9224, 8917, 8952, 8884, 8887, 8869, 8958, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
  "score" : 104,
  "time" : 1175714200,
  "title" : "My YC app: Dropbox - Throw away your USB drive",
  "type" : "story",
  "url" : "http://www.getdropbox.com/u/2/screencast.html"
}
            ]
        }
    }
}
</script>
<style>
ul {
    list-style: none;
    padding-inline-start: 0;
}
</style>