import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA', 
    paddingHorizontal: 20,
    paddingTop: 60, 
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    marginTop: 20,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  taskInfo: {
    marginBottom: 15, 
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  taskDesc: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 4,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#BDC3C7',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa', 
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  }
});