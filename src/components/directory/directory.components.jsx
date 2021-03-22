import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    // populates menu-item sections like a product.json file
    this.state = {
      sections: [
        {
          title: 'the joy of springtime',
          subtitle: 'Fusce ut placerat orci nulla pellentesque dignissim enim →',
          imageUrl: 'https://images.pexels.com/photos/6619764/pexels-photo-6619764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'large',
          id: 1,
          linkUrl: 'shop/seasonal'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/2035738/pexels-photo-2035738.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          size: 'medium',
          id: 2,
          linkUrl: 'shop/recipe'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/6957779/pexels-photo-6957779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'medium',
          id: 3,
          linkUrl: 'shop/decor'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/45247/potato-cook-pot-eat-45247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'large',
          id: 4,
          linkUrl: 'shop/kitchenware'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 5,
          linkUrl: 'shop/dishware'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/5899657/pexels-photo-5899657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 6,
          linkUrl: 'shop/serving'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/4495798/pexels-photo-4495798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 7,
          linkUrl: 'shop/linens'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'medium',
          id: 8,
          linkUrl: 'furniture'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/2789545/pexels-photo-2789545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'medium',
          id: 9,
          linkUrl: 'shop/vases'
        },
        {
          imageUrl: 'https://images.pexels.com/photos/6213671/pexels-photo-6213671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'large',
          id: 10,
          linkUrl: 'shop/registery'
        },
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
};

export default Directory;