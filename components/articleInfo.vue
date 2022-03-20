<template>
  <div>
    <div class="article-meta">
      <a href=""><img :src="article.author.image" /></a>
      <div class="info">
        <a href="" class="author">{{article.author.username}}</a>
        <span class="date">{{article.createAt}}</span>
      </div>
      <button class="btn btn-sm btn-outline-secondary">
        <i class="ion-plus-round"></i>
        &nbsp; {{article.author.username}} <span class="counter"></span>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary">
        <i class="ion-heart"></i>
        &nbsp; Favorite Post <span class="counter">(({{article.favoritesCount}}))</span>
      </button>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'articleInfo',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>