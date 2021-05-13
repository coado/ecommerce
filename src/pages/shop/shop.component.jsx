import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
// this page is nested into Route in app file, so we have access to match, location and hostory

const ShopPage = ({match, fetchCollectionsStart}) => {

  // its would work as well with empty array, but empty array generate warning,
  // wich we want avoid by passing this function into array.
  // this function comes from props, so we know, that it's gonna trigger only ones.
  // consequently it's work the same as empty array
useEffect(() => {
  fetchCollectionsStart();
}, [fetchCollectionsStart])


    return(
         <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
           <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div> 
      
    )
  }




const mapDispatchToProps = dispatch => ({
 fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);