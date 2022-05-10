const ERROR_CODS = {
  EMAIL_NOT_FOUND: 'Пользователь с таки email не найден',
  USER_DISABLED: 'Пользователь бал заблокирован администратором',
  INVALID_PASSWORD: 'Некорректный пароль',
  auth: 'Пожалуйста войдите в систему'
}

export function error(code)
{
  return ERROR_CODS[code] ? ERROR_CODS[code] : 'Неизвестная ошибка'
}