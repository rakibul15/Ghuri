import React from "react";
import foodcover from "../../images/food/cover.png";
import dish1 from "../../images/food/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41 1.png";
import leaf from "../../images/food/leaf.png";
import singlemenu from "../../images/food/ppmenu.png";
import star from "../../images/food/Star.png";
import cheif from "../../images/food/chefs.png";
import mark from "../../images/food/mark.png";
const FoodHome = () => {
  return (
    <>
      <div className="Nav_overflow_food food_over">
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
              <button className="btn btn_lmore">
                Learn More <i class="fa fa-caret-right"></i>
              </button>
            </div>
            <div className="col-sm-6">
              <img className="img-fluid" src={foodcover} alt="" />
            </div>
          </div>

          <div className="special_dish mt-90">
            <h1 className="text-center">Our Special Dish</h1>
            <p className="text-center">Made with premium ingredients.</p>
            <div className="row align-items-center mt-90 pb-90">
              <div className="col-sm-3">
                <div className="single_cart_food text-center">
                  <img src={dish1} alt="" />
                  <h5>Green Salad</h5>
                  <p>
                    A green salad filled with cabbage, mustard greens, and added
                    chicken pieces for a more delicious.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single_cart_food text-center">
                  <img src={dish1} alt="" />
                  <h5>Green Salad</h5>
                  <p>
                    A green salad filled with cabbage, mustard greens, and added
                    chicken pieces for a more delicious.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single_cart_food text-center">
                  <img src={dish1} alt="" />
                  <h5>Green Salad</h5>
                  <p>
                    A green salad filled with cabbage, mustard greens, and added
                    chicken pieces for a more delicious.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single_cart_food text-center">
                  <img src={dish1} alt="" />
                  <h5>Green Salad</h5>
                  <p>
                    A green salad filled with cabbage, mustard greens, and added
                    chicken pieces for a more delicious.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="fresh_veg">
            <div className="row">
              <div className="col-sm-6">
                <img src={leaf} alt="" />
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <h1>Fresh Vegetables Every Day</h1>
                <p>
                  We present various types of fresh vegetables and taken
                  directly from the farmer’s garden especially for you
                </p>
                <button className="btn btn_lmore">
                  Learn More <i class="fa fa-caret-right"></i>
                </button>
              </div>
            </div>
          </section>

          <section className="popular_menu mt-90">
            <h1 className="text-center">Our Polpular Menu</h1>
            <p className="text-center">Made with premium ingredients.</p>
            <div className="row mt-70">
              <div className="col-sm-4">
                <div className="single_menu">
                  <img src={singlemenu} alt="" />
                  <div className="d-flex justify-content-between align-items-center p-4">
                    <div className="w-60">
                      {" "}
                      <h5>Chicken Salad with Avocado Toast</h5>
                    </div>
                    <div className="w-30 food_price">
                      <h6>
                        <span>
                          <strong>&#2547;</strong>
                        </span>{" "}
                        290.00
                      </h6>
                    </div>
                  </div>
                  <div className="review">
                    <img className="mr-2" src={star} alt="" />{" "}
                    <span>(5.00)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single_menu">
                  <img src={singlemenu} alt="" />
                  <div className="d-flex justify-content-between align-items-center p-4">
                    <div className="w-60">
                      {" "}
                      <h5>Chicken Salad with Avocado Toast</h5>
                    </div>
                    <div className="w-30 food_price">
                      <h6>
                        <span>
                          <strong>&#2547;</strong>
                        </span>{" "}
                        290.00
                      </h6>
                    </div>
                  </div>
                  <div className="review">
                    <img className="mr-2" src={star} alt="" />{" "}
                    <span>(5.00)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single_menu">
                  <img src={singlemenu} alt="" />
                  <div className="d-flex justify-content-between align-items-center p-24">
                    <div className="w-60">
                      {" "}
                      <h5>Chicken Salad with Avocado Toast</h5>
                    </div>
                    <div className="w-30 food_price">
                      <h6>
                        <span>
                          <strong>&#2547;</strong>
                        </span>{" "}
                        290.00
                      </h6>
                    </div>
                  </div>
                  <div className="review">
                    <img className="mr-2" src={star} alt="" />{" "}
                    <span>(5.00)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn_lmore_menu text-center">
                Load More Menu <i class="fa fa-caret-right"></i>
              </button>
            </div>
          </section>

          <section className="chefs">
            <div className="row">
              <div className="col-sm-6">
               <div className="chefs_text">
               <h1>Cooked by the Best Chefs in the World</h1>
                <p>
                  We present the best chefs to cook your food to make the <br /> food
                  toste extraordinary
                </p>

                <p className="mt-28"><span><img className="mr-22" src={mark} alt="" /> A guaranteed delicious meal</span></p>
                <p className="mt-20"><span><img className="mr-22" src={mark} alt="" />Food is guaranteed hygienic</span></p>
                <p className="mt-20"><span><img className="mr-22" src={mark} alt="" />Cooked quickly</span></p>
               </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-5 chefs_img">
                <img src={cheif} alt="" />
              </div>
            </div>
          </section>


<section className="customer_say mt-90">
    <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5"></div>
    </div>
</section>







        </div>
      </div>
    </>
  );
};

export default FoodHome;
