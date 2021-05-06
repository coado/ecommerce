import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { DirectoryMenu } from './directory.styles.jsx'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => {
            return (
            <DirectoryMenu >
                {
                   sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)
                }
            </DirectoryMenu>  
            )

};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);