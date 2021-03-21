export default function validate(values) {
    let errors = {};
    if (!values.fname) {
      errors.fname = 'First is required';
    } 

    if (!values.lname) {
        errors.lname = 'Last Name is required';
      }
    
      if (!values.email) {
        errors.email = 'Email is required';
      } 

      if (!values.city) {
        errors.city = 'Email is required';
      } 

      if (!values.area) {
        errors.area = 'Email is required';
      } 

      


    // if(!values.customernumber){
    //     errors.customernumber = 'Customer Number is required';
    // }else if (!/^([0-9\b]{11})+$/.test(values.customernumber)) {
    //     errors.customernumber = 'phone number is invalid';
    //   }


    // if(!values.pickupdate){
    //     errors.pickupdate = 'Pick up date  is required';
    // }

    // if(!values.customername){
    //     errors.customername = 'Customer Name  is required';
    // }

    // if(!values.customerarea){
    //     errors.customerarea = 'Customer area  is required';
    // }

    
    // if(!values.alternative_number){
    //     errors.alternative_number = 'Alternative Number is required';
    // }else if (!/^([0-9\b]{11})+$/.test(values.alternative_number)) {
    //     errors.alternative_number = 'phone number is invalid';
    //   }


    //   if(!values.c_address){
    //     errors.c_address = 'Customer Address  is required';
    // }

    // if(!values.payment){
    //     errors.payment = 'Payment option is required  is required';
    // }

    // if(!values.payable_amount){
    //     errors.payable_amount = 'Payment option is required ';
    // }
    
    // if(!values.delivery_type){
    //     errors.delivery_type = 'Delivery Type is required';
    // }

    // if(!values.product_weight){
    //     errors.product_weight = 'Product weight is required';
    // }

    // if(!values.instruction){
    //     errors.instruction = 'Product weight is required';
    // }

    // if(!values.login_name){
    //     errors.login_name = 'User Name is required';
    // }
    if(!values.password){
        errors.password = 'Password is required';
    }
    if(!values.cpassword){
        errors.cpassword = 'Confarm Password is required';
    }
  
    
    
    
       return errors;
};