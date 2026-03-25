import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF', // Seu azul de fundo
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%', // Um pouco maior que o da login para dar destaque
    backgroundColor: '#F8FAFC', // Sua cor de card
    borderRadius: 20,
    padding: 20,
    // Sombra para dar profundidade
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 20,
  }
});