import React, { Component } from "react";
import Main from "../Main";
import axios from "axios";
import CampoInput from "../../CampoInput/CampoInput";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {

        if (this.state.user.name.length == 0 || this.state.user.email.length == 0) {
            alert('Preencha todos os campos!')
            return
        }

        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl



        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(e) {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="">
                <div className="flex lg:flex-row m-2 gap-8 sm:flex-col">
                    <div className="grid col-span-12 md:col-span-6 w-full">
                        <CampoInput
                            label='Nome'
                            name='name'
                            value={this.state.user.name}
                            event={e => this.updateField(e)}
                            placeholder='Digite o nome...'
                        />
                    </div>
                    <div className="grid col-span-12 md:col-span-6 w-full">
                        <CampoInput
                            label='E-mail'
                            name='email'
                            value={this.state.user.email}
                            event={e => this.updateField(e)}
                            placeholder='Digite seu email...'
                        />
                    </div>
                </div>
                <hr />
                <div className="flex flex-row flex-wrap m-2">
                    <div className="flex justify-end w-full">
                        <button
                            className="inline-block font-bold text-xs text-center align-middle border-2 border-solid rounded p-1.5 text-white bg-[#0d6efd] border-[#0d6efd]"
                            onClick={e => this.save(e)}
                        >
                            Salvar
                        </button>
                        <button
                            className="inline-block font-bold text-xs text-center align-middle border-2 border-solid rounded p-1.5 text-white bg-[#6c757d] border-[#6c757d] ml-2"
                            onClick={e => this.clear(e)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="w-full text-center mt-8 ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody >
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button
                            onClick={() => this.load(user)}
                            className="inline-block font-bold text-xs text-center align-middle border-2 border-solid rounded p-1.5">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button
                            onClick={() => this.remove(user)}
                            className="inline-block font-bold text-xs text-center align-middle border-2 border-solid rounded p-1.5 ml-2">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (

            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}