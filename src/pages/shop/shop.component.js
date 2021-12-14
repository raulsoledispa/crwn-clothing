import React from "react";
import DATA from "./shop.data";
import {CollectionPreview} from "../../components/collection-preview/collection-preview.component";

export default class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: DATA
        }
    }

    render() {
        return ( <div>
            {
                this.state.collections.map(({id, ...otherProps}) => (<CollectionPreview key={id}
                                                                                      {...otherProps} />))
            }
        </div>)
    }
}