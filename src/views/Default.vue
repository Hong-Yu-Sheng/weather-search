<template>
  <v-container fill-height>
    <v-row class="ma-auto">
      <v-col cols="3">
        <v-card flat>
          <v-menu offset-y flat v-model="ex">
            <template v-slot:activator="{ on }">
              <v-btn
                depressed
                outlined
                class="text-white"
                color="grey darken-1"
                v-on="on"
                width="400px"
                height="50"
              >
                {{ cityt }}
              </v-btn>
            </template>
            <v-card width="600px">
              <v-row class="px-5 py-2">
                <v-col class="pa-2" cols="2" v-for="i in city" :key="i">
                  <v-btn
                    depressed
                    @click="
                      () => {
                        cityt = i;
                        city_area = 'your area';
                        ex = false;
                        ex2 = true;
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
      <v-col cols="3">
        <v-card flat>
          <v-menu offset-y flat v-model="ex2">
            <template v-slot:activator="{ on }">
              <v-btn
                depressed
                outlined
                class="text-white"
                color="grey darken-1"
                v-on="on"
                width="400px"
                height="50"
              >
                {{ city_area }}
              </v-btn>
            </template>
            <v-card width="600px">
              <v-row class="px-5 py-2">
                <v-col class="pa-2" v-for="i in alldata[cityt]" :key="i">
                  <v-btn
                    depressed
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    alldata: [],
    city: [],
    test: "",
    cityt: "your city",
    city_area: "your area",
    ex: false,
    ex2: false,
  }),
  methods: {},
  created() {
    // 資料結構範例
    // [
    //   {
    //     "City":"新北市",
    //     "City_Area":[
    //       {"name":"福山","Temp":"22.5","Humd":"0.71"},
    //       {"name":"福隆","Temp":"26.2","Humd":"0.55"}
    //     ]
    //   },
    //   {
    //     "City":"新竹市",
    //     "City_Area":[
    //       {"name":"香山","Temp":"23.4","Humd":"0.32"}
    //     ]
    //   },
    //   {
    //     "City":"台南市",
    //     "City_Area":[
    //       {"name":"安平","Temp":"23.4","Humd":"0.32"},
    //       {"name":"七股","Temp":"27.4","Humd":"0.22"}
    //     ]
    //   },
    // ]
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
          this.alldata.push({"City":`${x.data.records.location[i].parameter[0].parameterValue}`});
          // this.alldata[
          //   `${x.data.records.location[i].parameter[0].parameterValue}`
          // ] = [`${x.data.records.location[i].locationName}`];
        }
      }
      console.log(this.alldata);
      this.city = Object.keys(this.alldata);
    });
  },
};
</script>

<style></style>
