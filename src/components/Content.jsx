export const Content = () => {
    return (
        <div className="content-container">
            <div className="left_big_image">
                <img src="images/big-image.svg" alt="" />
            </div>
            <div className="right_content">
                <p className="p_image"><span className="p-blue-image">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="p-blue-image">$14 each</span> ($84.00 total!)</p>
                <div className="content_flex">
                    <div className="content_right">
                        <img className="image_aparato" src="images/image-small.svg" alt="" />
                    </div>
                    <div className="content_left">
                        <div className="content_left__header">
                            <span className="p_right_content">Clarifion Air Ionizer</span>
                            <div className="content_left__header__right">
                                <span className="span_grey">$180</span>
                                <span className="span_blue">$84</span>
                            </div>
                        </div>
                        <div className="group_stars">
                            <img src="icons/star.svg" alt="" />
                            <img src="icons/star.svg" alt="" />
                            <img src="icons/star.svg" alt="" />
                            <img src="icons/star.svg" alt="" />
                            <img src="icons/star.svg" alt="" />
                        </div>

                        <div className="left_in_shock">
                            <img src="icons/point_blue.svg" alt="" />
                            <span className="span_shock">12 left in Stock</span>
                        </div>

                        <p className="p_shock">
                            Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                        </p>
                    </div>
                </div>
                <div className="items_contents">
                    <img src="icons/check_blue.svg" alt="" />
                    <p className="p_items">
                        Negative Ion Technology may <span className="p_items_strong">help with allergens</span>
                    </p>
                </div>
                <div className="items_contents">
                    <img src="icons/check_blue.svg" alt="" />
                    <p className="p_items">
                        Designed for <span className="p_items_strong">air rejuvenation</span>
                    </p>
                </div>
                <div className="items_contents">
                    <img src="icons/check_blue.svg" alt="" />
                    <p className="p_items">
                        <span className="p_items_strong">Perfect for every room </span>
                        in all types of places.
                    </p>
                </div>

                <div className="save_money">
                    <div className="cirle_save_money">
                        <img src="icons/circle_save.svg" alt="" />
                        <p className="p_save_money">Save <span className="span_save">53%</span> and get 6 <span className="span_save">extra Clarifision</span> for only <span className="span_save">$14 Each.</span></p>
                    </div>
                </div>

                <button className="button_claim">
                    Yes - Claim my discount
                    <img src="icons/arrow_left.svg" alt="" />
                </button>


                <div className="credit_card">
                    <div className="free_shipping">
                        <span className="text_credit_card">Free Shipping</span>
                    </div>
                    <div className="secure_credit_card">
                        <img src="icons/lock.svg" alt="" />
                        <span className="text_credit_card">Secure 256-bit SSL encryption.</span>
                    </div>
                    <div className="franchises">
                        <img className="img_franchises" src="icons/visa.svg" alt="" />
                        <img className="img_franchises" src="icons/shop_pay.svg" alt="" />
                        <img className="img_franchises" src="icons/paypal.svg" alt="" />
                        <img className="img_franchises" src="icons/mastercard.svg" alt="" />
                        <img className="img_franchises" src="icons/gpay.svg" alt="" />
                        <img className="img_franchises" src="icons/apple_pay.svg" alt="" />
                        <img className="img_franchises" src="icons/amex.svg" alt="" />
                    </div>
                </div>


                <h3 className="i_dont_want">No thanks, I don’t want this</h3>

            </div>
        </div>
    )
}