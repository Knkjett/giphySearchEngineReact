import React from 'react';

const Gif = props => {
    console.log('GIF props: ', props)
    const imgStyles = {
        'width': '100%',
        'height': 'auto',
    };
    
    return <div>
        <img src={props.src} style={imgStyles} />
    </div>
}

/* alternative approach */
const Gif2 = props => {
    const imgProps = {
        src: props.src,
        style: {
            'width': '100%',
            'height': 'auto',
        }
    }
    
    return <div>
        <img {...imgProps} />
    </div>
}

export {Gif};