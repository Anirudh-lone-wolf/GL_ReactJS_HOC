import React, {lazy, Suspense} from 'react';
import { NavLink, Route, RouteComponentProps } from 'react-router-dom';
import Email from './Email';
const ContactForm = lazy( () => import( './ContactForm' ) );

type Props = { };

const Contact = ( { history, location, match } : Props & RouteComponentProps ) => {
    return (
        <>
            <h1>Contact</h1>
            <hr />
            <div>
                Contact
                <address>
                    #72, Arthur's Lane, Rosewell, New York - 10001
                </address>
            </div>

            {/* <div className="navigation-links">
                <NavLink to={`${match.url}/phone`} activeClassName="active">Phone</NavLink>
                <NavLink to={`${match.url}/email`} activeClassName="active">Email</NavLink>
            </div> */}

            <div className="navigation-links">
                <NavLink to={`${match.url}/phone`} activeClassName=''>Phone</NavLink>
                <NavLink to={`${match.url}/email`} activeClassName=''>Email</NavLink>
                <NavLink to={`${match.url}/message`} activeClassName=''>Message</NavLink>
            </div>

            {/* <Route path={`${match.path}/phone`} render={() => <div>+91-9123456789</div>} />
            <Route path={`${match.path}/email`} render={( props : RouteComponentProps ) => <Email value="contactus@example.com" {...props} />} /> */}

            <Route path={`${match.path}/phone`} render={ () => <div>+91-8800491656</div> } />
            <Route path={`${match.path}/email`} render={ ( props : RouteComponentProps ) => <Email value='contactus@example.com' {...props} /> } />
            <Suspense fallback={<div>Loading.....</div>}>
                <Route path={`${match.path}/message`} render={ ( props : RouteComponentProps ) =>   <ContactForm {...props} /> } />
            </Suspense>
        </>
    );
};

export default Contact;