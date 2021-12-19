import React from "react";
import "./collection-preview.component.scss"
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((thing, idx) => idx < 4)
                    .map( ({id, ...otherProps}) => ( <CollectionItem key={id} id={id} {...otherProps} />))
            }
        </div>
    </div>
)

export { CollectionPreview }