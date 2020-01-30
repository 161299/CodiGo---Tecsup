import React, { Fragment } from "react";
import NavClient from "../components/client/NavClient";
import {Helmet} from 'react-helmet';

const ClientLayout = ({children, title, subtitle}) => {
  return (

      <Fragment>
        <Helmet>
          {title && <title>{title}</title> }
          {subtitle && <meta  name="description" content={subtitle}  /> }
        </Helmet>
        <NavClient />
        {children}
      </Fragment>
  );
};

export default ClientLayout;
