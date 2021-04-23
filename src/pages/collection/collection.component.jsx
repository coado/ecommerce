import React from 'react';
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss'

// Route passes match object to child, so we have access to it
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>
    )
};

// ownProps to propsy komponentu, który jest podłączony do connect.
// W tym przypadku propsy collectionPage
const mapStateToProps = (state, ownProps) => ({
    // jakos tak trzeba zrobić, zeby wprowadzic oba argumenty do funkcji
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);