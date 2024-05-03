import { defineRule, configure } from "vee-validate";
import AllRules from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

import moment from 'moment';


configure({
  generateMessage: localize({
    pt_BR,
  }),
  class: {
    valid: "",
    invalid: "error",
  },
});

setLocale('pt_BR');

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

defineRule('required', value => {
  if (!value || !value.length) {
    return false;
  }
  return true;
});

defineRule('checkbox', value => {
  if (value == true) {
    return true;
  } else {
    return 'Aceite obrigatório.';
  }
});

defineRule('file', value => {
  if (value) {
    return true;
  } else {
    return 'Arquivo obrigatório.';
  }
});

defineRule('dateMax', value => {
  let data = new Date(value.split('/').reverse().join('/'));
  if (value.length != 10 || data > new Date() || isNaN(data.getTime())) {
    return 'Insira uma data válida.';
  }
  return true;
});

defineRule('dateValid', value => {
  let re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  return !re.test(String(value)) ? 'Insira uma data válida.' : true;
});

defineRule('18Years', value => {
  const age = moment().diff(value?.split('/').reverse().join('/'), 'years', false);
  if (age < 18) {
    return 'É necessário ter mais de 18 anos.';
  }
  return true;
});

defineRule('passwordValid', value => {
  let re = /(?=.*[A-Z])(?=.*[!#@$%&.*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/;
  return !re.test(String(value)) ? 'A senha deve conter no mínimo: 8 digítos, uma letra maiúscula, uma minúscula, um número e um caracter especial.' : true;
});

defineRule('phoneValid', value => {
  if (value) {
    let phone = value.replace(/[^0-9]+/g, "");
    let re = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?((9\d{4}))-?(\d{4})$/;
    
    return !re.test(String(phone)) ? 'Insira um celular válido.' : true;
  } else {
    return true
  }
});

defineRule('CPF', value => {
  let cpf = value.replace(/[.-]/g, "");
  let numeros, digitos, soma, i, resultado, digitos_iguais;
  digitos_iguais = 1;
  if (cpf.length < 11) return 'Insira um CPF válido.';
  for (i = 0; i < cpf.length - 1; i++)
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  if (!digitos_iguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;
    for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return 'Insira um CPF válido.';
    numeros = cpf.substring(0, 10);
    soma = 0;
    for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return 'Insira um CPF válido.';
    return true;
  } else {
    return 'Insira um CPF válido.';
  }
});

defineRule('CNPJ', value => {
  value = value?.replace(/[^\d]+/g, "");
  if (!value) return 'Insira um CNPJ válido.';

  const validTypes =
    typeof value === "string" ||
    Number.isInteger(value) ||
    Array.isArray(value);

  if (!validTypes) return 'Insira um CNPJ válido.';

  const numbers = value.toString().match(/\d/g).map(Number);

  if (numbers.length !== 14) return 'Insira um CNPJ válido.';

  const items = [...new Set(numbers)];
  if (items.length === 1) return 'Insira um CNPJ válido.';

  const calc = (x) => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
  };

  const digits = numbers.slice(12);

  const digit0 = calc(12);
  if (digit0 !== digits[0]) return 'Insira um CNPJ válido.';

  const digit1 = calc(13);
  if (digit1 === digits[1]) {
    return true
  }
  return 'Insira um CNPJ válido.';
});

export default {};