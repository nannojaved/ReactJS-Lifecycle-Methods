// We need 2 different packages: React and ReactDOM. These 2 packages are different because React is being rendered on different places, f. ex., React Native
// which is rendered on mobile, React Native has different features. We need React because we want to create new Component. And we need ReactDOM so that we 
// could be able to insert this component inside ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// now we create a component
// 1- we use a keyword called class,
// 2- then give a name to this component, f. ex., HelloMessage
// 3- and then extend this component using React.Component
// 4- then every component has a render method. This render method renders some HTML, which is infact a function call. In other words each render method 
// returns JSX. F. ex., <h1>HelloWorld</h1>
// this way a component has been created    
class App extends React.Component{
    //   1- only once
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("constructor");
        console.log(this.state.count);
    }

    incCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    //   2- only once
    componentWillMount(){
        console.log("Will Mount");
    }

    //   4- only once
    componentDidMount(){
        console.log("Mounted");
    }

    // - very important Lifecycle
    // - this Lifecycle method returns only 2 value: true or false
    // - if this returns true, then component will be rendered
    // - if this Lifecycle method returns false, then component will not be rendered
    // - this is also important to know that this Lifecycle method is not called in initial rendering
    // - but when next rendering is called then this Lifecycle method is called
    shouldComponentUpdate(){
        if(this.state.count>10){
            return false;
        }
        return true;
    }

    //   3- again and again
    render(){        
        console.log("rendering");        
        return(            
            <section>
                {this.state.count}
                <button onClick={this.incCount}>Increment</button>
            </section>
        )
    }
}

// the component created above will not be shown in browser because the component is not still added to a DOM. This means we have to import first ReactDOM: line 5
// after we have imported ReactDOM, we need to render it. 
// render method accepts 2 arguments: 1- which component should be rendered and 2- where this component should be rendered
ReactDOM.render(<App />, document.getElementById('root'));