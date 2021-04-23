import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// this page is nested into Route in app file, so we have access to match, location and hostory
const ShopPage = ({ match }) => (
         <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionsOverview}/>
           <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div> 
    
)


export default ShopPage;