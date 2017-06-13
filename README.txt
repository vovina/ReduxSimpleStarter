

Components/views are collection of javascript functions which produce html.
JSX is a subset of js that allows us to write sth lookslike html in our js but behind the scene its really js, and make aor components more clean and readble. 

ES6 feature called javascript modules, codes in one file are seperated/silo (we can't make any reference to any variable inside it) from other codes and libraries we have in project. files have zero acces to eachother unless we explicitly say I want access.

wE HAVE ALWAYS ONE COMPONENT PER FILE.


functional components:get some data return a jsx, it can contains class based components. like App
class based component: has more undrestanding of its state, what happens to it while it has been rendered

constructor:
All js classes have special function called cunstructor, this function is the first and only function that get automatically called whenever a new instance of the class is created.
It is used for doing some set up like initialising some variables and state.

super:
Call parent class function.

state object: 
functional components do not have state its obly for class based components
It is a plain js object that records and reacts to user events, each class based component has its own.
If state changes the component rerender also forces all of its children to rerender as well and push all the changes to the DOM.

React is more declerative rather tjan imperative(user=>make change) approach.
controlled form element is doing that for us.

The most parent component concerned with data is responsible for fetching.
Data change = need state = need class based component.

props -> this.props

My Qs:
1- extend and import
2-render(){} is really a function?
3-I don't see the eventHandler in console
4- function decleration and expression
5-static
6- flux and redux
7- how to debug it?
8- key onjoori => minevisim key ()

redux
how to design your state!



=============================================

