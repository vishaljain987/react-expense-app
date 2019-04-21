export default (expenses)=>{
    return expenses.reduce((acc, expense)=> {
                return acc+=expense.amount;
                },0)
    };