type Language = 'en' | 'pt'

const generateTranslation = (language: Language) => ({
  'pages': {
    'login': {
      'tabs': {
        'login': { en: 'Login', pt: 'Entrar' }[language],
        'forgotPassword': { en: 'Recover password', pt: 'Recuperar acesso' }[language],
      },
      'form': {
        'username': { en: 'Username', pt: 'Nome de usuário' }[language],
        'password': { en: 'Password', pt: 'Palavra-passe' }[language],
        'submit': { en: 'Login', pt: 'Entrar' }[language],
      },
    },
  },
  'validators': {
    'yup': {
      'noEmptyCharacters': {
        en: 'Spaces are not allowed',
        pt: 'Espaços em branco não são permitidos',
      }[language],
      'stringRequired': {
        en: 'This field is required',
        pt: 'O campo deve estar preenchido',
      }[language],
      'minimumLength': {
        en: '{fieldName} must be at least {minimumLength} characters long',
        pt: '{fieldName} tem de ter no mínimo {minimumLength} carácter(es)',
      }[language],
    },
  },
})

export const resources = {
  en: {
    translation: generateTranslation('en')
  },
  pt: {
    translation: generateTranslation('pt')
  }
}
