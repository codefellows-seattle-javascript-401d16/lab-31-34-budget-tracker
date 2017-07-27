### App Component

* The App component sets up the Provider for the redux store and the Router.

### Dashboard Component

* displayed on the '/' route
* uses react-redux's connect to map state and dispatch-able methods to props
* displays a CategoryForm for adding categories to the app state
* displays a CategoryItem for each category in the app state

### CategoryForm Component

* expects an onComplete prop to be a function
* onComplete is invoked with the CategoryForms State when the form is submitted
* expects a buttonText prop to be configure the submit buttons text
* supports an optional category prop that will initialize the state of the form

### CategoryItem Component

* displays the category's name and budget
* displays a delete button
* onClick the category is removed from the application state
* displays a CategoryForm
* onComplete the form updates the component in the application state
* adds an ExpenseForm to CategoryItem that enables the user to create expenses on the app state
* displays a list of all the ExpenseItems belonging to the category
* Wrapped the contents of a category item in a Dropzone
* Updated the expense so that it appears in the correct category when onComplete of a Dropzone fires.


### ExpenseForm Component
* has an `onComplete` prop that is invoked with the form state on submit
* supports an `expense` prop that sets the initial form state and updates the state in the hook on `componentWillReceiveProps()`
* has a `buttonName` prop that configures the submit button's text

### ExpenseItem Component
* has a button that deletes an expense from the appState `onClick`
* displays the `name` and `price` of the component
* displays an ExpenseForm that enables the user to update the expense in the appState.
* Wrapped the contents of the ExpenseItem in a Draggable
* Passed the expense data into the Draggables dataTransferItem prop

## Middleware
* added a reporter middleware to the app's redux store
* added validation to redux reducers

#### Test
* Tested every component
* Tested action creators
* Tested each reducer used in combineReducers
* Tested validation

### Draggable
* Created a component that enable users to drag its children
* It stores data passed into its `dataTransferItem` prop on the event handler for `onDragStart`
  * data is stored as JSON under the MIME 'application/json'

#### Droppable
* Create a component that enables users to drop a Draggable component
* onDrop it should invoke a callback with the data passed using the events dataTransferObject
  * remember to parse the JSON

###### CategoryItem
* Wrap the contents of a category item in a dropzone
* When the onComplete of a Dropzone is fired update the expense so that it appears on the correct category

##### SCSS
* Styled the application using sass best practices  
 * Created a _reset.scss _vars.scss and _base.scss 
