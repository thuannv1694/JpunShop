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
                                    <div><h3><img width="100%" src="/img/backend/slider/banner.jpg" alt=""></h3></div>
                                    <div><h3><img width="100%" src="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/slider_1.jpg?1583897918079" alt=""></h3></div>
                                    <div><h3><img width="100%" src="/img/backend/slider/banner.jpg" alt=""></h3></div>
                                    <div><h3><img width="100%" src="/img/backend/slider/banner.jpg" alt=""></h3></div>
                                </a-carousel>
                            </template>
                        </div>
                    </div>
                    <div class="col-md-3" style="padding-left: 0; float: left">
                        <div class="row">
                            <div class="hidden-xs col-sm-6 col-md-12 col-lg-12 index-banner" style="margin-bottom: 14px">
                                <img src="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/slide_banner_1_image.jpg?1583897918079" data-lazyload="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/slide_banner_1_image.jpg?1583897918079" alt="Máy khoan vặn vít">
                            </div>
                            <div class="hidden-xs col-sm-6 col-md-12 col-lg-12 index-banner">
                                <img src="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/slide_banner_1_image.jpg?1583897918079" data-lazyload="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/slide_banner_1_image.jpg?1583897918079" alt="Máy khoan vặn vít">
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
                                        <div v-for="menus in menu" class="owl_product_ owl-carousel ajaxcol owl-loaded owl-drag" data-nav="true" data-margin="0" data-lg-items="5" data-md-items="4" data-height="false" data-xs-items="2" data-xss-items="2" data-sm-items="3">
                                            <div class="title-menus" v-for="subMenus in menus.children">
                                                <h5>{{ subMenus.name }}</h5>
                                                    <div class="owl-stage-outer">
                                                        <div v-for="(items, index) in product" class="owl-stage">
                                                        <div class="owl-item" style="width: 234px;">
                                                            <div class="item">
                                                                <div class="product-box product-item-main">
                                                                    <div class="details">
                                                                        <div class="sale-flash">- 12% </div>
                                                                        <div class="product-thumbnail">
                                                                            <a class="image_thumb" href="#">
                                                                                <img :src="'/storage/uploads/' +items.productImage ? '/storage/uploads/' +items.productImage: '/img/backend/404error.jpeg'">
                                                                            </a>
                                                                        </div>
                                                                        <div class="product-info product-bottom">
                                                                            <h3 class="product-name">
                                                                                <a href="#" :title="items.productName">{{ items.productName }}</a>
                                                                            </h3>
                                                                            <div class="product-item-price price-box">
                                                                                <span class="product-price special-price">{{ formatPrice(items.productPrice) + ' vnđ' }}</span>
                                                                                <span class="product-price old-price">1.600.000₫</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-action clearfix hidden-xs">
                                                                        <div class="group_action">
                                                                            <input class="hidden" type="hidden" name="variantId" value="28199502">
                                                                            <button class="btn-cart btn btn-gray left-to" title="Chọn sản phẩm" type="button" onclick="window.location.href='/den-lam-viec-cam-tay'">
                                                                                Mua sản phẩm
                                                                            </button>                                                                        
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="view-more-product">
                                                <span @click="showProductDetail()">Xem tất cả</span>
                                            </p>
                                                </div>
                                            </div>
                                            <!--  -->
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
            }
        },
        created() {
            console.log(this.product)
        }
    };
</script>
<style scoped>
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
        border: 1px #e1e1e1 solid;
        position: relative;
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
    .product-box:not(.product-box-mini) .details .product-thumbnail .image_thumb img {
        max-height: 100%;
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
        height: 41px;
    }
    .product-box:not(.product-box-mini) .details .product-info .price-box .product-price.special-price {
        font-size: 14px;
        font-weight: bold;
        color: #ffc000;
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
    }
    .owl-carousel .owl-item img {
        width: auto;
    }
    .owl-carousel .owl-item {
        min-height: 1px;
        float: left;
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
    .index-banner >>> img {
        max-width: 277.5px;
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
