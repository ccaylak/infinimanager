<template>
  <b-card
    border-variant="secondary"
    :header="title.toUpperCase()"
    header-border-variant="secondary"
    align="center"
  >
    <b-row>
      <b-col>
        <b-card-title>{{ description }}</b-card-title>
      </b-col>
      <b-col>
        <b-button>
          <b-icon-trash-fill></b-icon-trash-fill>
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "PlatformversionWidget",
  props: {
    title: String,
    description: String
  }
};
</script>
