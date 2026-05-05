import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 24,
    paddingTop: 60, 
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A2530',
    marginBottom: 24,
  },
  list: {
    flex: 1,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  taskInfo: {
    marginBottom: 16, 
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 6,
  },
  taskDesc: {
    fontSize: 15,
    color: '#7F8C8D',
    lineHeight: 22,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#BDC3C7',
  },

  addButtonContainer: {
    marginHorizontal: 10,
    marginBottom: 20,     
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