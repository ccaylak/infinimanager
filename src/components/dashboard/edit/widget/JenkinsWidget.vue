<template>
  <b-card-group columns>
    <b-card
      border-variant="secondary"
      v-bind:header="title"
      header-border-variant="secondary"
      align="center"
    >
      <b-row>
        <b-col>
          <b-card-title>Title</b-card-title>
        </b-col>
        <b-col>
          <b-button>
            <b-icon-trash-fill></b-icon-trash-fill>
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "JenkinsWidget",
  props: {
    title: String,
    url: String
  },
};
</script>
