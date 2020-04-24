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
              <v-row class="ma-auto justify-end">
                <v-col cols="3"></v-col>
                <v-col cols="4">
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
                          block
                          class="grey--text text--darken-3 justify-between"
                          v-on="on"
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
                              color="grey lighten-3"
                              @click="
                                () => {
                                  cityt = i;
                                  city_area = 'your area';
                                  area = Object.keys(alldata[cityt]);
                                  ex = false;
                                  ex2 = true;
                                  appear = false;
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
                <v-col cols="5" class="pl-10">
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
                      <v-card flat max-height="300" max-width="600" v-if="ex2">
                        <v-row class="px-5 py-2">
                          <v-col
                            class="pa-2"
                            v-for="i in area"
                            :key="i"
                            cols="3"
                          >
                            <v-btn
                              rounded
                              depressed
                              color="grey lighten-3"
                              block
                              @click="
                                () => {
                                  city_area = `${i}`;
                                  ex2 = false;
                                  appear = true;
                                  set();
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
      <v-col cols="6" class="d-flex align-center">
        <v-slide-x-reverse-transition hide-on-leave>
          <v-container fluid fill-height class="pa-0" v-show="appear">
            <v-row class="align-self-stretch">
              <v-col cols="12" class="d-flex align-center ma-0 pa-0">
                <v-row>
                  <v-col cols="12"></v-col>
                  <v-col cols="12"></v-col>
                  <v-col cols="12" class="d-flex justify-center display-3">
                    {{ cityt }}
                  </v-col>
                  <v-col> </v-col>
                  <v-col cols="12" class="d-flex justify-center display-3">{{
                    city_area
                  }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="5" class="d-flex justify-end">
                    <v-icon>
                      mdi-thermometer-chevron-up
                    </v-icon>
                  </v-col>
                  <v-col cols="2">
                    <span>
                      max_temp :
                    </span>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-start">
                    <span>{{ d_tx }}</span>
                  </v-col>
                  <v-col cols="3"> </v-col>
                  <v-col cols="5" class="d-flex justify-end">
                    <v-icon>
                      mdi-thermometer-chevron-down
                    </v-icon>
                  </v-col>
                  <v-col cols="2">
                    <span>
                      min_temp :
                    </span>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-start">
                    <span>{{ d_tn }}</span>
                  </v-col>
                  <v-col cols="3"> </v-col>
                  <v-col cols="5" class="d-flex justify-end">
                    <v-icon>
                      mdi-water-outline
                    </v-icon>
                  </v-col>
                  <v-col cols="2">
                    <span>
                      rv_humd :
                    </span>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-start">
                    <span>{{ humd }}</span>
                  </v-col>
                  <v-col cols="3"> </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-slide-x-reverse-transition>
      </v-col>
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
    area: [],
    test: "",
    cityt: "your city",
    city_area: "your area",
    appear: false,
    ex: false,
    ex2: false,
    humd: 0,
    d_tx: 0,
    d_tn: 0
  }),
  methods: {
    set() {
      this.humd = this.alldata[`${this.cityt}`][`${this.city_area}`].HUMD;
      this.d_tx = this.alldata[`${this.cityt}`][`${this.city_area}`].D_TX;
      this.d_tn = this.alldata[`${this.cityt}`][`${this.city_area}`].D_TN;
    }
  },
  created() {
    //取得天氣API資料
    let api =
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314";
    return this.axios.get(api).then(x => {
      let num = Object.keys(x.data.records.location);
      for (let i = 0; i < num.length; i++) {
        if (
          x.data.records.location[i].parameter[0].parameterValue in this.alldata
        ) {
          let tmpobj = {};
          let tmp = Object.keys(x.data.records.location[i].weatherElement);
          for (let t = 0; t < tmp.length; t++) {
            tmpobj[
              `${x.data.records.location[i].weatherElement[t].elementName}`
            ] = `${x.data.records.location[i].weatherElement[t].elementValue}`;
          }
          this.alldata[
            `${x.data.records.location[i].parameter[0].parameterValue}`
          ][`${x.data.records.location[i].locationName}`] = tmpobj;
        } else {
          let tmpobj = {};
          let tmp = Object.keys(x.data.records.location[i].weatherElement);
          for (let t = 0; t < tmp.length; t++) {
            tmpobj[
              `${x.data.records.location[i].weatherElement[t].elementName}`
            ] = `${x.data.records.location[i].weatherElement[t].elementValue}`;
          }
          this.alldata[
            `${x.data.records.location[i].parameter[0].parameterValue}`
          ] = {};
          this.alldata[
            `${x.data.records.location[i].parameter[0].parameterValue}`
          ][`${x.data.records.location[i].locationName}`] = tmpobj;
        }
      }
      console.log(this.alldata);
      this.city = Object.keys(this.alldata);
    });
  }
};
</script>
