import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {category} = this.props;
    return (
      <div>
        <h3> Name: {category.name} ---- Budget: ${category.budget} </h3>
        <CategoryForm
          category={category}
          onComplete={(data) => {
            data.id = category.id;
            this.props.categoryUpdate(data);
          }}
          buttonText='update'
        />

        <button onClick = {() => this.props.categoryDelete(category)}> Delete </button>
      </div>
    );
  }
}

export default CategoryItem;

// import{
//   categoryUpdate,
//   categoryDelete,
// } from '../../action/category-actions.js';
//
// class CategoryItem extends React.Component {
//   render(){
//     let {category, categoryUpdate, categoryDelete} = this.props;
//     return(
//       <div className='category-item'>
//         <div>
//           <div className='content'>
//             <h3> Name: {category.name} ---- Budget: ${category.budget} </h3>
//           </div>
//           <div>
//             <CategoryForm
//               buttonText='update'
//               category={category}
//               onComplete={categoryUpdate}
//             />
//             <button onClick={() => categoryDelete(category)}>Delete</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
//
// const mapStateToProps = () => ({});
//
//
// const mapDispatchToProps = (dispatch, getState) => {
//   return {
//     categoryUpdate: (category) => dispatch(categoryUpdate(category)),
//     categoryDelete: (category) => dispatch(categoryDelete(category)),
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CategoryItem)
