import React from 'react';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
// import SHOP_DATA from './shop.data.js';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
      <div className='shop-page'>        
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
)

export default ShopPage;
// export default connect(mapStateToProps)(ShopPage);

 // {collections.map(({ id, ...otherCollectionProps }) => (
 //       <CollectionPreview key={id} { ...otherCollectionProps } />
 //       ))}


// import React from 'react';
// import SHOP_DATA from './shop.data.js'; 
// import CollectionPreview from '../../components/preview-collection/preview-collection.component';

// class ShopPage extends React.Component {
// 	constructor(props) {
// 	super(props);

// 	this.state = {
// 		collections: SHOP_DATA 
// 		};
// 	}

// 	render() {
// 		const {collections}=this.state;
// 		return (

// 		<div className='shop-page'>
// 		{collections.map(({ id, ...otherCollectionProps }) => (
// 			<CollectionPreview key={id} { ...otherCollectionProps } />
// 			))}
// 		</div>
// 		);
// 	} 
// }

// export default ShopPage;