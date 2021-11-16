<template>
  <div v-if="Object.keys(detailParameter).length !== 0" class="param-info">
    <div class="size">
      <table v-for="table in detailParameter.rule.tables">
        <tr v-for="tr in table">
          <td v-for="td in tr">
            {{ td }}
          </td>
        </tr>
      </table>
    </div>
    <div class="info-param">
      <table class="info-table">
        <tr v-for="info in detailParameter.info.set">
          <td class="info-param-key">{{ info.key }}</td>
          <td class="param-value">{{ info.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParameter",
  props: {
    detailParameter: {
      type: Object
    }
  },
  created() {

  }
}
</script>

<style scoped>

.param-info {
  padding: 20px 15px;
  font-size: 1rem;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100,100,100,.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0,0,0,.1);
}

.param-value {
  color: var(--font-color)
}

.info-img img {
  width: 100%;
}
</style>
