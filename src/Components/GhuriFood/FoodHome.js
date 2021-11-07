import React from "react";
import foodcover from "../../images/food/cover.png";
import dish1 from "../../images/food/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41 1.png";
import leaf from "../../images/food/leaf.png";
import dish2 from "../../images/food/dish2.png";
import dish3 from "../../images/food/dish3.png";
import dish4 from "../../images/food/dish4.png";

import fooditem1 from "../../images/food/fooditem1.png";
import fooditem2 from "../../images/food/fooditem2.png";
import fooditem3 from "../../images/food/fooditem3.png";

import star from "../../images/food/Star.png";
import cheif from "../../images/food/chefs2.png";
import mark from "../../images/food/mark.png";
import aman from "../../images/food/aman.png";
import rakib from "../../images/food/rakib.JPG";

import customer_leaf from "../../images/food/customer_leaf.png";
import star_rating from "../../images/food/StarYellow.png";
import OwlCarousel from "react-owl-carousel";
import "./GhuriFood.css";

const FoodHome = () => {
  let option = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

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
                lifestyle.
              </p>
              {/* <button className="btn btn_lmore">
                Learn More <i className="fa fa-caret-right"></i>
              </button> */}
            </div>
         
            <div className="col-sm-6 hero_food_IMG">
              <img src={foodcover} alt="" />
            </div>
          </div>

          <div className="special_dish mt-90">
            <h1 className="text-center">Our Special Dish</h1>
            <p className="text-center">Made with premium ingredients.</p>
            <div className="row align-items-center mt-70 pb-90">
              <div className=" col-md-6 col-sm-6 col-lg-3">
                <div className="single_cart_food text-center">
                  <img src={dish1} alt="" />
                  <h5>Green Salad</h5>
                  <p>
                    A green salad filled with tomato, mixed salad and sliced chicken deli meat.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="single_cart_food text-center">
                  <img src={dish2} alt="" />
                  <h5>Healthy Salad</h5>
                  <p>
                    A healthy salad filled with cabbage, mustard greens, and
                    added chicken pieces for a more delicious.
                  </p>
                </div>
              </div>
              <div className=" col-md-6 col-sm-6 col-lg-3">
                <div className="single_cart_food text-center">
                  <img src={dish3} alt="" />
                  <h5>Vegan Menu</h5>
                  <p>
                  A vegan menu filled with tomatoes, red onions, olive oil, lemon juice, and fresh cilantro.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-3 text-center">
                <div className="single_cart_food text-center">
                  <img src={dish4} alt="" />
                  <h5>Chicken Salad</h5>
                  <p>
                    A chicken salad filled with Stir chicken, avocado, scallions, celery, onion and lime juice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="fresh_veg">
            <div className="row">
              <div className="col-sm-6 fresh_veg_div">
                <img src={leaf} alt="" />
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <h1>Fresh Vegetables Every Day</h1>
                <p>
                  We present various types of fresh vegetables and taken
                  directly from the farmer’s garden especially for you
                </p>
                {/* <button className="btn btn_lmore">
                  Learn More <i className="fa fa-caret-right"></i>
                </button> */}
              </div>
            </div>
          </section>

          <section className="popular_menu mt-90">
            <h1 className="text-center">Our Polpular Menu</h1>
            <p className="text-center">Made with premium ingredients.</p>
            <div className="row mt-70">
              <div className="col-lg-4  col-sm-6 Food_menu">
                <div className="single_menu">
                  <img src={fooditem1} alt="" />
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
                        00.00
                      </h6>
                    </div>
                  </div>
                  <div className="review">
                    <img className="mr-2" src={star} alt="" />{" "}
                    <span>(5.00)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 Food_menu">
                <div className="single_menu">
                  <img src={fooditem2} alt="" />
                  <div className="d-flex justify-content-between align-items-center p-4">
                    <div className="w-60">
                      {" "}
                      <h5>Salted Egg Salad with curry sauce</h5>
                    </div>
                    <div className="w-30 food_price">
                      <h6>
                        <span>
                          <strong>&#2547;</strong>
                        </span>{" "}
                        00.00
                      </h6>
                    </div>
                  </div>
                  <div className="review">
                    <img className="mr-2" src={star} alt="" />{" "}
                    <span>(5.00)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 Food_menu">
                <div className="single_menu">
                  <img src={fooditem3} alt="" />
                  <div className="d-flex justify-content-between align-items-center p-24 ">
                    <div className="w-60">
                      {" "}
                      <h5>Tuna Salad with spicy cucumber</h5>
                    </div>
                    <div className="w-30 food_price">
                      <h6>
                        <span>
                          <strong>&#2547;</strong>
                        </span>{" "}
                        00.00
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
              {/* <button className="btn btn_lmore_menu text-center">
                Load More Menu <i className="fa fa-caret-right"></i>
              </button> */}
            </div>
          </section>

          <section className="chefs">
            <div className="row">
              <div className="col-sm-6">
                <div className="chefs_text">
                  <h1>Cooked by the Best Chefs in the World</h1>
                  <p>
                    We present the best chefs to cook your food to make the{" "}
                    <br /> food toste extraordinary
                  </p>

                  <p className="mt-28">
                    <span>
                      <img className="mr-22" src={mark} alt="" /> A guaranteed
                      delicious meal
                    </span>
                  </p>
                  <p className="mt-20">
                    <span>
                      <img className="mr-22" src={mark} alt="" />
                      Food is guaranteed hygienic
                    </span>
                  </p>
                  <p className="mt-20">
                    <span>
                      <img className="mr-22" src={mark} alt="" />
                      Cooked quickly
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-5 chefs_img">
                <img src={cheif} alt="" />
              </div>
            </div>
          </section>

          <section className="owl_profile">
            <OwlCarousel
              navigation={true}
              navText={[
                `<div class='nav-btn prev-slide'><img src="https://i.ibb.co/Jn6GBBC/next.png"/> </div>`,
                `<div class='nav-btn next-slide'><img src="https://i.ibb.co/Fn597p9/preview.png" /></div>`,
                
              ]}
              loop
              margin={10}
              autoplay
              dots={false}
              {...option}
              className=" d-flex  align-items-center owl-theme"
            >
              <section className="customer_say mt-90  pb-5">
                <div className="row align-items-center">
                  <div className="col-sm-6 customer_leaf">
                    <img src={customer_leaf} alt="" />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5 customer_heading">
                    <h1>
                      {" "}
                      Customer <br /> say about us
                    </h1>
                    <div className="user_food d-flex align-items-center">
                      <div className="image_sec">
                        <img src={aman} alt="" />
                      </div>
                      <div className="profile_sec">
                        <h5>Aman Ullah</h5>
                        {/* <p>UI/UX Designer</p> */}
                      </div>
                    </div>
                    <p className="cus_message">
                      Excellent food. Menu is extensive and seasonal to a
                      particularly high standard. Definitely fine dining. It can
                      be expensive but worth it and they do different deals on
                      different nights so it’s worth checking them out before
                      you book. Highly recommended.
                    </p>
                    <div className="ratings d-flex align-items-center">
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">(5.00)</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="customer_say mt-90  pb-5">
                <div className="row align-items-center">
                  <div className="col-sm-6 customer_leaf">
                    <img src={customer_leaf} alt="" />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5 customer_heading">
                    <h1>
                      {" "}
                      Customer <br /> say about us
                    </h1>
                    <div className="user_food d-flex">
                      <div className="image_sec">
                        <img src={rakib} alt="" />
                      </div>
                      <div className="profile_sec">
                        <h5>Rakibul Hasan</h5>
                        {/* <p>Frontend Developer</p> */}
                      </div>
                    </div>
                    <p className="cus_message">
                    Ghuri Food has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation and wonderful dessert. I recommend to everyone!
                    </p>
                    <div className="ratings d-flex align-items-center">
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>
                      <div className="star">
                        <img src={star_rating} alt="" />
                      </div>

                      <div className="star">(5.00)</div>
                      
                    </div>
                  </div>
                </div>
              </section>
            </OwlCarousel>
          </section>
        </div>
      </div>
    </>
  );
};

export default FoodHome;
