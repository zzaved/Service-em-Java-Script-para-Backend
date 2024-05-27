module.exports = {
  friendlyName: 'Contains special character',
  description: 'Check if a string contains at least one special character',
  inputs: {
    password: {
      type: 'string',
      required: true,
      description: 'The password to check for special characters'
    },
  },
  fn: async function (inputs, exits) {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/;

    if (specialCharacters.test(inputs.password)) {
      return exits.success(true);
    } else {
      return exits.success(false);
    }
  }
};