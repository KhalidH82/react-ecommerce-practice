import React, { Component } from "react";
import SHOP_DATA from "./SHOP_DATA";
import CollectionPreview from "../../Components/collection-preview/collection-preview";

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={collections.id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
