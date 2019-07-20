import React from 'react';

const Details = (props) => {

    const [item, setItem] = React.useState(
        JSON.parse(localStorage.getItem('items')).filter(item => {
            return item.id === parseInt(props.match.params.id);
        })
    );




    let i = item[0];

    return (
        <div>
            <div>{i.id}</div>
            <div>{i.name}</div>
            <div>{i.quantity}</div>
            <div>{i.description}</div>
            <div>{i.checked ? 'Checked' : 'Unchecked'}</div>
        </div>
    )
}

export default Details;