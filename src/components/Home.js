import React from 'react';
import Description from './Description';

const Home  = () => {
    return(
        <div>
            <div class="row">
            <div class="col-lg-12">
            </div>
        </div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <a href="" class="back-arrow"></a>
                        Quickview
                    </div>
                </div>
            </div>
        </header>
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product-image">
                            <img src="img/product-image.png"/>
                        </div>
                        <Description />
                        <div class="fixed-button">
                            <a href="#" class="btn amazon-btn btn-lg btn-block btn-primary">Buy from Amazon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;