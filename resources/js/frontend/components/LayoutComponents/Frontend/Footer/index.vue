<template>
    <div>
        <template>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 footer-click">
                            <a href="">
<!--                                <img src="/img/backend/brand/logo.svg" style="">-->
                            </a>
                            <p>Kênh thông tin của chúng tôi</p>
                            <a-icon type="youtube" style="font-size: 30px"/>
                            <a-icon type="skype" style="font-size: 30px"/>
                            <a-icon type="twitter" style="font-size: 30px"/>
                            <a-icon type="facebook" style="font-size: 30px"/>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12 footer-click">
                            <h5 class="cliked">THÔNG TIN</h5>
                            <ul class="toggle-mn list-menu" style="">

                                <li><a class="ef" href="/" title="Trang chủ">Trang chủ</a></li>

                                <li><a class="ef" href="/gioi-thieu" title="Giới thiệu">Giới thiệu</a></li>

                                <li><a class="ef" href="/collections/all" title="Sản phẩm">Sản phẩm</a></li>

                                <li><a class="ef" href="/tin-tuc" title="Tin tức">Tin tức</a></li>

                                <li><a class="ef" href="/lien-he" title="Liên hệ">Liên hệ</a></li>

                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12 footer-click">
                            <h5 class="cliked">CHÍNH SÁCH</h5>
                            <ul class="toggle-mn list-menu" style="">

                                <li><a class="ef" href="/" title="Trang chủ">Trang chủ</a></li>

                                <li><a class="ef" href="/gioi-thieu" title="Giới thiệu">Giới thiệu</a></li>

                                <li><a class="ef" href="/collections/all" title="Sản phẩm">Sản phẩm</a></li>

                                <li><a class="ef" href="/tin-tuc" title="Tin tức">Tin tức</a></li>

                                <li><a class="ef" href="/lien-he" title="Liên hệ">Liên hệ</a></li>

                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-click footer-col-last">
                            <h5 class="cliked">THÔNG TIN LIÊN HỆ</h5>
                            <div class="classic-text-widget info-footer">

                                <p><i class="fa fa-map-marker"></i>Tầng 4 , tòa nhà bitextco NamLong. TP.HCM</p>
                                <p><i class="fa fa-phone"></i>
                                    <a href="tel:0973458959" title="0973458959"> 0908855483</a>
                                </p>
                                <p><i class="fa fa-envelope"></i>
                                    <a href="mailto:lehieu.super@gmail.com" title="lehieu.super@gmail.com">thuannv@fimplus.vn</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-footer fot_copyright text-center">
                    <div class="container">
                        <div>
                            Bản quyền thuộc về
                            <span class="license">Admin Pun</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
    import { Menu, Icon, List, Input, Card } from 'ant-design-vue'
    window.Vue.use(Menu);
    window.Vue.use(Icon);
    window.Vue.use(List);
    window.Vue.use(Input);
    window.Vue.use(Card);
    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    export default {
        components: {
            IconFont,
        },
    }
</script>
<style scoped>
    .footer {
        background: #2f2f2f;
        padding: 20px;
    }
    .footer >>> .footer-click {
        color:#FFF;
        margin-top: 30px;
    }
    .footer .footer-infor p {
        margin-bottom: 10px;
    }
    .footer .footer-infor .logo-footer img {
        margin-bottom: 20px;
    }
    .footer h5 {
        color: #FFF;
        position: relative;
        margin: 0 0 30px;
        padding-bottom: 10px;
        font-size: 14px;
    }
    .footer h5:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 50px;
        background: #ffc000;
        height: 2px;
    }
    .footer .footer-click .list-menu li {
        padding: 5px 0;
    }
    .footer a {
        color: #FFF;
    }
    .footer .footer-click .info-footer {
        padding-top: 8px;
    }
    .footer .footer-click .info-footer p {
        position: relative;
        padding-left: 30px;
    }
    .footer .footer-click .info-footer p i {
        position: absolute;
        left: 0;
        top: 0;
        color: #ffc000;
        font-size: 20px;
        width: 21px;
        text-align: center;
    }
    .footer .fot_copyright {
        padding-top: 1rem;
        color: #FFF;
    }
    .footer .fot_copyright .license, footer .fot_copyright a {
        font-weight: bold;
        color: #ffc000;
    }
    .footer .fot_copyright .block-xs {
        margin: 0 5px;
    }
    .list-menu {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .footer-click ul>li::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #ffc000;
        transition: width .3s;
    }

    .footer-click ul>li:hover::after {
        width: 50%;
        border-bottom: 2px solid #ffc000;
    }
</style>
