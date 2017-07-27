### App Component

# The App component sets up the Provider for the redux store and the Router.

### Dashboard Component

# displayed on the '/' route
# uses react-redux's connect to map state and dispatch-able methods to props
# displays a CategoryForm for adding categories to the app state
# displays a CategoryItem for each category in the app state

### CategoryForm Component

# expects an onComplete prop to be a function
# onComplete is invoked with the CategoryForms State when the form is submitted
# expects a buttonText prop to be configure the submit buttons text
# supports an optional category prop that will initialize the state of the form

### CategoryItem Component

# displays the category's name and budget
# displays a delete button
# onClick the category is removed from the application state
# displays a CategoryForm
# onComplete the form updates the component in the application state
