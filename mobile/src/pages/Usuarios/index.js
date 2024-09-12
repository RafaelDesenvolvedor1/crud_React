import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Alert } from "react-native";
import ItemList from "../../components/ItemList";
import { useIsFocused } from '@react-navigation/native'
import api from "../../services/api";

import { MaterialIcons } from '@expo/vector-icons';
import ModalForm from "../../components/ModalForm";



export default function Usuarios() {
    const isFocused = useIsFocused()
    const [userList, setUserList] = useState([])

    const [modalVisible, setModalVisible] = useState(false)

    const [usuario,setUsuario]=useState({
        id:'',
        nome:'',
        email:''
    })

    useEffect(() => {
        async function getUsers() {


            const response = await api.get('/users')
            setUserList(response.data)

        }

        getUsers()
    }, [userList, isFocused])


    function handleDelete(user) {
        Alert.alert(
            'Deletar Usuário',
            'Deseja remover esse usuário',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => remove(user)
                }
            ]
        )
    }

    function closeModal() {
        return setModalVisible(false)
    }


    async function remove(user) {
        try {
            await api.delete(`/users/${user}`)
        } catch (err) {
            console.log(err)
        }
    }

    function handleEdit(userId,userNome, userEmail) {
         setUsuario({
            id:userId,
            nome:userNome,
            email:userEmail

        })

        //console.log(usuario)



        setModalVisible(true)
    }


    return (

        <View className='bg-slate-200 flex-1 items-center pb-4 '>

            <TouchableOpacity

                onPress={() =>{ 
                    setUsuario('')
                    setModalVisible(true)
                }}

                className='self-end py-4 px-5 bg-[#0d6efd] border-[#0d6efd] my-3 mx-5 rounded-md flex-row '>
                <Text className='text-base font-bold text-white mr-2 '>Novo Usuário</Text>
                <MaterialIcons name="add-circle-outline" size={24} color='#fff' />
            </TouchableOpacity>


            <FlatList
                data={userList}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem={
                    ({ item }) =>
                        <ItemList
                            data={item}
                            removerUser={() => handleDelete(item.id)}
                            editarUser={() => handleEdit(item.id, item.name, item.email)}
                        />}
            />

            <Modal
                animationType="fade"
                transparent={modalVisible}
                visible={modalVisible}>
                <ModalForm
                    fecharModal={closeModal}
                    editUser={handleEdit}
                    user={usuario}
                />
            </Modal>


        </View>

    )
}