<template>
  <v-container fluid fill-height class="pa-0 ma-0">
    <v-row class="align-self-stretch ma-0">
      <v-col cols="6">
        <v-container fluid fill-height class="pa-0 ma-0">
          <v-row class="ma-2 pa-2 justify-center align-self-stretch">
            <v-col cols="12" class="align-self-end px-10">
              <v-card flat>
                <p
                  class="display-3 .font-weight-thin text-sm-right grey--text text--darken-2"
                >
                  choose your location
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-row class="ma-auto" justify="center">
                <v-col cols="1"> </v-col>
                <v-col cols="5" class="d-flex justify-end px-0">
                  <v-card flat>
                    <v-menu
                      offset-y
                      transition="slide-y-transition"
                      flat
                      v-model="ex"
                      nudge-bottom="5"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          rounded
                          depressed
                          outlined
                          class="grey--text text--darken-3 justify-between"
                          v-on="on"
                          width="200"
                          height="50"
                        >
                          <v-icon>
                            mdi-home
                          </v-icon>
                          <span> {{ cityt }} </span>
                        </v-btn>
                      </template>
                      <v-card width="500px">
                        <v-row class="px-5 py-2">
                          <v-col
                            class="pa-2"
                            cols="3"
                            v-for="i in city"
                            :key="i"
                          >
                            <v-btn
                              depressed
                              block
                              rounded
                              color="grey lighten-2"
                              @click="
                                () => {
                                  cityt = i;
                                  city_area = 'your area';
                                  ex = false;
                                  ex2 = true;
                                  appear = true;
                                }
                              "
                            >
                              {{ i }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-menu>
                  </v-card>
                </v-col>
                <v-col cols="5">
                  <v-card flat>
                    <v-menu
                      offset-y
                      transition="slide-y-transition"
                      flat
                      v-model="ex2"
                      nudge-bottom="5"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          depressed
                          outlined
                          rounded
                          block
                          class="grey--text text--darken-3"
                          v-on="on"
                          height="50"
                        >
                          <v-icon>
                            mdi-map-marker
                          </v-icon>
                          <span>{{ city_area }}</span>
                        </v-btn>
                      </template>
                      <v-card flat width="600px" max-height="300" v-if="appear">
                        <v-row class="px-5 py-2 d-flex">
                          <v-col
                            class="pa-2"
                            v-for="i in alldata[cityt]"
                            :key="i"
                            cols="3"
                          >
                            <v-btn
                              rounded
                              depressed
                              color="grey lighten-2"
                              block
                              @click="
                                () => {
                                  city_area = `${i}`;
                                  ex2 = false;
                                }
                              "
                              >{{ i }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-menu>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
  </v-container>
</template>
<!-- 就git add. -->
<!-- git commit -m "這裡是你改ㄌ甚麼東西" -->
<!-- git push origin -->

<script>
export default {
  data: () => ({
    alldata: {},
    city: [],
    test: "",
    cityt: "your city",
    city_area: "your area",
    appear: false,
    ex: false,
    ex2: false,
  }),
  methods: {},
  created() {
    //取得天氣API資料
    let api =
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314";
    return this.axios.get(api).then((x) => {
      let num = Object.keys(x.data.records.location);
      for (let i = 0; i < num.length; i++) {
        if (
          x.data.records.location[i].parameter[0].parameterValue in this.alldata
        ) {
          let tmp = this.alldata[
            `${x.data.records.location[i].parameter[0].parameterValue}`
          ];

          tmp.push(`${x.data.records.location[i].locationName}`);
          this.alldata[
            `${x.data.records.location[i].parameter[0].parameterValue}`
          ] = tmp;
          console.log(this.alldata);
        } else {
          this.alldata[
            `${x.data.records.location[i].parameter[0].parameterValue}`
          ] = [`${x.data.records.location[i].locationName}`];
        }
      }
      console.log(this.alldata);
      this.city = Object.keys(this.alldata);
    });
  },
};
</script>
