<template>
  <div>
    <v-card width="200px">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>{{ cityt }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="i in city"
            :key="i"
            @click="
              () => {
                cityt = `${i}`;
              }
            "
          >
            <v-list-title v-text="i"></v-list-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
  <!-- 后里穴
   -->
  <!-- 再add一次？ -->
</template>
<!--你們先復原剛剛的編輯-->
<script>
export default {
  data: () => ({
    alldata: {},
    city: [],
    test: "",
    cityt: "your city",
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
