import { useRef } from 'react';

const AddUser = ({ addUserDetail, showValidation }) => {

    const nameInput = useRef(null);
    const creditsInput = useRef(null);

    const addUser = (e) => {
        addUserDetail({ name: nameInput.current.value, credits: creditsInput.current.value });
        if (nameInput.current.value && creditsInput.current.value) {
            nameInput.current.value = '';
            creditsInput.current.value = '';
        }
        e.preventDefault();
    }

    return (
        <>
            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4 grid justify-items-center">
                <input placeholder="Name" className="mb-4 shadow appearance-none border rounded w-half py-2 px-3 text-grey-darker" ref={nameInput} type="text" id="name" required="true" />
                <input placeholder="credits" className="mb-4 shadow appearance-none border rounded w-half py-2 px-3 text-grey-darker" ref={creditsInput} type="number" id="credits" required="true" />
                <br />
                {showValidation &&
                    (
                        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">name and credit are required field</p>
                    )
                }
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={addUser} >Add User</button>
            </form>
        </>
    )
}

export default AddUser;