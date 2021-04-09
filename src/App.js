import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <main>
          <h1>Digital Journal <span class= "create-note"> | Create A Note</span></h1>
          <p>Log in</p>
          <p>Sign Up</p>
          
          <form action="/action_page.php" id="usrform">
          <p>Title:</p><input type="text" name="usrname" />
          </form><br /> 

          <p>Body:</p>
          <textarea rows="4" cols="50" name="comment" form="usrform"></textarea><br /> 

          <p>Use the form above to create a post. Make sure you fill the 
            required title and body fields and then press submit.</p>
          <input type="submit" />

          <h3>Title</h3>
          <p> Sample Text </p>

          <h3>Title</h3>
          <p> Sample Text </p>

          <h3>Title</h3>
          <p> Sample Text </p>

          
        </main>
      </header>
    </div>
  );
}

export default App;
