import { useEffect, useState } from "react";

const useValidateForm = (name: string, description: string, size: number, quantity: number, price: number) => {
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        const checkValidForm =
            ((name !== "")
                && (description !== "")
                && (size !== 0)
                && (quantity > 0)
                && (price > 0)); 
        setValidForm(checkValidForm);
    }, [name, description, size, quantity, price]);
    return validForm;
}

export default useValidateForm;