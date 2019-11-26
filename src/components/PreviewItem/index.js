import React from 'react'


const PreviewItem = ({previewItem}) => (
    <div>
        <div>{previewItem.name}</div>
        <div>{previewItem.price}</div>
    </div>
)

export default PreviewItem;
