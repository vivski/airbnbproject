'use client';
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";

import { FieldValues, SubmitHandler, useForm} from 'react-hook-form'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./modals";
import Heading from "../Heading";
import Input from "../Inputs/input";
import Button from "../Button";

// 1 - função de controle de formulário do usuário
// é o modelo de registro que vai receber nome, email e senha
const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        } 
    } = useForm<FieldValues>({
        defaultValues:{
           name:'',
           email:'',
           password:'' 
        }
    });
// 2 - função on submit; vai lidar com o login;    
// data (dados) é igual aos itens do objeto
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);
      axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log('erro ao fazer login', error)
      })
      .finally(()=> {
        setIsLoading(false);
      })
    }

    const bodyContent = (
      <div
    className="flex flex-col gap-4">
    <Heading
    title="welcome to airbnb" 
    subtitle="create an account"/>  
    <Input 
    id="email"
    label="Email"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    /> 
    {/* ----- */}
    <Input 
    id="name"
    label="Name"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    /> 

<Input 
    id="password"
    label="Password"
    disabled={isLoading}
    register={register}
    errors={errors}
    required
    /> 



     </div>

    );

    const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={()=> {}}/>

       <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={()=> {}}/>

      </div>
    )
// utualizar o Modal.
    return (
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
    )
}

export default RegisterModal;