import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wrapper: {
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
  },
  // Header
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 24,
  },
  logoContainer: {
    height: 48,
    width: 48,
    borderRadius: 9999,
    backgroundColor: '#0A2540',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D1D1F',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#1D1D1F',
  },
  // Form
  formSection: {
    marginBottom: 16,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1D1D1F',
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0A2540',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f6f6f8',
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#1D1D1F',
    borderRadius: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f6f6f8',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#1D1D1F',
  },
  eyeButton: {
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  eyeIcon: {
    fontSize: 20,
    color: '#8A8A8E',
  },
  loginButton: {
    height: 48,
    backgroundColor: '#0A2540',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  // Divider
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8A8A8E',
    marginHorizontal: 16,
  },
  // Social
  socialSection: {
    marginBottom: 16,
  },
  socialButton: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f6f6f8',
    borderRadius: 8,
    marginBottom: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1D1D1F',
  },
  // Signup
  signupPrompt: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 24,
  },
  signupText: {
    fontSize: 16,
    color: '#1D1D1F',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#00897B',
  },
});
