import React, { useState } from 'react';
import { Text, View, FlatList, SafeAreaView, Image } from 'react-native'; // Importe Image aqui
import { StatusBar } from 'expo-status-bar';
import { BotaoAdicionar, BotoesAcaoItem, ITarefa } from '../../components/Buttons/Buttons'; 
import { Styles } from './ListViewStyle'; 
import RotomIcon2 from '../../assets/RotomIcon2.png';

export default function ListView() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([
    { id: '1', titulo: 'Estudar React Native', descricao: 'Entender FlatList e Props', concluida: false },
    { id: '2', titulo: 'Fazer o Mockup', descricao: 'Usar o Figma', concluida: true }
  ]);

  const totalTarefas = tarefas.length;

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          {/* O seu ícone exportado */}
          <Image 
            source={RotomIcon2} 
            style={{ width: 50, height: 50, resizeMode: 'contain' }} 
          />
          
          <View>
            <Text style={Styles.headerTitle}>Minhas Tarefas</Text>
            <Text style={Styles.counterText}>
              Você tem {totalTarefas} {totalTarefas === 1 ? 'tarefa' : 'tarefas'}
            </Text>
          </View>
        </View>
      </View>

      <View style={Styles.addButtonContainer}>
        <BotaoAdicionar tarefas={tarefas} setTarefas={setTarefas} />
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        style={Styles.list}
        contentContainerStyle={{ paddingBottom: 20 }} 
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