<template>
    <div>
        <div class="col-lg-12">
            <div class="card card--withShadow">
                <div style="position: relative;right: 2%;padding-top: 1%;">
                              <a-button
                                class="btn btn-success float-right"
                                @click="showModal">Created
                            </a-button>
                    <a-modal
                            :visible="visible"
                            title='Create a new Category'
                            okText='Create'
                            @cancel="handleCancel"
                            @ok="handleSubmit"

                    >
                        <a-form layout='vertical' :form="form">
                            <div class="row">
                                <div class="col-lg-12">
                                    <a-form-item label="Title" :colon="false">
                                        <a-input placeholder="Title"
                                                 v-decorator="['name',{ rules: [{ required: true, message: 'Please input your Title' }] }]"
                                        />
                                    </a-form-item>
                                </div>
                                <div class="col-lg-12">
                                    <a-form-item label="Parent" :colon="false">
                                        <a-select
                                            placeholder="Select a title type"
                                            style="width: 100%;"
                                            v-decorator="['parent_id']"
                                            @change="handleChange"
                                        >
                                            <a-select-opt-group v-for="items in listCategory" :key="items.name">
                                                <a-select-option :key="items.id">
                                                    <span slot="label">{{ items.name }}</span>
                                                </a-select-option>
                                                <a-select-option
                                                    v-for="subMenu in items.children"
                                                    :key="subMenu.id"
                                                    :value="subMenu.id"
                                                >
                                                    &nbsp;&nbsp;{{ '-- '+subMenu.name}}
                                                </a-select-option>
                                            </a-select-opt-group>
                                        </a-select>
                                    </a-form-item>
                                </div>
                            </div>
                        </a-form>
                    </a-modal>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <a-form-item>
                                <a-table
                                        :columns="columns"
                                        :rowKey="record => record.id"
                                        :dataSource="listCategory"
                                        :pagination="pagination"
                                        @change="onPageChange"
                                        :loading="loading"categories
                                >
                                    <template slot="action" slot-scope="value, record">
                                        <a-button type="primary" icon="edit" @click="editShow(record.id)">Edit</a-button>
                                        <a-popconfirm title="Are you sure ?" @confirm="remove(record.id)" @cancel="cancel" okText="Yes" cancelText="No">
                                            <a-icon slot="icon" type="question-circle-o" style="color: red" />
                                            <a-button type="danger" icon="cross">Remove</a-button>
                                        </a-popconfirm>
                                    </template>

                                </a-table>
                            </a-form-item>
                        </div>
                    </div>
                </div>
                <a-modal
                        :visible="visibleEdit"
                        title='Edit Category'
                        okText='Save'
                        @cancel="handleCancelEdit"
                        @ok="save(resultData)"

                >
                    <a-form layout='vertical' :form="form" @submit.prevent="save">
                        <div class="row">
                            <div class="col-lg-12">
                                <a-form-item label="Name" :colon="false">
                                    <a-input placeholder="Name Category.."
                                             v-decorator="['name']"
                                    />
                                </a-form-item>
                                <a-form-item :colon="false">
                                    <a-input type="hidden" v-decorator="['id']"/>
                                </a-form-item>
                            </div>
                            <div class="col-lg-12">
                                <a-form-item label="Parent" :colon="false">
                                    <a-select
                                        placeholder="Select a title type"
                                        style="width: 100%;"
                                        v-decorator="['parent_id']"
                                        @change="handleChange"
                                    >
                                        <a-select-opt-group v-for="items in listCategory" :key="items.name">
                                            <a-select-option :key="items.id">
                                                <span slot="label">{{ items.name }}</span>
                                            </a-select-option>
                                            <a-select-option
                                                v-for="subMenu in items.children"
                                                :key="subMenu.id"
                                                :value="subMenu.id"
                                            >
                                                &nbsp;&nbsp;{{ '-- '+subMenu.name}}
                                            </a-select-option>
                                        </a-select-opt-group>
                                    </a-select>
                                </a-form-item>
                            </div>
                        </div>
                    </a-form>
                </a-modal>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapState, mapActions} from 'vuex'
    import store from '../_store'
    const columns = [
        {
            title: "Title",
            dataIndex: "name",
            scopedSlots: {customRender: "name"}
        },
        {
            title: "Parent",
            dataIndex: "parent_id",
            scopedSlots: {customRender: "parent_id"}
        },
        {
            title: "Created at",
            dataIndex: "created_at",
            scopedSlots: {customRender: "created_at"}
        },
        {
            title: "Update at",
            dataIndex: "update_at",
            scopedSlots: {customRender: "update_at"}

        },
        {
            title: 'Action',
            key: "action",
            scopedSlots: {customRender: "action"}
        }
    ]
    export default {
        props: {
            categories: Array
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        data() {
            return {
                columns,
                keyword: undefined,
                timer: null,
                pagination: {
                    total: 0,
                    showTotal:(total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    pageSize: 10
                },
                loading: false,
                open: false,
                visible: false,
                visibleEdit: false,
                resultData: [],
                listCategory: []

            }
        },
        computed: {
            ...mapState("$_category", {
                category: state => state.category,
            })
        },
        methods: {
            ...mapActions({
                saveCategoryApi: '$_category/saveCategoryApi',
                updateCategoryApi: '$_category/updateCategoryApi',
                removeCategoryApi: '$_category/removeCategoryApi',
                getByIdCategoryApi: '$_category/getByIdCategoryApi',

            }),
            handleChange(value) {},
            showModal() {
                this.visible = true
                this.form.validateFields((err, values) => {
                this.form.resetFields([
                    'name',
                    'parent',
                ])})
            },
            editShow(id) {
                this.visibleEdit = true
                let config = {
                    params: {
                        id: id
                    }
                }
                this.getByIdCategoryApi(config)
                    .then(response => {
                        this.form.setFieldsValue({id: response.data.data.id});
                        this.form.setFieldsValue({name: response.data.data.name});
                        this.form.setFieldsValue({parent_id: response.data.data.parent_id});
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            handleCancel() {this.visible =  false},
            handleCancelEdit() {this.visibleEdit =  false},
            handleOk(e) {
                this.visible = false
            },
            onPageChange(page) {
                console.log(page)
            },
            handleSubmit() {
                let self = this
                self.form.validateFields((err, values) => {
                    if (!err) {
                        this.saveCategoryApi({
                            value: values
                        }).then((response) => {
                            if (response.status === 200) {
                                self.$message.success('Add New Successfully');
                                self.visible = false
                                this.listCategory = response.data.data;
                                self.form.resetFields([
                                    'name',
                                    'parent_id',
                                ])
                            }
                        });
                    }
                });
            },
            save() {
                let self = this
                self.form.validateFields((err, values) => {
                    if (!err) {
                        this.updateCategoryApi({
                            value: values
                        }).then((response) => {
                            if (response.status === 200) {
                                self.$message.success('Update Successfully');
                                self.visibleEdit = false
                                self.loading = false
                                self.listCategory = response.data.data.data
                            }
                        });
                    }
                });
           },
            cancel (e) {},
            remove(id) {
                this.removeCategoryApi({
                  value: id
                }).then((response) => {
                    if (response.status === 200) {
                        this.$message.success('This is a message of success');
                        this.listCategory = response.data.data;
                    }
                });

            }
        },
        created() {
            const STORE_KEY = "$_category";
            if (!(STORE_KEY in this.$store._modules.root._children)) {
                this.$store.registerModule(STORE_KEY, store);
            }
            this.listCategory = [...this.categories]
        }
    }
</script>

<style lang="scss" module>
    @import "./style.module.scss";
</style>
