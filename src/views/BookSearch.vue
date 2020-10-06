<template>
  <div id="search">
    <b-form inline class="mt-3">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend>
          <b-button variant="c-highlight"
            ><b-icon icon="search" @click="onclick"></b-icon
          ></b-button>
        </b-input-group-prepend>
        <b-form-input
          type="search"
          placeholder="Search terms"
          v-model="keyword"
        ></b-form-input>
      </b-input-group>
    </b-form>
    <hr />
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "book-search",
  components: {},
  data() {
    return {
      keyword: "vuejs",
      books: [],
    };
  },
  methods: {
    onclick: function() {
      this.$http(
        "https://www.googleapis.com/books/v1/volumes?q=" + this.keyword
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.books = [];
          for (let b of data.items) {
            let authors = b.volumeInfo.authors;
            let price = b.saleInfo.listPrice;
            let img = b.volumeInfo.imageLinks;
            this.books.push({
              id: b.id,
              title: b.volumeInfo.title,
              author: authors ? authors.join(",") : "",
              price: price ? price.amount : "-",
              publisher: b.volumeInfo.publisher,
              published: b.volumeInfo.publishedDate,
              image: img ? img.smallThumbnail : "",
            });
          }
        });
    },
  },
};
</script>
