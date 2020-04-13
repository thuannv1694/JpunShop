<template>
    <div>
        <body class="home-3">
            <!-- Header Top-->
            <div class="header-top-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="mail-content">
                                <a-icon type="mail" />
                            </div>
                            <div class="header-top-menu">
                                <span style="margin: 5px">thuannv@filmplus.vn</span>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6" style="font-size: 13px">
                            <div class="col-lg-5 col-md-5 col-sm-5 float-right">
                                <div class="mail-content">
                                    <a-icon type="environment"/>
                                </div>
                                <div class="header-top-menu" style="color: #FFF">
                                    <a href="/" style="margin: 5px; color: #FFF">Hệ Thống Cửa Hàng</a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 float-right">
                                <div class="mail-content">
                                    <a-icon type="lock"/>
                                </div>
                                <div class="header-top-menu" style="color: #FFF">
                                    <a href="/" style="margin: 5px; color: #FFF">Đăng Ký</a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 float-right">
                                <div class="mail-content">
                                    <a-icon type="user"/>
                                </div>
                                <div class="header-top-menu">
                                    <a  href="/" style="margin: 5px; color: #FFF">Đăng Nhập</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header Mid-->
            <div class="main-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-xs-8">
                            <div class="logo-content">
                                <span style="font-size: 30px">JPun</span>
                                </br>
                                <span style="position: absolute; top: 25%; ">...Shop</span>
                            </div>
                            <div class="header-top-logo">
                                <span style="margin: 2px; font-style: italic">Thế giới Shopping</span>
                            </div>
                        </div>
                        <div class="col-md-9 col-xs-4 row">
                            <div class="col-md-9 policy-header hidden-sm hidden-xs align-center">
                                <div class="item">
                                    <a-icon style="font-size: 20px; transform: rotate(95deg);" type="phone" />
                                    <span>Hỗ trợ mua hàng</span>
                                    <p style="font-weight: 600; font-style: italic;padding-left: 1.7em">0909999999</p>
                                </div>
                                <div class="item hidden-md">
                                    <a-icon style="font-size: 20px;" type="environment" />
                                    <span>Địa chỉ</span>
                                    <p style="font-weight: 600; font-style: italic;padding-left: 1.7em">
                                        38, Nguyễn Thanh Tuyền, P.2, Q.Tân Bình, TP.HCM
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-3 col-xs-12 cart-header">
                                <div class="top-cart-contain f-right">
                                    <div class="mini-cart text-xs-center">
                                        <a style="color: #000c17" href="/cart" title="Giỏ hàng" class="cart-link">
                                            <img src="//bizweb.dktcdn.net/100/366/480/themes/736376/assets/icon-cart.png?1583135005254" alt="Giỏ hàng">
                                            <i class="cartCount count_item_pr">0</i>
                                            <span class="hidden-xs">Giỏ hàng</span>
                                            <b class="hidden-xs">(<span class="cartCount">0</span>) sản phẩm</b>
                                        </a>
                                        <div class="top-cart-content">
                                            <ul id="cart-sidebar" class="mini-products-list count_li">
                                                <div class="no-item"><p>Không có sản phẩm nào.</p></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header Menu-->
            <nav class="main-menu">
                <div class="container">
                    <div class="row">
                        <div class="menu-bar button-menu hidden-md hidden-lg">
                            <a href="javascript:;">
                                <i class="fa fa-align-justify"></i>
                            </a>
                        </div>
                        <div class="menu-cate hidden-sm hidden-xs">
                            <span class="title">
                                <i class="fa fa-bars"></i> Danh mục sản phẩm
                            </span>
                            <ul class="lv0" v-for="items in menus">
                                <li class="lil0" v-for="subMenu in items.children">
                                    <a class="nav-link" href="#"> {{ subMenu.name }}</a>
                                    <i class="fa fa-angle-right"></i>
                                        <ul class="lv1">
                                            <li class="lilv1" v-for="subItems in subMenu.children">
                                                <a class="nav-link" href="#">
                                                    <span>{{ subItems.name }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                        <ul class="level0 hidden-sm hidden-xs">
                            <li class="nav-item has-mega" v-for="items in menus">
                                <a class="arrow_nav nav-link" href="#">
                                    {{ items.name }}
                                    <i v-if="items.name == 'Sản Phẩm'" class="fa fa-caret-down hidden-sm"></i>
                                </a>
                                <ul v-if="items.children.length > 0" class="level1 mega">
                                    <li class="level2 parent item" v-for=" subMenu in items.children">
                                        <a href="#">
                                            <span>{{ subMenu.name }}</span>
                                        </a>
                                        <ul class="level2 parent">
                                            <li class="level3" v-for="subItems in subMenu.children">
                                                <a href="#" class="arrow_lv3">
                                                    <span>{{ subItems.name }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!--Contain-->

            <!--EndContain-->
            <!--footer-->
<!--            <frontend-footer />-->
            <!--endFooter-->
        </body>
    </div>
</template>
<script>
  import { Menu, Icon, List, Input, Carousel } from 'ant-design-vue'
  window.Vue.use(Menu);
  window.Vue.use(Icon);
  window.Vue.use(List);
  window.Vue.use(Input);
  window.Vue.use(Carousel);

  export default {
      // components: {
      //     'frontend-footer': () => import(/* webpackChunkName: "js/chunks/frontend-footer.chunk" */'../Footer/index.vue'),
      // },
      props: {
          menus: Array
      },
    data() {
      return {
        dataSource: [],

      }
    },
    methods: {

    },
    created() {
    }
  }
</script>

<style scoped>
    /*menu*/
    /*Mid*/
    .lv0 > .lil0 .nav-link:hover {
        color: #ffc000;
    }
    .lv1 > .lil1 .nav-link:hover {
        color: #ffc000;
    }
    .lv0 > .lil0 .nav-link:hover {
        color: #ffc000;
    }
    .level0 > .has-mega .arrow_nav:hover {
        color: #ffc000;
    }
    .level1 > .parent .arrow_lv3:hover {
        color: #ffc000;
    }
    ul {
        list-style: none outside;
    }
    ul .level2 {
        padding: 0px;
    }
    .main-menu .level0 {
        position: relative;
    }
    .main-menu .level0 li {
        position: relative;
    }
    .main-menu .level0>li {
        float: left;
    }
    .main-menu .level0>li>a {
        font-weight: bold;
        color: #FFF;
        float: left;
        width: 100%;
        padding: 20px 13px;
        text-transform: uppercase;
    }
    .main-menu .level0 li.has-mega {
        position: static;
    }
    .main-menu .level0 ul.level1.mega {
        padding: 0;
    }
    .main-menu .level0 ul.level1 {
        background: #fff none repeat scroll 0 0;
        margin: 0;
        padding: 10px;
        position: absolute;
        top: 60px;
        left: 0;
        z-index: 99;
        width: 100%;
        -webkit-box-shadow: 0px 2px 6px 0px rgba(50,50,50,0.33);
        -moz-box-shadow: 0px 2px 6px 0px rgba(50,50,50,0.33);
        box-shadow: 0px 2px 6px 0px rgba(50,50,50,0.33);
        max-height: 600px;
        overflow-y: auto;
        display: block;
        opacity: 0;
        filter: alpha(opacity=0);
        visibility: hidden;
        -moz-transition: .2s ease-out;
        -o-transition: .2s ease-out;
        -webkit-transition: .2s ease-out;
        -ms-transition: .2s ease-out;
        transition: .2s ease-out;
        -moz-transform: translateY(20px);
        -o-transform: translateY(20px);
        -ms-transform: translateY(20px);
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
    }
    .main-menu .level0 ul.level1 li.level2:nth-child(2n+1) {
        clear: left;
    }

    .main-menu .level0 ul.level1 li.level2 {
        width: 50%;
        float: left;
        padding: 10px;
    }
    .main-menu .level0 ul.level1 li.level2>a {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
    }
    .main-menu .level0 ul.level1 li.level2 li.level3 {
        padding: 2px 0;
    }
    .main-menu .level0 li:hover>ul.dropdown-menu.dropdown-menu-lv1, .main-menu .level0 li:hover>ul.mega {
        -moz-transform: translateY(0px);
        -o-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
    }
    .main-menu .level0 li:hover>ul {
        opacity: 1;
        filter: alpha(opacity=100);
        visibility: visible;
        -moz-transition: .3s ease-in;
        -o-transition: .3s ease-in;
        -webkit-transition: .3s ease-in;
        -ms-transition: .3s ease-in;
        transition: .3s ease-in;
    }
    /*left*/
    .hidden-lg {
        display: none !important;
    }
    .nav-link {
        padding: 0px;
    }
    .main-menu .menu-cate ul li ul.lv1 {
        left: 100%;
        top: 0;
    }
    .main-menu .menu-cate ul>li:not(:last-child) {
        border-bottom: 1px #e1e1e1 solid;
    }

    .main-menu .menu-cate ul>li {
        display: inline-block;
        padding: 10px 30px 10px 10px;
        width: 100%;
        position: relative;
    }
    .main-menu .menu-cate ul li ul.lv1 {
        left: 100%;
        top: 0;
    }
    .main-menu .menu-cate ul li ul {
        -moz-transform: translateX(20px);
        -o-transform: translateX(20px);
        -ms-transform: translateX(20px);
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
    }
    a, .text-link {
        color: #000;
        text-decoration: none;
        background: transparent;
    }
    .main-menu .menu-cate ul li i {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 40px;
        width: 30px;
        text-align: center;
    }
    .main-menu .menu-cate ul>li:not(:last-child) {
        border-bottom: 1px #e1e1e1 solid;
    }

    .main-menu .menu-cate ul>li {
        display: inline-block;
        padding: 10px 30px 10px 10px;
        width: 100%;
        position: relative;
    }
    .main-menu .menu-cate ul li:hover>ul {
        opacity: 1;
        filter: alpha(opacity=100);
        visibility: visible;
        -moz-transition: .3s ease-in;
        -o-transition: .3s ease-in;
        -webkit-transition: .3s ease-in;
        -ms-transition: .3s ease-in;
        transition: .3s ease-in;
        -moz-transform: translateX(0px);
        -o-transform: translateX(0px);
        -ms-transform: translateX(0px);
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }
    .main-menu .menu-cate:hover>ul.lv0 {
        opacity: 1;
        filter: alpha(opacity=100);
        visibility: visible;
        -moz-transition: .3s ease-in;
        -o-transition: .3s ease-in;
        -webkit-transition: .3s ease-in;
        -ms-transition: .3s ease-in;
        transition: .3s ease-in;
        -moz-transform: translateY(0px);
        -o-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
    }
    .main-menu .menu-cate {
        position: relative;
        background: #ffc000;
        float: left;
        padding: 0 15px;
        height: 60px;
    }
    .main-menu .menu-cate .title {
        color: #000;
        font-size: 20px;
        line-height: 60px;
        font-weight: bold;
    }
    .main-menu .menu-cate ul {
        background: #fff none repeat scroll 0 0;
        border: none;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 60px;
        border-radius: 0;
        left: 0;
        z-index: 999;
        width: 249px;
        -webkit-box-shadow: 0px 2px 6px 0px rgba(50,50,50,0.33);
        -moz-box-shadow: 0px 2px 6px 0px rgba(50,50,50,0.33);
        box-shadow: 0px 2px 6px 0px rgba(50,50,50,0.33);
        max-height: 600px;
        display: block;
        opacity: 0;
        filter: alpha(opacity=0);
        visibility: hidden;
        -moz-transition: .2s ease-out;
        -o-transition: .2s ease-out;
        -webkit-transition: .2s ease-out;
        -ms-transition: .2s ease-out;
        transition: .2s ease-out;
    }
    .main-menu .menu-cate ul.lv0 {
        -moz-transform: translateY(20px);
        -o-transform: translateY(20px);
        -ms-transform: translateY(20px);
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
    }
    .main-menu {
        background: #2f2f2f;
        margin-bottom: 15px;
        height: 60px;
    }
    /**/
    .mini-cart:hover .top-cart-content {
        display: block;
    }
    .no-item p {
        margin: 0;
    }
    .no-item {
        padding: 10px;
    }
    ul#cart-sidebar {
        padding: 5px 0px;
        margin: 0;
        max-height: 582px;
        width: 300px;
        border: solid 1px #ebebeb;
        border-bottom: 0px;
    }
    .top-cart-content .mini-products-list {
        position: relative;
    }
    .main-header .top-cart-contain .mini-cart .top-cart-content {
        top: 100%;
    }
    .main-header .top-cart-contain .mini-cart .cart-link b {
        display: block;
    }
    .mini-cart .count_item_pr {
        font-size: 12px;
    }
    .main-header .top-cart-contain .mini-cart .cart-link .count_item_pr {
        position: absolute;
        left: 30px;
        top: 0;
        color: #FFF;
        background: #362f2d;
        line-height: 23px;
        width: 23px;
        text-align: center;
        border-radius: 50%;
        font-style: initial;
    }
    .main-header .top-cart-contain .mini-cart .cart-link img {
        position: absolute;
        left: 0;
        top: 0;
    }
    .main-header .top-cart-contain .mini-cart .cart-link {
        display: inline-block;
        position: relative;
        padding-left: 60px;
        text-align: left;
    }
    .main-header .top-cart-contain .mini-cart {
        position: relative;
    }
    .mini-cart {
        z-index: 10;
        text-align: center;
    }
    .main-header .top-cart-contain {
        padding: 18px 0;
    }
    .top-cart-content {
        display: none;
        position: absolute;
        top: 30px;
        right: 0px;
        background: #fff;
        padding: 0;
        text-align: left;
        box-shadow: 0px 3px 25px 0px rgba(31,38,67,0.1);
        -o-box-shadow: 0px 3px 25px 0px rgba(31,38,67,0.1);
        -moz-box-shadow: 0px 3px 25px 0px rgba(31,38,67,0.1);
        -webkit-box-shadow: 0px 3px 25px 0px rgba(31,38,67,0.1);
        z-index: 10000;
    }
    .top-cart-contain {
        color: #333;
        padding: 0;
        right: 0px;
        z-index: 1000;
        float: left;
        position: relative;
    }
    .f-right {
        float: right !important;
    }
    .main-header .policy-header .item {
        position: relative;
        float: left;
        padding: 15px 0 15px 40px;
        color: #000c17;
    }
    .main-header .policy-header .item:nth-child(1) {
        padding-left: 30px;
    }
    .main-header .policy-header .item:not(:last-child) {
        margin-right: 20px;
    }
    .mail-content {
        background-color: #f5c465;
        border-radius: 100%;
        color: #fff;
        display: inline-block;
        font-family: FontAwesome;
        height: 32px;
        line-height: 26px;
        text-align: center;
        width: 32px;
        float: left;
        margin-left: 10px;
        position: relative;
    }
    .logo-content {
        background-color: #212529;
        border-radius: 100%;
        color: #fff;
        display: inline-block;
        font-family: FontAwesome;
        height: 100px;
        line-height: 100px;
        text-align: center;
        width: 100px;
        float: left;
        margin-left: 10px;
        position: relative;
    }
    .email-content span{}
    .header-top-menu {
        margin-top: 6px;
    }
    .header-top-area {
        color: #919191;border-bottom: 1px solid #e5e5e5;
        padding: 10px 0;
    }
    .home-3 .header-top-area {
        background: #2f2f2f none repeat scroll 0 0;
    }
    .home-3 .main-header {
        background: #ffc000 none repeat scroll 0 0;
    }
    .main-header {
        color: #919191;border-bottom: 1px solid #e5e5e5;
        padding: 2px 0;
    }
    .home-3 .cart-total {
        border: 0 none;
        margin-top: 0;
        margin-left: 55px;
    }
    .home-3 .email-content {
        margin-top: 5px;
    }
    .home-3 .header-top-menu {
        margin-top: 5px;
        position:relative;
        font-family: FontAwesome;
        color: #FFF
    }
    .home-3 .header-top-logo {
        margin-top: 25%;
        position:relative;
        font-family: FontAwesome;
        color: #FFF
    }
</style>
