const validateExpense = (payload) => {
  if(!payload.id)
    throw new Error('Validation Error: expense id is absent.');
  if(!payload.name)
    throw new Error('Validation Error: expense name is absent.');
  if(typeof payload.amount !== 'number' || Number.isNaN(payload.amount))
    throw new Error('Validation Error: expense amount is absent or invalid.');
  if(!payload.timestamp)
    throw new Error('Validation Error: expense timestamp is absent.');
  console.log('Expense validated.');
};

export default validateExpense;
