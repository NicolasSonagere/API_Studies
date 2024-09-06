import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import axios from 'axios';

export default function Home() {
    const [id, setID] = useState('')
    const [filmeG, setFilmeG] = useState('')
    const [generoG, setGeneroG] = useState('')
    const [anoG, setAnoG] = useState('')
    const [classifG, setClassifG] = useState('')
    const [idiomaG, setIdiomaG] = useState('')
    const [filme, setFilme] = useState('')
    const [genero, setGenero] = useState('')
    const [ano, setAno] = useState('')
    const [classif, setClassif] = useState('')
    const [idioma, setIdioma] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(
                (banana) => {
                    if (token != null) {
                        console.log('Token Home:', banana)
                        setToken(banana)
                    }
                }
            )
            .catch(
                (error) => {
                    console.error('Erro ao salvar o token', error)
                }
            )
    }, [])

    const capturar = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/filme/' + id, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(response.data)
            setFilmeG(response.data.titulo)
            setGeneroG(response.data.genero)
            setAnoG(response.data.ano)
            setClassifG(response.data.classif)
            setIdiomaG(response.data.idioma)
        } catch {
            console.log(Error)
        }
    }

    const enviar = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/listarfilmes',
                {
                    titulo: filme,
                    genero: genero,
                    ano: ano,
                    classif: classif,
                    idioma: idioma
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log('Dados inseridos com sucesso...')
            setFilme('')
            setGenero('')
            setAno('')
            setClassif('')
            setIdioma('')

        } catch (error) {
            console.log('Erro ao inserir os dados...', error)
        }
    }

    const atualizar = async () => {
        try {
            const response = await axios.put(
                'http://127.0.0.1:8000/api/filme/' + id,
                {
                    titulo: filmeG,
                    genero: generoG,
                    ano: anoG,
                    classif: classifG,
                    idioma: idiomaG
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log('Alterado com sucesso...')
        } catch (error) {
            console.log('Erro ao atualizar', error)
        }
    }

    const apagar = async () => {
        try {
            const response = await axios.delete(
                'http://127.0.0.1:8000/api/filme/' + id, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log('Apagado com sucesso...')
            setFilmeG('')
            setGeneroG('')
            setAnoG('')
            setClassifG('')
            setIdiomaG('')
        } catch (error) {
            console.log('Erro ao atualizar', error)
        }
    }

    const limpar = () => {
        setID('')
        setFilmeG('')
        setGeneroG('')
        setAnoG('')
        setClassifG('')
        setIdiomaG('')
    }

    return (
        <View style={styles.container}>

            <View style={styles.stGet}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text>ID:</Text>
                    <TextInput
                        value={id}
                        onChangeText={(e) => { setID(e) }}
                        style={styles.caixaID}
                    />
                    <Pressable
                        style={styles.btnGe}
                        onPress={capturar}
                    >
                        <Text style={{ fontWeight: 'bold', }}>GET</Text>
                    </Pressable>
                    <Pressable
                        style={styles.btnPu}
                        onPress={atualizar}
                    >
                        <Text style={{ fontWeight: 'bold', }}>PUT</Text>
                    </Pressable>
                    <Pressable
                        style={styles.btnDe}
                        onPress={apagar}
                    >
                        <Text style={{ fontWeight: 'bold', }}>DEL</Text>
                    </Pressable>
                    <Pressable
                        style={styles.btnLim}
                        onPress={limpar}
                    >
                        <Text style={{ fontWeight: 'bold', }}>Limpar</Text>
                    </Pressable>
                </View>
                <Text>Filme</Text>
                <TextInput
                    style={styles.caixaGet}
                    value={filmeG}
                    onChangeText={(e) => setFilmeG(e)}
                />

                <Text>Gênero</Text>
                <TextInput
                    style={styles.caixaGet}
                    value={generoG}
                    onChangeText={(e) => setGeneroG(e)}
                />

                <Text>Ano</Text>
                <TextInput
                    style={styles.caixaGet}
                    value={anoG}
                    onChangeText={(e) => setAnoG(e)}
                />

                <Text>Idioma</Text>
                <TextInput
                    style={styles.caixaGet}
                    value={idiomaG}
                    onChangeText={(e) => setIdiomaG(e)}
                />

                <Text>Classificação</Text>
                <TextInput
                    style={styles.caixaGet}
                    value={classifG}
                    onChangeText={(e) => setClassifG(e)}
                />
            </View>

            <View style={styles.stPost}>
                <Pressable
                    style={styles.btnPo}
                    onPress={enviar}
                >
                    <Text style={{ fontWeight: 'bold', }}>POST</Text>
                </Pressable>
                <Text>Filme</Text>
                <TextInput
                    value={filme}
                    onChangeText={(e) => { setFilme(e) }}
                    style={styles.caixaPost}
                />
                <Text>Gênero</Text>
                <TextInput
                    value={genero}
                    onChangeText={(e) => { setGenero(e) }}
                    style={styles.caixaPost}
                />
                <Text>Ano</Text>
                <TextInput
                    value={ano}
                    onChangeText={(e) => { setAno(e) }}
                    style={styles.caixaPost}
                />
                <Text>Idioma</Text>
                <TextInput
                    value={idioma}
                    onChangeText={(e) => { setIdioma(e) }}
                    style={styles.caixaPost}
                />
                <Text>Classificação</Text>
                <TextInput
                    value={classif}
                    onChangeText={(e) => { setClassif(e) }}
                    style={styles.caixaPost}
                />
            </View>


        </View>
    )
}


