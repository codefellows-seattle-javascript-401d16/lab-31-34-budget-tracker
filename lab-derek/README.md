###### Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View  
* Default view  
  * Display the notes content and a delete button
  * Display a delete button that will remove the Note from the application's state
* Edit View
  * Show the NoteUpdateForm and a Cancel Button
  * onNoteUpdateForm Submit or click of the cancel button it should switch back to the default view

#### Test
* Test NoteCreateForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test NoteItem
  * Test the NoteItem's ability defined to remove a note from the App's state
* Test NoteUpdateForm
  * Test the NoteUpdatesForm's ability to update a note in the App's state

####  Documentation  
Write a description of the project in your README.md
