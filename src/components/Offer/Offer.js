import React from "react";
import './Offer.css'
import cover1 from '../../img/offer/Bakery Promotion instagram story.png'
import cover2 from '../../img/offer/Bakery Promotion instagram story2.png'
import cover3 from '../../img/offer/Bakery Promotion instagram story3.png'
import cover4 from '../../img/offer/Bakery Promotion instagram story4.png'



const Offer = () => {
  return (
    <div>
      <h1 className="text-center font-normal third-color-text text-4xl md:text-6xl mb-4 mt-20 mb-8">
        Resect Offers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 img-holder-offer container mx-auto">
          <img src={cover1} alt="" />
          <img src={cover2} alt="" />
          <img src={cover3} alt="" />
          <img src={cover4} alt="" />
      </div>
    </div>
  );
};

export default Offer;
