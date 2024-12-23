import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] =useInputState('harun');
    const [email, handleEmailChange] = useInputState('');
    const [password, handlePasswordChange] =useInputState('');

    const handleSubmit = e =>{
        console.log('form Name:', name)
        console.log('form email:' ,email)
        console.log("form password:" , password)

        e.preventDefault()
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text"  name="name"/>
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input value={password} onChange={handlePasswordChange} type="password"  name="password"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;