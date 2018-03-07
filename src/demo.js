function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDom.render(
  element,
  document.getElementById('root')
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;

const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// 👆 it's the same as below

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

* updating the rendered Element
React elements are immutable.
the only way to update is to create a new element and pass it to ReactDOM.render()

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocalTimeString()}.</h2>
    </div>
  );
  ReactDom.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

* ways to write components

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        {/* <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        /> */}
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

=>

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="Userinfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}



























.
