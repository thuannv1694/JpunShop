<template>
    <div>
        <div class="col-lg-12">
            <a-form
                    :form="form"
                    @submit.prevent="handleSubmit"
            >
                <div class="row">
                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="text-black mb-3">
                                    <strong>Product Information</strong>
                                </h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <a-form-item label="Name" :colon=false>
                                            <a-input placeholder="Name"
                                                     v-decorator="['productName',{ rules: [{ required: true, message: 'Please input your Name' }] }]"
                                            />
                                            <input type="hidden" v-decorator="['productImage']">
                                        </a-form-item>
                                    </div>
                                    <!-- Price -->
                                    <div class="col-lg-12">
                                        <a-form-item label="Price" :colon="false">
                                            <a-input-number
                                                style="width: 100%"
                                                placeholder="Price"
                                                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                                v-decorator="['productPrice', { rules: [{ required: true, message: 'Please input your Price' }, { pattern: /^[0-9]*$/,message: 'The value must be a number'}] }]"
                                            />
                                                <!-- <a-input placeholder="Price"
                                                         v-decorator="['price', { rules: [{ required: true, message: 'Please input your Price' }, { pattern: /^[0-9]*$/,message: 'The value must be a number'}] }]"
                                                /> -->
                                        </a-form-item>
                                    </div>
                                    <!-- Menu -->
                                    <div class="col-lg-12">
                                        <a-form-item label="Menu" :colon="false">
                                            <a-select
                                                placeholder="Select a title type"
                                                style="width: 100%;"
                                                v-decorator="['menuID']"
                                            >
                                                <a-select-opt-group v-for="items in menu" :key="items.name">
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
                                    <!-- Detal -->
                                    <div class="col-lg-12">
                                        <a-form-item label="Description" :colon=false>
                                            <a-textarea
                                                placeholder="Description"
                                                :rows="4"
                                                v-decorator="['productDescription']"
                                            />
                                        </a-form-item>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card" style="height: 456.91px;">
                                <div class="card-body">
                                    <h4 class="text-black mb-3"><strong>Images</strong></h4>
                                    <div class="row">
                                    <div class="col-lg-12">
                                        <div :class="$style.boxShadow" @dragover.prevent @drop="hanldeDrop">
                                        <div v-if="previewimage == undefined && product.productImage == null" :class="$style.container">
                                            <form method="post" action="#" enctype="multipart/form-data">
                                            <div :class="$style.menuUpload">
                                                <a-form-item label="" :colon=false>
                                                <label class="btn btn-sm btn-success">
                                                    <a-icon type="upload"/>
                                                    Upload Photo
                                                    <input type="file" name="image" @change="handleClickUpload" style="display: none"
                                                        v-decorator="['file', {rules: [{ required: true, message: 'Please input your image' }]}]"
                                                    />
                                                </label>
                                                </a-form-item>
                                            </div>
                                            <div>
                                                <div class="row d-flex align-items-center justify-content-center h-100">
                                                <div class="col-12" :class="$style.dropzone">
                                                    <p class="ant-upload-drag-icon" :class="$style.dropzoneIcon">
                                                    <a-icon type="inbox"/>
                                                    </p>
                                                    <p class="ant-upload-text">Click or drag file to this area to upload</p>
                                                </div>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        <div v-else-if="previewimage" :class="$style.container">
                                            <div :class="$style.figure">
                                            <img :src="previewimage"/>
                                            </div>
                                        </div>
                                        <div v-else-if="product.productImage" :class="$style.container">
                                            <div :class="$style.figure">
                                            <img :src="'/storage/uploads/'+ product.productImage"/>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <div class="form-actions">
                            <a-button type="default"  @click="handleCancel">CANCEL</a-button>
                            <a-button type="primary" class="mr-2" html-type="submit">SAVE</a-button>
                        </div>
                    </div>
                </div>
            </a-form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from "vuex"
    export default {
        props: {
            product: Object,
            menu: Array
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        data() {
            return {
                previewimage: undefined,
                image:undefined
            }

        },
        methods: {
            hanldeDrop(e) {
                e.stopPropagation();
                e.preventDefault();
                this.uploadPhoto(e.dataTransfer.files[0]);
            },
            uploadPhoto(file) {
                let formData = new FormData();
                formData.append("file", file);
                let self = this;
                axios
                .post("/admin/product/uploadImage", formData, {
                    headers: {
                    "Content-Type": "multipart/form-data"
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                    self.image = response.data.data;
                    self.previewimage = '/storage/uploads/' + response.data.data;
                    self.$message.success("Upload successfully!");
                    }
                })
                .catch(error => {
                    self.$message.error("Your photo dimensions is not correct.");
                });
            },
            handleClickUpload(e) {
                this.uploadPhoto(e.target.files[0]);
            },
            handleSubmit() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        axios({
                        method: 'post',
                        url: '/admin/product/update',
                        data: {
                            id: this.product.id,
                            image: this.image,
                            value: values,
                        }
                        }).then((response) => {
                        if (response.status === 200) {
                            this.$message.loading('Action in progress..', 2.5)
                            .then(() => this.$message.success('Update Product Successfully', 2.5))
                        }
                        });
                    }
                });
            },
            handleCancel(){
                window.location.href='/admin/product'
            }
        },
        mounted() {
            this.form.setFieldsValue({productName: this.product.productName});
            this.form.setFieldsValue({productPrice: this.product.productPrice});
            this.form.setFieldsValue({menuID: this.product.menuID});
            this.form.setFieldsValue({productDescription: this.product.productDescription});
            this.form.setFieldsValue({productImage: this.product.productImage});
        }
    }
</script>

<style lang="scss" module>
    @import "./style.module.scss";
</style>
