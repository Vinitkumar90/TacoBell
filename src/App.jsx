import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 *
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -ResturantContainer
 *    -ResturantCard
 *      -Img
 *      -name of res, star rating,cuisine
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const resObj = {
  id: "696327",
  name: "KFC",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/f1480259-2e27-4245-adfb-c51462604d67_696327.JPG",
  locality: "Shiv Dayal Nagar",
  areaName: "Harmu Ranchi",
  costForTwo: "₹400 for two",
  cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  avgRating: 4.4,
  parentId: "547",
  avgRatingString: "4.4",
  totalRatingsString: "2.9K+",
  sla: {
    deliveryTime: 46,
    lastMileTravel: 8.3,
    serviceability: "SERVICEABLE",
    slaString: "45-50 mins",
    lastMileTravelString: "8.3 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2025-07-04 02:00:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
        description: "Delivery!",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [
          {
            attributes: {
              description: "Delivery!",
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            },
          },
        ],
      },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹59",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  cta: {
    link: "https://www.swiggy.com/city/ranchi/kfc-shiv-dayal-nagar-harmu-ranchi-rest696327",
    type: "WEBLINK",
  },
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
