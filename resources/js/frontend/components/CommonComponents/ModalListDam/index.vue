<template>
  <div>
    <a-modal
      :visible="visible"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="CANCEL"
      @ok="handleOk"
      okText="APPLY"
      width="70%"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Tiếp tục mua hàng</a-button>
        <a-button key="submit" type="primary" :disabled="itemSelected == undefined" @click="handleOk">Thực hiện thanh toán</a-button>
      </template>
      <div class="row">
        <div class="col-lg-12" style="padding-top: 2%">
          <a-table
            :columns="columns" 
            :data-source="data"
          >
          </a-table>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import {
  Modal,
  List,
  Button,
  Icon,
  Skeleton,
  Radio,
  Pagination
} from "ant-design-vue";

window.Vue.use(Modal);
window.Vue.use(List);
window.Vue.use(Button);
window.Vue.use(Skeleton);
window.Vue.use(Radio);
window.Vue.use(Pagination);

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    width: 500,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: 100,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 200,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    width: 100,
  }
];

export default {
  props: {
    visible: Boolean,
    cancel: Function,
    apply: Function,
    skip: Function,
    default: String,
    more: Object
  },
  data() {
    return {
      columns,
      data:[],
      loading: false,
      confirmLoading: false,
      itemSelected: undefined,
      type: undefined,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
      }
    };
  },
  methods: {
    onPageChange(page, pageSize) {
      this.onChangeType(page);
    },
    onChangeType(page) {
    },
    handleOk(e) {
    },
    handleCancel(e) {
      this.itemSelected = undefined;
      this.cancel();
    },
    select(id) {
    },
    capitalize(value) {
      return _.capitalize(value);
    }
  },
};
</script>
<style lang="scss" module>
.listItem {
  padding: 10px;
  cursor: pointer;
}
.selected {
  background: #e6e6e6;
  border-radius: 5px;
}
.checkGreen {
  color: green;
}
.resize-table-th {
  position: relative;
  .table-draggable-handle {
    height: 100% !important;
    bottom: 0;
    left: auto !important;
    right: -5px;
    cursor: col-resize;
    touch-action: none;
  }
}
</style>