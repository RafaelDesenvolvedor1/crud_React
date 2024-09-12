import React, { useEffect, useState } from "react";
import { Modal, Text, View, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Alert, Appearance } from "react-native";
import Input from "./Input";

import api from '../../services/api'



export default function ModalForm({ fecharModal, user }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const [usuario,setUsuario]=useState(user)

    useEffect(()=>{
        if(!usuario.id){
            return
        }
        setNome(usuario.nome)
        setEmail(usuario.email)

        console.log(usuario.id)
    },[usuario])

    function handleRegister() {
        Keyboard.dismiss()

        if (nome.length === 0 || email.length === 0) {
            alert('Preencha todos os campos!')
            return
        }

        Alert.alert(
            'Confirme os dados do usuário!',
            `Nome: ${nome}\nEmail: ${email}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd() {
        Keyboard.dismiss()


        await api.post('/users', {
            name: nome,
            email: email
        })


        Alert.alert('Registrado com sucesso',
            'Deseja cadastrar mais usuários?',
            [
                {
                    text: 'Não',
                    onPress: () => fecharModal()

                },
                {
                    text: 'Sim',
                    style: 'cancel'
                }
            ]
        )

        setNome('')
        setEmail('')
    }

    async function handleUppdate() {
        Keyboard.dismiss()

        if(usuario.id){
            await api.put(`/users/${usuario.id}`,{
                
                name:nome,
                email:email
            })

            setUsuario('')
        }


        setNome('')
        setEmail('')

        fecharModal()
    }



    
    return (
        <View className='bg-black/40 flex-1  justify-center p-3'>
            <View className='h-3/6 bg-white rounded-md'>
               {
                usuario.id ? (
                    <Text className='text-2xl font-bold uppercase m-4'>Editar Usuário</Text>
                ):(
                    <Text className='text-2xl font-bold uppercase m-4'>Cadastrar</Text>
                )
               }
               
                

                <View className='flex-1  items-center justify-center'>
                    
                    <Input
                        icon='user'
                        placeholder='Nome...'
                        value={nome}
                        event={(text) => setNome(text)}
                    />
                    <Input
                        icon='envelope'
                        placeholder='Email...'
                        value={email}
                        event={(text) => setEmail(text)}
                    />
                </View>
                <View className='flex-row justify-end mb-5'>
                    <TouchableOpacity
                        className="inline-block  align-middle border-2 border-solid rounded p-1.5  bg-[#6c757d] border-[#6c757d] "
                        onPress={fecharModal}
                    >
                        <Text
                            className='font-bold text-xs text-center text-white'
                        >Cancelar</Text>
                    </TouchableOpacity>

                    {
                        usuario.id ? (
                            <TouchableOpacity
                            onPress={handleUppdate}
                            className="inline-block align-middle border-2 border-solid rounded p-1.5  bg-[#0d6efd] border-[#0d6efd] mx-4"
                        >
                            <Text className='font-bold text-xs text-center text-white'>Salvar</Text>
                        </TouchableOpacity>
                        ):(
                            <TouchableOpacity
                            onPress={handleRegister}
                            className="inline-block align-middle border-2 border-solid rounded p-1.5  bg-[#0d6efd] border-[#0d6efd] mx-4"
                        >
                            <Text className='font-bold text-xs text-center text-white'>Cadastrar</Text>
                        </TouchableOpacity>
                        )
                    }
                   
                </View>
            </View>


        </View>

    )
}