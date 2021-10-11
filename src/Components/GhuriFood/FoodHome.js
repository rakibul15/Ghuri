import React from "react";
import foodcover from "../../images/food/cover.png"

const FoodHome = () => {
    return (
        <>
            <div className="Nav_overflow">
                <div className="container">
                    <div className="row hero_food">
                        <div className="col-sm-6 food_hero_text">
                            <h1>Organic & Healthy Food For Your Healthy Life</h1>
                            <p>
                                GHURI FOOD service has created the opportunity to purchase
                                healthy, organic food, products along with fastest delivery to
                                meet your body’s diet needs. It offers freshly prepared meals
                                filled with nutritional value for your healthy & smart
                                lifestyle…
                            </p>
                            <div className="btn btn_lmore">Learn More <i class="fa fa-caret-right"></i></div>
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid" src={foodcover} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodHome;
