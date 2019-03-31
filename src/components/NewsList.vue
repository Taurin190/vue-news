<template>
    <div>
        <h1> {{ title }} </h1>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <span>
                    <a :href="news.data.url">{{ news.data.title }}</a>
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
        title: String,
        newsList: Array
    },
    computed: {
        newsObjects : function() {

        }
    }
};
</script>
<style>
ul {
    list-style: none;
    padding-inline-start: 0;
}
</style>