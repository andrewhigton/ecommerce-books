import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
        {
          title: 'Short stories in translation',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'Stories in translation'
        },
        {
          title: 'Irish short stories',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'Irsh stories'
        },
        {
          title: 'Russian short stories',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'Russian stories'
        },
        {
          title: 'American short stories',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'American stories'
        },
        {
          title: 'British short stories',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'British stories'
		        }
		      ]
			}
		 }
	
	render() {
	return (
			<div className='directory-menu'>
    			{this.state.sections.map(({ id, ...otherSectionProps }) => (
    				<MenuItem key={id} {...otherSectionProps} />
              // title={title} size={size} imageUrl={imageUrl} /> 
    		))}
    		</div>
			);
		}
	}

export default Directory;