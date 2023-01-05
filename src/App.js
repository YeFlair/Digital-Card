// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./images/selfie.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card style={{width: '18rem' }}>
      <Card.Img variant="top" src={img1} class="img-fluid" alt="Responsive image"/>
      <Card.Body class="card--body">
        <Card.Title class ="card--title"><p class="h3">Daryl Corbin</p></Card.Title>
        <Card.Text class="card--text">
          <p className="card--subtitle"> Full-Stack Developer</p>
          <p className ="website"><a href='https://cooltablenerd.com'>cooltablenerd.com</a></p>
          <a href="mailto:corbindac@gmail.com"><button className= "button--links btn btn-primary bi-envelope"> Email</button></a>
        <a href="https://www.linkedin.com/in/daryl-corbin/" target="_blank" rel="noreferrer"><button className="button--links btn btn-primary bi-linkedin" > LinkedIn</button></a>
        <h6 className = "card--about"><u>About:</u></h6>
        <p className="about--section">I'm a full-stack developer based in Los Angeles, CA. I'm a freelancing self-taught/coding boot camp graduate open for employment. I created this digital card by using Javascript / React / Bootstrap.</p>
        <h6 className="card--intrest"><u>Intrest:</u></h6>
        <p className="interest--section">My interest includes socializing, but I prefer solo movie trips. I'm a gamer (console:ps5) and into sneakers. I collect funko pops (majority: The Office characters), and the Los Angles Lakers/Rams are the greatest teams in their sport. </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <footer className ="footer--links" >
    <a href='https://www.youtube.com/@CoolTableNerd' target="_blank" rel="noreferrer"><i class="bi bi-youtube"></i></a>
    <a href='https://medium.com/@CoolTableNerd' target="_blank" rel="noreferrer"><i class="bi bi-medium"></i></a>
    <a href='https://www.instagram.com/cooltablenerd' target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
    <a href='https://www.github.com/yeflair' target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
    </footer>
      </header>
    </div>
  );
}

export default App;
