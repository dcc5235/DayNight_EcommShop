import React from 'react';

import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // collection is equal to an array of items stored in shop.data.js
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (<div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
      ))
      }
      </div>
    );
  }
}

export default ShopPage;