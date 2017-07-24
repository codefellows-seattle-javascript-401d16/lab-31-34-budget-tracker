import React from 'react';

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      timestamp: '',
      name: '',
      budget: 0,
    };
  }

  render(){
    return(
      <div className='category-form'>
       This is category form
      </div>
    );
  }
}

export default CategoryForm;
