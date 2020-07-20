---
to: src/components/<%= name %>/index.js
---

import React from 'react'
import PropTypes from 'prop-types';
import StyledAvatar from "./style"


function <%= name %>({children, ...rest}) {
    return (
        <Styled<%= name %> {...rest}>
            {children}
        </Styled<%= name %> >
    )
}

Avatar.propTypes = {
   children: PropTypes.any
}

export default Avatar
