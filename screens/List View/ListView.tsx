import React, { useState } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BotaoAdicionar, BotoesAcaoItem, ITarefa } from '../../components/Buttons/Buttons'; 
import { Styles } from './ListViewStyle'; 

export default function ListView() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    { id: '1', titulo: 'Estudar React Native', descricao: 'Entender FlatList e Props', concluida: false },
    { id: '2', titulo: 'Fazer o Mockup', descricao: 'Usar o Figma', concluida: true }
  ]);

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.headerTitle}>Minhas Tarefas</Text>

      {/* Container adicionado para limitar a largura e dar margens laterais */}
      <View style={Styles.addButtonContainer}>
        <BotaoAdicionar tarefas={tarefas} setTarefas={setTarefas} />
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        style={Styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={Styles.taskCard}>
            <View style={Styles.taskInfo}>
              <Text style={[Styles.taskTitle, item.concluida && Styles.textCompleted]}>
                {item.titulo}
              </Text>
              <Text style={[Styles.taskDesc, item.concluida && Styles.textCompleted]}>
                {item.descricao}
              </Text>
            </View>
            <BotoesAcaoItem
              id={item.id}
              concluida={item.concluida}
              tarefas={tarefas}
              setTarefas={setTarefas}
            />
          </View>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}