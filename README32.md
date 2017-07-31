# 401 JS -- class 32 combine reducers

## Learning Objectives
* Students will learn to combine reducers to simplify managment of complex application states

## Readings
* [combine reducers](http://redux.js.org/docs/api/combineReducers.html)

## Overview
#### combineReducers
Reducers are great tools for defining state  and state changes to your applications. However as your application state gets more complex, your reducers become hard to manage. `combineReducers` is a redux method that enables you to create a single reducer from many reducers that define sub states and their interactions. a state returned from a combined reducer is an object where each _sub state reducer_ defines a property on that object.
