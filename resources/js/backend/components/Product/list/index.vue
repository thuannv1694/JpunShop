<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="text-black mb-3">
            <strong>Product List</strong>
          </h4>
          <a-auto-complete
            @select="select"
            @search="search"
            :value="keyword"
            :open="open"
            :allowClear="true"
            :class="$style.searchInput"
            ref="searchInput"
            optionLabelProp="text"
            @blur="onBlur"
          >
            <template slot="dataSource">
              <a-select-option v-for="item in listSearch" :key="item.id.toString()" :text="item.productName">
                <div class="ant-list-item">
                  <div class="ant-list-item-meta">
                    <div class="ant-list-item-meta-avatar">
                      <img
                        width="50px"
                        :src="'/storage/uploads/' +item.productImage ? '/storage/uploads/' +item.productImage: '/img/backend/404error.jpeg'"
                      />
                    </div>
                    <div class="ant-list-item-meta-content">
                      <h4
                        class="ant-list-item-meta-title"
                        style="font-size: 12px"
                      >Name : {{ item.productName }}</h4>
                    </div>
                  </div>
                </div>
              </a-select-option>
            </template>
            <a-input-search
              placeholder="Search actor"
              v-model="keyword"
              v-on:keyup.esc="open = false"
              v-on:keyup.enter="onSearch"
            />
          </a-auto-complete>
          <hr />
          <div style="padding-bottom: 4%">
              <a-button class="btn btn-success float-right" >
                    <a href="/admin/product/created">Created</a>
                </a-button>
          </div>
          <!-- <a-skeleton active :loading="loadingSke"> -->
            <div id="components-table-demo-size" >
              <a-table
                :columns="columns"
                :dataSource="productData"
                :rowKey="record => record.id"
                :pagination="pagination"
                @change="onPageChange"
                :loading="loading"
              >
                <template slot="#" slot-scope="value, record, index">{{ index + 1 }}</template>
                <template slot="productImage" slot-scope="value">
                  <img width="50px" :src="'/storage/uploads/' + value.productImage ? '/storage/uploads/' + value.productImage : '/img/backend/404error.jpeg'" />
                </template>
                <template slot="productPrice" slot-scope="value">
                    <span>{{ formatPrice(value.productPrice) }}</span>
                </template>
                <template slot="action" slot-scope="value, record">
                    <a-button type="primary" icon="edit" @click="editShow(record.id)">Edit</a-button>
                    <a-popconfirm title="Are you sure ?" @confirm="remove(record.id)" @cancel="cancel" okText="Yes" cancelText="No">
                        <a-icon slot="icon" type="question-circle-o" style="color: red" />
                        <a-button type="danger" icon="cross">Remove</a-button>
                    </a-popconfirm>
                </template>
              </a-table>
            </div>
          <!-- </a-skeleton> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import store from '../_store'
const columns = [
    {
        title: "#",
        scopedSlots: { customRender: "#" },
        width: "5%",
    },
    {
        title: "Image",
        scopedSlots: { customRender: "productImage" },
        width: "5%",
    },
    {
        title: "Name",
        dataIndex: "productName",
        width: "30%",
    },
    {
        title: "Price",
        scopedSlots: { customRender: "productPrice" },
        width: "10%",
    },
    {
        title: "Menu",
        dataIndex: "menus[0].name",
        width: "10%",
        
    },
    {
        title: "Description",
        dataIndex:"productDescription",
        ellipsis: true,
        width: "20%",
      
    },
    {
        title: "Action",
        width: "20%",
        dataIndex: "action",
        scopedSlots: { customRender: "action" }
    }
];

export default {
  data() {
    return {
      columns,
      timer: null,
      open: false,
      keyword: undefined,
      listSearch: [],
      pagination: {
        total: 0,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        pageSize: 10,
      },
      loading: false,
      loadingSke: true,
      productData: []
    };
  },
  methods: {
    ...mapActions({
      searchApi: '$_product/searchApi',
      searchIdProductApi: '$_product/searchIdProductApi',
      removeApi: '$_product/removeApi'
    }),
        onBlur(e) {
            this.open = false;
        },
        onPageChange(page, pageSize) {
          this.pagination = page;
          let config = {params: {keyword: this.keyword, page: this.pagination.current}}
          this.searchApi(config).then(response => {
            this.productData = response.data.data.data.data
            this.pagination.total = response.data.data.data.total
            this.loading = false;
            this.loadingSke = true
              setTimeout(() => {
                  this.loadingSke = false
              }, 500)
          }).catch(
              error => {console.log(error)}
            );
        },
        search() {
            let config = {params: {keyword: this.keyword, page: this.pagination.current}}
            this.searchApi(config).then(response => {
              this.listSearch = response.data.data.data.data
              this.pagination.total = response.data.data.data.total
              this.open = true
            }).catch(
                error => {console.log(error)}
              );
        },
        select(value) {
          let config = {params: {id: value}}
          this.searchIdProductApi(config).then(response => {
            this.productData = response.data.data.data
            this.pagination.total = response.data.data.total
            this.loading = false;
            this.open = false
            this.keyword = undefined
          }).catch(
              error => {console.log(error)}
            );
        },
        cancel (e) {},
        editShow(id) {
            window.location.href = '/admin/product/edit/' + id;
        },
        remove(id) {
          let self = this
          this.removeApi({id: id}).then((response) => {
            if (response.status === 200) {
              this.$message.success('This is a message of success');
              self.productData = response.data.data
            }
          });
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.',',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
  },
  created() {
    const STORE_KEY = "$_product";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
        this.$store.registerModule(STORE_KEY, store);
    }

    let config = {params: {keyword: this.keyword, page: this.pagination.current}}
      this.searchApi(config).then(response => {
        this.listSearch = response.data.data.data.data
        this.pagination.total = response.data.data.data.total
        this.productData = response.data.data.data.data
    }).catch(error => {console.log(error)});
  },
  mounted() {
    setTimeout(() => {
      this.loadingSke = false;
    }, 500);
  }
};
</script>
<style lang="scss" module>
.searchInput {
  width: 100%;
  font-size: rem(24);
  font-weight: bold;
  padding: 0;
  height: auto;
  border: none;
}
</style>