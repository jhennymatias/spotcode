2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
	
import React, { Fragment } from 'react';
import { Navbar, Container, Columns } from 'react-bulma-components';
 
const Menu = () => {
  return (
    <Fragment>
      <Navbar color="dark">
        <Container>
   		  <Columns className='is-mobile'>
            <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
            <div>jhenny</div>
            </Columns.Column>
            <Columns.Column>
              
            </Columns.Column>
          </Columns>
        </Container>
      </Navbar>
    </Fragment>
  );
}
export default Menu;