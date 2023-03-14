import { useState } from "react";


interface IForm<T> {
    enabled: boolean;
    data: T
}

const useForm = <T>(initialData: T) => {
    const [form, setForm] = useState<IForm<T>>({ 
        enabled: false, 
        data: initialData
    })

    return { form, setForm }
}

export default useForm