<template>
  <div>
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <form>
              <fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Article Title"
                    v-model="article.title"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="What's this article about?"
                    v-model="article.description"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    v-model="article.body"
                  ></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter tags"
                    v-model="tagText"
                    @keyup.enter="onAddTag"
                  />
                  <div class="tag-list">
                    <span class="tag-default tag-pill ng-binding ng-scope" v-for="(v, i) in article.tagList" :key="i">
                      <i class="ion-close-round" @click="onDeleteTag(i)">{{v}}</i>
                    </span>
                  </div>
                </fieldset>
                <button
                  class="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  @click.prevent="onCreate"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createArticle} from '@/api/article'

export default {
  name: "editorPage",
  // 渲染页面时候会自动调用这个中间件模块
  middleware: 'authenticated',
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      tagText: '',
    }
  },
  methods: {
    async onCreate() {
      const { data } = await createArticle({
        article: this.article
      })

      this.$router.push('/article/'+data.article.slug);
    },
    onAddTag() {
      const tagText = this.tagText;
      const { tagList } = this.article;
      if (!tagText.length) {
        return
      }

      if (tagList.includes(tagText)) {
        return
      }

      tagList.push(tagText);
      this.tagText = '';
    },
    onDeleteTag(i) {
      this.article.tagList.splice(i, 1);
    }
  }
};
</script>

<style scoped>
</style>