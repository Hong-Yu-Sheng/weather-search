<template>
  <v-container fluid fill-height class="pa-0">
    <v-row class="ma-auto">
      <v-col cols="7" class="pa-0">
        <v-card flat class="pa-0">
          <v-container fluid fill-height>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-container fluid fill-height> </v-container>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-container fluid fill-height>
                  
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="5" class="pa-0">
        <v-card flat class="pa-0" height="937">
          <v-container fluid fill-height> </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    alldata: {},
    city: [],
    test: "",
    cityt: "your city",
    city_area: "your area",
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
<style></style>
