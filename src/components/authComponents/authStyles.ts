import { StyleSheet } from 'react-native';

export const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#F8FAFC', 
    padding: 30,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  inputGap: {
    width: '100%',
    gap: 16, 
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 6,
  },
  inputField: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  sucessIconContainer: {
    marginBottom: 20,
    backgroundColor: '#DCFCE7',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  sucessContent: {
    alignItems: 'center',
    width: '100%',
  },
  linkText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  linkSubtitle: {
    fontFamily: "Inter",
    fontSize: 15,
    color: "#64748B",
  },
});