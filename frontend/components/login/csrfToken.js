import React, {
    PropTypes,
} from 'react';

//Here we import the previous created file
import {csrftoken} from './djangoToken';

const DjangoCSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};


export default DjangoCSRFToken;
