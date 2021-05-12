import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
// this page is nested into Route in app file, so we have access to match, location and hostory

class ShopPage extends React.Component {


  componentDidMount() {
    const {fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const {match} = this.props;
    return(
         <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
           <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div> 
      
    )
  }
}



const mapDispatchToProps = dispatch => ({
 fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);