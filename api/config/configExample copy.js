const config = {
  PORT: 7001, // port number
  ENV: "DEV",
  DEV: {
    DATABASE: {
      URI: "mongodb://127.0.0.1",
      // URI: "mongodb://localhost",
      PORT: 27017,
      DATABASE: "iptandgptc",
    },
    EMAIL: {
      SERVICE: "gmail",
      MAIL_ID: "mail@gmail.com",
      PASS: "password",
      PAS: "", //email api key
    },

    PRIVATEKEY:
      "adfasddfvvlkfdmlv98usvjksjuefjsjdkcnskdncjsdhc9okjdadflkashoashdfiofaiwoeooihfdodfasdfsckljdsafdsdku8r9vjdjf",
    PRIVATEKEYS:
      "adfasf25krtiogadfvvlkfdmlv98usfkinozooznnFFzlsdfajfg4305vjasdfa99jgiadfasdftrod",
  },
  PROD: {
    DATABASE: {
      URI: "",
      PORT: 27017,
      // DATABASE: "",
      // DBlEY:"034942a1-35d2-4226-aa1a-ae9b04addf81"
    },
    EMAIL: {
      SERVICE: "gmail",
      MAIL_ID: "",
      PASS: "",
    },
    PRIVATEKEY:
      "dfvvlkfdmlv98usvjksjuefjsjdkcnskdncjsdhc9okjdsdfafckljsdku8r9vjdjfv",
    PRIVATEKEYS:
      "25krtiogadfvvlkfdmlv98usfkinozooznn9c69okjdscdfakljsdku8r9vjdjfvkjndfkv",
  },
  R: {
    KEY_ID: "",
    KEY_SECRET: "",
  },
};

export default config;
