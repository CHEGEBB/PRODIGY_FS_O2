import Header from '../components/Header';
import "../sass/AddEmployee.scss"
const AddEmployee = () => {
    return (  
      <div className="add-employee-container">
        <div className="header-container-add">
            <Header />
        </div>
        <div className="add-main-container">
            {/* form to add employees */}
            
            <form className='add-employee'>
            <div className="names">
            <div className='form-group'>
        <input type='text' id='firstName' required />
        <label htmlFor='firstName'>First Name</label>
      </div>
      <div className='form-group'>
        <input type='text' id='lastName' required />
        <label htmlFor='lastName'>Last Name</label>
        </div>
      </div>
            </form>
            
        </div>
      </div>
 
    );
}
 
export default AddEmployee;