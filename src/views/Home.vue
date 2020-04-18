<template>
  <v-container fill-height class="d-flex justify-center align-stretch">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-card
          color="blue"
          depressed
          to="/default"
          height="500"
          width="700"
          class="d-flex justify-center align-center"
        >
          <v-row>
            <v-col>
              <div>
                <p class="display-3 text-center font-weight-bold">data</p>
                <p class="display-3 text-center font-weight-bold">workplace</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-card
          color="purple"
          depressed
          to="/tt"
          height="500"
          width="700"
          class="d-flex justify-center align-center"
        >
          <v-row>
            <v-col>
              <div>
                <p class="display-3 text-center font-weight-bold">template</p>
                <p class="display-3 text-center font-weight-bold">workplace</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
