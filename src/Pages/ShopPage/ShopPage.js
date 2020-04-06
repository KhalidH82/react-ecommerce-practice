import React from "react";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import CollectionOverview from "../../Components/collections-overview/collections-overview";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
