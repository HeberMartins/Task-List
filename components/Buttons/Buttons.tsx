import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, TextInput, Modal, StyleSheet } from 'react-native';
import { styles } from './ButtonsStyle';


export interface ITarefa {
  id: string;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

interface CommonProps {
  tarefas: ITarefa[];
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export function BotaoAdicionar({ tarefas, setTarefas }: CommonProps) {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');

  const adicionarTarefa = () => {
    if (novoTitulo.trim() === '') return;

    const nova: ITarefa = {
      id: Math.random().toString(),
      titulo: novoTitulo,
      descricao: novaDescricao,
      concluida: false,
    };

    setTarefas([...tarefas, nova]);

    setNovoTitulo('');
    setNovaDescricao('');
    setModalVisivel(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisivel(true)}>
        <Text style={styles.text}>+ Nova Tarefa</Text>
      </TouchableOpacity>

      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalBox}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Adicionar Tarefa</Text>

            <TextInput
              placeholder="Título da tarefa"
              value={novoTitulo}
              onChangeText={setNovoTitulo}
              style={modalStyles.input}
            />
            <TextInput
              placeholder="Descrição"
              value={novaDescricao}
              onChangeText={setNovaDescricao}
              style={modalStyles.input}
            />

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
              <TouchableOpacity style={styles.button} onPress={adicionarTarefa}>
                <Text style={styles.text}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => setModalVisivel(false)}>
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

interface ItemProps extends CommonProps {
  id: string;
  concluida: boolean
}

export function BotoesAcaoItem({ id, concluida, tarefas, setTarefas }: ItemProps) {

  const finalizarTarefa = () => {
    const listaAtualizada = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: true }
      }
      return tarefa;
    });
    setTarefas(listaAtualizada);
  };

  const excluirTarefa = () => {
    const listaFiltrada = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(listaFiltrada);
  };

  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      {!concluida && (
        <TouchableOpacity style={styles.button} onPress={finalizarTarefa}>
          <Text style={styles.text}>Finalizar</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={excluirTarefa}>
        <Text style={styles.text}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  }
});

