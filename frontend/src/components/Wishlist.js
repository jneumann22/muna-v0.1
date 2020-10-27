import React from 'react';
import ColoredLine from '../helperComponents/ColoredLine';
import WishListItem from '../helperComponents/WishListItem';

class Wishlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        if (this.props.noItems) {
            return (
                <div>
                    You Haven't added any items yet
                </div>
            )
        }
        return (

            <div>

            <div>
                My Wishlist
              <ColoredLine color = "lightpink" />
            </div>

            <div>
                {this.props.items.map(c => <WishListItem key={c.id} name={c.name} />)}
            </div>



            </div>
        )
    }

}

export default Wishlist;