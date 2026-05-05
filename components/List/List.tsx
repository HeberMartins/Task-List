import React from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { ITarefa } from '../Buttons/Buttons'; 
import { Styles } from './ListStyle';

interface ListProps {
  tarefas: ITarefa[];
  totalTarefas: number;
}

export default function List({ tarefas, totalTarefas }: ListProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Cabeçalho com o contador */}
      <View style={Styles.header}>
        <Text style={Styles.counterText}>
          Total de tarefas: {totalTarefas}
        </Text>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id} 
        style={Styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={Styles.taskCard}>
            <View style={Styles.taskInfo}>
              <Text style={[
                Styles.taskTitle, 
                item.concluida && Styles.textCompleted
              ]}>
                {item.titulo}
              </Text>
              <Text style={[
                Styles.taskDesc, 
                item.concluida && Styles.textCompleted
              ]}>
                {item.descricao}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView> 
  );
}