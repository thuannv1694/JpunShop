<template>
   <div class="row">
        <div class="container">
            <div class="row">
                <div class="breadcrump">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Trang chủ</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Điện Thoại</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Iphone</a></a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
            </div>
        </div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <div class="products">
                                <div class="rowtop">
                                    <h1>IPHONE 11 PRO MAX - 512GB CÔNG TY</h1>
                                </div>
                            </div>
                            <div class="product-detail">
                                <div class="img-product-info">
                                    <img src="/storage/uploads/11ec0a55ecfcac9c3d6ed731e3efc0bb.png" alt="">
                                    <div class="product-services">
                                        <div class="product-services-item">
                                            Bảo hành toàn diện
                                        </div>
                                        <div class="product-services-item">
                                            Bảo hành 1 đổi 1
                                        </div>
                                        <div class="product-services-item">
                                            Trả góp 0%
                                        </div>
                                        <div class="product-services-item">
                                            Mua hàng online
                                        </div>
                                        <div class="product-services-item">
                                            Giao hàng trong 1H
                                        </div>
                                    </div>
                                    <div class="store-info">
                                        <span class="store-info-addess">
                                            Để đặt hàng qua điện thoại Quý khách vui lòng gọi: từ 8:30 - 21:30 hàng ngày
                                        </span>
                                        </br>
                                        <span class="store-info-phone">
                                            <a href="#">Mua hàng: 0909 885 483 - Bảo hành: 0909 885 483</a>
                                        </span>
                                    </div>
                                    <img src="img/img-qc1.png" width="100%" height="75px" alt="">
                                </div>
                                <div class="product-detail-info">
                                    dsadsadsa
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
   </div>
</template>
<script>
    export default {
        data() {
            
        },
        methods: {
            
        },
        created() {
            
        }
    }
</script>

<style scoped>
.rowtop {
    border-bottom: 1px solid #6c757d3a;
    margin-bottom: 1.5rem;
}

.rowtop h1 {
    overflow: hidden;
    font-size: 24px;
    color: #333;
    line-height: 40px;
}
.product-detail {
    display: flex;
    justify-content: space-between;
}
.img-product-info {
    overflow: hidden;
    width: 40%;
    position: relative;
}
.img-product-info img {
    width: 400px;
    height: 460px;
    max-width: 100%;
    max-height: 460;
}
.product-detail-info {
    position: relative;
    width: 35%;
    margin: 0 1% 0 1%;
}
.product-services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2.5rem;
    box-sizing: unset;
}
.product-services-item {
    width: 65px;
    height: 65px;
    color: #ff8c5c;
    border: 3px solid;
    text-align: center;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    line-height: 1;
    padding: 0;
    cursor: pointer;
}
.store-info {
    padding: 1rem 0.5rem;
}

.store-info-addess {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
}

.store-info-phone a {
    color:red;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
}
</style>