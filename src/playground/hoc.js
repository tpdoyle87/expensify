import React from 'react'
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>stuff: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is PRIVATE info. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not logged in</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is the info" />, document.getElementById('root'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the info" />, document.getElementById('root'))
