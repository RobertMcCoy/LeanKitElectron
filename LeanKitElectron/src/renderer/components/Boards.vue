<template>
    <div id="wrapper">
        <template v-for="board in boards">
            <div :key="board.id">{{ board.title }}</div>
        </template>
    </div>
</template>


<script>
export default {
  name: "boards",
  props: ["boards"],
  data: function () {
    return {};
  },
  methods: {},
  beforeMount: async () => {}
};
</script>

<style lang="scss">
@import "../style/main";
</style>
