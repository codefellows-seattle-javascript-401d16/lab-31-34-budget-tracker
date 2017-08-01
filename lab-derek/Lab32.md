401 JS --  Lab 32 Budget Tracker
===

## Submission Instructions
  *  continue working from lab 31
  *  submit a pull request to the project

## Requirements  
#### Feature Tasks
##### expense
* in this app a expense should contain at least the following propertys
  * DONE:  `id` a uuid
  * DONE:  `categoryID` an id that corresponds to an existing category
  * DONE:  `timestamp` a date from when the category was created
  * DONE:  `name` a string that is the name of the category
  * DONE:  `price` a number that is the total amount of $ in the category
  * TODO:  fell free to add more to your expense if you want

##### redux
###### app reducer
* DONE:  export a reducer that hols the entire app state from `reducer/index.js`
* DONE:  create a reducer that will combine you categories reducer and expenses reducer


###### expenses reducer
* DONE:  create a category reducer in your your reducer directory
* DONE:  this reducer should atleast support the following interactions
  * DONE:  `EXPENSE_CREATE` -- store an expense
  * DONE:  `EXPENSE_UPDATE` -- update an existing expense
  * DONE:  `EXPENSE_DELETE` -- delete an existing expense
* TODO:  if you need others feel free to add them

###### action creators
* DONE:  you should create an action createor for each interaction supported by your expenses reducer

###### store
* DONE:  in `lib/store.js` export a function  that will return a redux store from your app reducer

##### Components
Create the following components and structure them according to the following diagram.  
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categorys
        [Category Item] -- list of Category items
           CategoryForm  -- for updating categorys
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense
```

###### Update the CategoryItem Component
* DONE:  should keep all of the features described in lab-31
* DONE:  add an ExpenseForm to your category item that enables the user to create expenses on your app state
* DONE:  display list all the ExpenseItems belonging to the category


##### ExpenseForm Component
* DONE:  should have an `onComplete` prop that will be invoked with the form state on submit
* DONE:  should support an `expense` prop that will both set the intial form state, and update the state in the hook on `componentWillReceiveProps()`
* DONE:  should have a `buttonText` prop that will configure the submit button's text

##### ExpenseItem Component
* DONE:  should have a button that will delete the expense from the appState `onClick`
* DONE:  should display the `name` and `price` of the component
* TODO:  should display an ExpenseForm that will enable the user to update the expense in the app state

#### Test
* TODO:  Test your ExpenseForm and CategoryForm
* TODO:  Test all of your action creators
* TODO:  Test each reducer used in your apps combineReducers

####  Documentation  
Write a description of the project in your README.md
