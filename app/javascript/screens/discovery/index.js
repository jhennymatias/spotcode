import React, {Fragment} from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import Disco from '../../components/discovery';
import Album from '../album';

import styled from 'styled-components';
 
const DivVSpaced = styled.div`
  margin-top: 50px;
`

const Discovery = () =>{
    return(
        <Fragment>
            <Disco/>
            <Album/>            
            <NavbarFooter/>
        </Fragment>
    )
}

export default Discovery;
