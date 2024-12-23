
// import { data } from 'react-router-dom';
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/simpleForm/RefForm/RefForm'
// import SimpleForm from './components/simpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  //----------form part
//   const handleSingUpSubmit = data =>{
//     console.log('sing up data', data.email, data.name, data.password)
// }

// const handleUpdateSubmit = data =>{
//   console.log('profile update data' , data)
// }

  return (
    <>
     
      <h1>Form Master</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'SingUp'}
      handleSubmit={handleSingUpSubmit}
      submitBtnText='singUp'>
        <div>
          <h2>Sing Up</h2>
          <p>this is sing up form</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'}
      handleSubmit={handleUpdateSubmit}
       submitBtnText={'update'}>
        <div>
          <h2> Profile Update</h2>
          <p>This is Profile Update Form</p>
        </div>
       </ReusableForm> */}



      
    </>
  )
}

export default App
