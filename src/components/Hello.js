//@flow
import * as React from 'react';

type Props = {
  name?: string;
};

const Hello = (props: Props) => <h1>Hello {props.name}!</h1>

Hello.defaultProps = { 
  name: 'Name'
};
export default Hello;