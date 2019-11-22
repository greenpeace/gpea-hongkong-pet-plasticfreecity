<template>
  <section id="restaurant-list" class="restaurant-list mt-4">
    <div class="container">
      <header class="mb-2">
        <h2 class="display-1 mb-2 text-light-blue font-weight-bold">尋找走塑食堂的成果</h2>
        <p>現時走塑食堂已遍佈港九新界離島，總有一間在你附近</p>
      </header>
      <v-card class="restaurant-card">
        <v-card-title>
          <v-layout row wrap align-center justify-space-between>
            <v-flex class="px-4" md4 xs6>
              <v-select label="地區" :items="['港島', '九龍', '新界']" v-model="districtSelected"></v-select>
            </v-flex>
            <v-flex class="px-4" md4 xs6>
              <v-text-field v-model="search" append-icon="search" label="搜尋" single-line></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-data-table
          :headers="this.restaurantList.tableColumns"
          :items="this.filteredItems"
          :search="search"
          :pagination.sync="pagination"
          :expand="true"
          class="restaurant-list"
          item-key="name"
        >
          <template slot="items" slot-scope="props">
            <tr class="text-xs-center" @click="props.expanded = !props.expanded">
              <td class="text-xs-center">{{ props.item.地區 }}</td>
              <td class="text-xs-center">{{ props.item.餐廳名稱 }}</td>
              <td class="text-xs-center restaurant-list__address">{{ props.item.餐廳地址 }}</td>
              <td class="text-xs-center">{{ props.item.堂食走塑等級 }}</td>
              <td class="text-xs-center">{{ props.item.外賣走塑等級 }}</td>
            </tr>
          </template>
          <!--  footer text -->
          <template
            slot="pageText"
            slot-scope="props"
          >{{ props.pageStart }} - {{ props.pageStop }} 共 {{ props.itemsLength }} 間</template>
          <!-- no data -->
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">暫時沒有資料 :(</v-alert>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </section>
</template>
<script>
import axios from "axios";
// import the styles
export default {
  data() {
    return {
      districtSelected: [],
      dineinLevelSelected: [],
      takeawayLevelSelected: [],
      search: "",
      pagination: {
        rowsPerPage: 10,
        sortBy: "地區"
      },
      selected: [],
      restaurantURL:
        "https://raw.githubusercontent.com/eahk/gpea-hongkong-pet-plasticfreecity/master/src/assets/csvjson.json?token=AMV6PZYO7MXLN5B5GNEOQGS525N34",
      restaurantList: {
        loading: true,
        tableColumns: [
          {
            text: "地區",
            value: "地區",
            align: "center"
          },
          {
            text: "餐廳名稱",
            value: "餐廳名稱",
            align: "center"
          },
          {
            text: "餐廳地址",
            value: "餐廳地址",
            sortable: false,
            align: "center"
          },
          {
            text: "堂食等級",
            value: "堂食走塑等級",
            align: "center"
          },
          {
            text: "外賣等級",
            value: "外賣走塑等級",
            align: "center"
          }
        ],
        tableData: []
      }
    };
  },
  computed: {
    filteredItems() {
      if (this.districtSelected && this.districtSelected.length > 0) {
        return this.restaurantList.tableData.filter(i => {
          return i.地區 === this.districtSelected;
        });
      } else {
        return this.restaurantList.tableData;
      }
    }
  },
  created() {
    axios
      .get(this.restaurantURL)
      .then(res => {
        const resList = res.data
          .filter(list => list.stamped === "Y")
          .sort((a, b) => (a.地區 > b.地區 ? 1 : -1));
        //
        for (let key in resList) {
          this.restaurantList.tableData.push(resList[key]);
        }
        //
        this.restaurantList.loading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    toggleOrder() {
      this.pagination.descending = !this.pagination.descending;
    }
  }
};
</script>

<style lang="scss">
.restaurant-list {
  table {
    margin-top: 16px;
  }
  table tbody {
    td {
      font-size: 13px;
    }
  }

  &__address {
    min-width: 200px;
  }
  .v-card__title {
    padding-top: 20px;
  }
}

.theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
  background-color: rgba(83, 183, 218, 0.25) !important;
  font-weight: bold;
}
</style>
