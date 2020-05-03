<template>
    <div class="row" style="padding-top: 10px">
        <!--Carousel-->
        <div class="carousel" style="padding-bottom: 30px">
            <div class="container">
                <div class="row">
                    <div class="col-md-9" style="float: left">
                        <div class="row home-slider">
                            <template>
                                <a-carousel autoplay style="width: 848px">
                                    <div><h3><img width="100%" height="386px" src="https://salt.tikicdn.com/cache/w584/ts/banner/dd/66/fc/62fdc75925727dfbf44c85fca1b0cfad.jpg" alt=""></h3></div>
                                    <div><h3><img width="100%" height="386px" src="https://salt.tikicdn.com/cache/w584/ts/banner/d7/45/c7/e6bf099e83d7cfd066a1919902888c04.jpg" alt=""></h3></div>
                                    <div><h3><img width="100%" height="386px" src="https://salt.tikicdn.com/cache/w584/ts/banner/84/19/8c/c3a1950602406250e2bd256871f472a1.jpg" alt=""></h3></div>
                                    <div><h3><img width="100%" height="386px" src="https://salt.tikicdn.com/cache/w584/ts/banner/84/19/8c/c3a1950602406250e2bd256871f472a1.jpg" alt=""></h3></div>
                                </a-carousel>
                            </template>
                        </div>
                    </div>
                    <div class="col-md-3" style="padding-left: 0; float: left">
                        <div class="row">
                            <div class="hidden-xs col-sm-6 col-md-12 col-lg-12 index-banner" style="margin-bottom: 14px">
                                <img width="277.5px" height="206px" src="/storage/uploads/11ec0a55ecfcac9c3d6ed731e3efc0bb.png">
                            </div>
                            <div class="hidden-xs col-sm-6 col-md-12 col-lg-12 index-banner">
                                <img width="277.5px" height="206px" src="/storage/uploads/7840ac7378da65a512874635e8db12b3.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--endCarousel-->
        <section class="awe-section-4">
            <section class="section-product section-product-tab ajax-product">
                <div class="col-product-wrap">
                    <div class="content">
                        <div class="container">
                            <div class="row">
                                <div style="width:100%">
                                    <div class="row">
                                        <div v-for="items in product" class="owl_product_ owl-carousel ajaxcol owl-loaded owl-drag" data-nav="true" data-margin="0" data-lg-items="5" data-md-items="4" data-height="false" data-xs-items="2" data-xss-items="2" data-sm-items="3">
                                            <div class="title-menus">
                                                <h5 v-if="items.has_many_product.length > 0">{{ items.name }}</h5>
                                                    <div v-if="items.has_many_product.length > 0" class="owl-stage-outer">
                                                        <sequential-entrance
                                                            delay="200"
                                                        >
                                                            <div class="owl-stage" v-for="productItems in items.has_many_product">
                                                                <div class="owl-item">
                                                                    <div class="product-box product-item-main">
                                                                        <div class="details">
                                                                            <div class="sale-flash">- 12% </div>
                                                                            <div class="product-thumbnail">
                                                                                <a class="image_thumb" :href="'/product-detail'" target="_blank">
                                                                                    <img :src="'/storage/uploads/' +productItems.productImage ? '/storage/uploads/' +productItems.productImage: '/img/backend/404error.jpeg'">
                                                                                </a>
                                                                            </div>
                                                                            <div class="product-info product-bottom">
                                                                                <h3 class="product-name">
                                                                                    <a href="#" :title="productItems.productName">{{ productItems.productName }}</a>
                                                                                </h3>
                                                                                <div class="product-rate">
                                                                                    <a-rate :defaultValue="2.5" allowHalf />
                                                                                    <small class="rate-cmt">Đánh giá</small>
                                                                                </div>
                                                                                <div class="product-item-price price-box">
                                                                                    <span class="product-price special-price">{{ formatPrice(productItems.productPrice) + ' vnđ' }}</span>
                                                                                    <span class="product-price old-price">1.600.000₫</span>
                                                                                </div>
                                                                                <div class="product-detail">
                                                                                    <span>Màn hình: 6.5", Super Retina XDR</span>
                                                                                    <span>CPU: Apple A13 Bionic 6 nhân</span>
                                                                                    <span>RAM: 4 GB, ROM: 512 GB</span>
                                                                                    <span>Camera: 3 camera 12 MP</span>
                                                                                    <span>Selfie: 12 MP</span>
                                                                                    <span>PIN: 3969 mAh, có sạc nhanh</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </sequential-entrance>
                                                        <p class="view-more-product">
                                                            <span @click="showProductDetail()">Xem tất cả</span>
                                                        </p>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
<script>
    export default {
        components: {
            'modal-list-dam': () => import(/* webpackChunkName: "js/chunks/modal-list-dam.chunk" */'@/frontend/components/CommonComponents/ModalListDam/index.vue'),
        },
        props: {
            'menu': Array,
            'product': Array,
        },
        data() {
            return {
            }
        },
        methods: {
            formatPrice(value) {
                let val = (value/1).toFixed(0).replace('.')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
            showProductDetail() {
                window.location.href = '/admin/product/showProductDetail/' + id;
            },
            viewDetail()
            {
                
            }
        },
        created() {
            console.log(this.product)
        }
    };
</script>
<style scoped>
    /* product-detail */
    .product-detail {
        position: relative;
        left: auto;
        bottom: auto;
        right: auto;
        height: auto;
        opacity: 1;
        padding-bottom: 0;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .product-detail span {
        display: block;
        color: #666;
        padding: 5px 0;
        text-decoration: none;
        line-height: normal;
        font-size: 12px;
    }
    /*  */
    .product-rate {
        display: flex;
        justify-content: space-between;
    }

    .rate-cmt {
        line-height: 35px;
    }

    .product-rate .ant-rate {
        font-size: 18px;
    }

    .product-thumbnail img {
        transition: all 0.3s;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .product-thumbnail:hover img {
        padding: 0 1rem;
        transform: scale(1);
    }
    /* content */
    .awe-section-4 {
        margin-bottom: 30px;
    }
    section {
        width: 100%;
        float: left;
    }
    .section-product .item {
        padding: 15px;
        position: relative;
    }
    .product-box:not(.product-box-mini) {
        overflow: hidden;
        /* border: 1px #e1e1e1 solid; */
        position: relative;
        /* padding: 1rem 1rem; */
    }

    .owl-item {
        width: 230px;
    }

    .product-box:not(.product-box-mini) .details {
        padding: 15px;
        background: #FFF;
        position: relative;
        overflow: hidden;
    }

    .product-box:not(.product-box-mini) .details .sale-flash {
        background: #ffc000;
        position: absolute;
        left: -39px;
        top: 15px;
        width: 129px;
        font-weight: bold;
        color: #000;
        z-index: 99;
        text-align: center;
        transform: rotate(-45deg);
    }
    .product-box:not(.product-box-mini) .details .product-thumbnail {
        position: relative;
    }
    .section-product .section-product-tab .product-box .details .product-thumbnail .image_thumb {
        height: 174px;
    }

    .product-thumbnail {
        width: 100%;
        padding: 1.5rem 1rem;
        border-radius: 1.5rem;
        height: 230px;
    }

    .product-box:not(.product-box-mini) .details .product-thumbnail .image_thumb img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .product-box:not(.product-box-mini) .details .product-thumbnail .quick-view {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 99;
        transition: all .2s ease-in-out;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        padding: 0 13px;
        border: none;
        box-shadow: 0 0 3px;
        opacity: 0;
    }
    .product-box:not(.product-box-mini) .product-action button {
        width: 100%;
        background: #ffc000;
        color: #000;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
    }
    .hidden {
        display: none !important;
    }
    .product-box:not(.product-box-mini) .details .product-info .product-name {
        font-size: 14px;
        margin: 10px 0 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .product-box:not(.product-box-mini) .details .product-info .price-box {
        /* height: 41px; */
        display: flex;
        justify-content: space-between;
        line-height: 30px;
        border-bottom: 1px dashed #ccc;
        padding: 0 0 10px 0;
    }
    .product-box:not(.product-box-mini) .details .product-info .price-box .product-price.special-price {
        font-size: 14px;
        font-weight: bold;
        color: #ff1000;
        display: block;
    }
    .product-box:not(.product-box-mini) .details .product-info .price-box .product-price.old-price {
        font-size: 14px;
        color: #8a8a8a;
        text-decoration: line-through;
    }
    .product-box:not(.product-box-mini) .product-action {
        opacity: 0;
        position: absolute;
        left: 0;
        width: 100%;
        background: #FFF;
        bottom: 0;
        padding: 5px 15px 15px;
    }
    .tab-content.current {
        opacity: 1;
        visibility: visible;
        height: auto;
        -webkit-transition: all 200ms ease-in-out;
        -moz-transition: all 200ms ease-in-out;
        -ms-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
    }
    .owl-carousel {
        display: none;
        width: 100%;
        z-index: 1;
        overflow: hidden;
    }
    .owl-carousel.owl-loaded {
        display: block;
    }
    .owl-carousel .owl-stage-outer {
        position: relative;
        overflow: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        padding: 0 0.5rem;
    }
    .owl-carousel .owl-item img {
        width: auto;
    }
    .owl-carousel .owl-item {
        min-height: 1px;
        float: left;
        padding: 0.5rem 0.5rem;
        -webkit-backface-visibility: hidden;
        -webkit-touch-callout: none;
    }
    .product-box .product-thumbnail img {
        width: 172px;
        height: 172px;
    }
    .view-more-product {
        text-align: center;
        clear: both;
        margin-top: 30px;
        padding: 1rem 0;
    }
    .view-more-product span {
        display: inline-block;
        padding: 15px 60px;
        background: #000;
        color: #FFF;
        font-weight: bold;
    }
    a {
        color: #000;
    }
    .product-box:not(.product-box-mini):hover {
        box-shadow: 0 0 15px #cacaca;
    }
    .product-box:not(.product-box-mini):hover .product-action {
        opacity: 1;
    }
    a:hover {
        color: #000;
    }
    a:focus, a:hover {
        text-decoration: none;
    }
    a:active, a:hover {
        outline: 0;
    }
    .product-box:not(.product-box-mini) .product-action button:hover {
        background: #000;
        color: #ffc000;
    }
    .view-more-product span:hover {
        background: #ffc000;
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    /* For demo */
    .carousel .item:before, .banner-item:before {
        position: absolute;
        top: 0;
        left: -90%;
        z-index: 2;
        display: block;
        content: '';
        width: 50%;
        height: 55%;
        background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
        -webkit-transform: skewX(-25deg);
        transform: skewX(-25deg);
    }

    .index-banner {
        position: relative;
        display: flex;
        word-wrap: break-word;
        background-color: #FFF;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        width: 100%;
        height: 205px;
        padding: 1rem 1rem;
        max-height: 205px;
        margin: 0 1.5rem;
    }

    .index-banner img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .index-banner:hover {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
        -webkit-transform: all .3s ease-in-out;
        -ms-transform: all .3s ease-in-out;
        transform: all .3s ease-in-out;
        position: relative;
        cursor: pointer;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 423.11px;
        line-height: 423.11px;
        background: #ffc000;
        overflow: hidden;
    }
    .ant-btn:hover, .ant-btn:focus {
        border-color: #fff;
    }
    .title-menus h5{
        border-bottom: 2px solid #ffc000;
        margin-left: 15px;
        width: 203px;
    }
</style>
