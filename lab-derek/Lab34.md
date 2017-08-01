401 JS --  Lab 33 Budget Tracker
===

## Submission Instructions
  * DONE: continue working from lab 33
  * DONE: submit a pull request to the project

## Requirements  
#### Feature Tasks
* DONE: complete the lab 31, 32, and 33 tasks
##### SCSS
Style the application using sass best practices  
 * DONE: Create a _reset.scss _vars.scss and _base.scss
 * TODO: style your components

##### Components
add and refactor  the following components and organzie them according to the following tree
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categorys
        [Category Item] -- list of Category items
           Dropzone
             CategoryForm  -- for updating categorys
             ExpenseForm -- for creating expenses
             [ExpenseItem]  -- list of expense items
                Draggable
                  ExpenseForm -- for updating an expense
```
###### Daggable
* DONE: Create a component that enable users to drag its children
* DONE: It store data passed into its `dataTransferItem` prop on the event handler for `onDragStart`
  * DONE: data should be stored as json under the MIME 'application/json'

###### Dropable
* DONE: Create a component that enables users to drop a Draggable component
* DONE: onDrop it should invoke a callback with the data passed using the events dataTransferObject
  * DONE: remember to parse the json
###### ExpenseItem
* DONE: Wrap the contents of the ExpenseItem in a Draggable
* DONE: Pass the expense data into the Draggables dataTransferItem prop
###### CategoryItem
* DONE: Wrap the contents of a category item in a dropzone
* DONE: When the onComplete of a Dropzone is fired update the expense so that it appears on the correct category

#### Test
* TODO: Test every component except app
* TODO: Test all of your action creators
* TODO: Test each reducer used in your apps combineReducers
  * TODO: test that the validation is working!

####  Documentation  
Write a description of the project in your README.md
