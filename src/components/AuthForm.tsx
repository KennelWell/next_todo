"use client";

import { useCallback, useState } from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const  [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toogleVariant = useCallback(() => {
        if(variant === 'LOGIN'){
            setVariant('REGISTER');
        }else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER'){

        }

        if(variant === 'LOGIN'){
            //nextAuth SignIN
        }
    }
    return(
        <div>Auth Form will be here</div>
    )
}

export default AuthForm