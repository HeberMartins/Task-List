import React, { useState } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ITarefa } from '../Buttons/Buttons'; 
import { Styles } from './ListStyle';

interface ListProps {
  tarefas: ITarefa[];
}

export default function List({ tarefas }: ListProps) {
  return (
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
          
        </View>
      )}
    />
  );
}