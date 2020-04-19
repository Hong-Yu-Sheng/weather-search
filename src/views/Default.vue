<template>
  <div>
    <span>{{ alldata["新北市"] }}</span>
  </div>
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
    //
    // {"新北市":{"福山":{"Temp":"22.5","Humd":"0.71"},"福隆":{"Temp":"26.2","Humd":"0.55"}}}
    //
    let api =
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314";
    return this.axios.get(api).then((x) => {
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
  },
};
</script>

<style></style>
