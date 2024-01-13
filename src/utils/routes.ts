const routes = {
  error_404: {
    name: "Error 404",
    path: "/error/404",
    relativePath: "/error/404",
  },
  home: {
    path: "/",
    relativePath: "/",
  },
  buyYourCar: {
    path: "/compra-tu-carro/:typeVehicleName?",
    relativePath: "/compra-tu-carro",
  },
  buyYourCarUsedTrucks: {
    path: "/compra-tu-carro/camionetas-usadas",
    relativePath: "/compra-tu-carro/camionetas-usadas",
  },
  detailedCar: {
    path: "/compra-tu-carro/:typeVehicle/:nameVehicle/:id",
    relativePath: "/compra-tu-carro",
  },
  bookCar: {
    path: "/carro/separar/:id",
    relativePath: "/carro/separar",
  },
  dateForCar: {
    path: "/carro/cita/:action/:carId",
    relativePath: "/carro/cita",
  },
  dateForSell: {
    path: "/:action/cita/",
    relativePath: "/vender/cita",
  },
  sellYourCar: {
    path: "/vende-tu-carro",
    relativePath: "/vende-tu-carro",
  },
  quoteYourCar: {
    path: "/cotizar",
    relativePath: "/cotizar",
  },
  quoteSuccessful: {
    path: "/cotizar/resultado",
    relativePath: "/cotizar/resultado",
  },
  aboutUs: {
    path: "/nuestra-empresa",
    relativePath: "/nuestra-empresa",
  },
  services: {
    path: "/financiacion",
    relativePath: "/financiacion",
  },
  contact: {
    path: "/contacto",
    relativePath: "/contacto",
  },
  procedures: {
    path: "/tramites-de-vehiculos",
    relativePath: "/tramites-de-vehiculos",
  },
  insurance: {
    path: "/seguro-todo-riesgo",
    relativePath: "/seguro-todo-riesgo",
  },
  blog: {
    path: "/blog",
    relativePath: "/blog",
  },
  detailedBlog: {
    path: "/blog/:id",
    relativePath: "/blog",
  },
  signIn: {
    path: "/iniciar-sesion",
    relativePath: "/iniciar-sesion",
  },
  signUp: {
    path: "/registrarse",
    relativePath: "/registrarse",
  },
  sendRecoveryCode: {
    path: "/recuperar-contraseña",
    relativePath: "/recuperar-contraseña",
  },
  updatePasswordRecovery: {
    path: "/recuperar-contraseña/:email",
    relativePath: "/recuperar-contraseña",
  },
  generalPolicies: {
    path: "/politica-de-privacidad",
    relativePath: "/politica-de-privacidad",
  },
  termAndConditionsUser: {
    path: "/terminos-y-condiciones-usuarios",
    relativePath: "/terminos-y-condiciones-usuarios",
  },
  termAndConditionsSalesYesOrYes: {
    path: "/vende-tu-carro-si-o-si",
    relativePath: "/vende-tu-carro-si-o-si",
  },
  termAndConditionsNewUsed6MonthWarrany: {
    path: "/tu-nuevo-usado-en-wcar-con-garantica-de-6-meses",
    relativePath: "/tu-nuevo-usado-en-wcar-con-garantica-de-6-meses",
  },
  termAndConditionsNewUsed6MonthWarrany2: {
    path: "/tu-nuevo-usado-en-wcar-con-garantica-de-6-meses2",
    relativePath: "/tu-nuevo-usado-en-wcar-con-garantica-de-6-meses2",
  },
  termAndConditions: {
    path: "/terminos-y-condiciones-garantia",
    relativePath: "/terminos-y-condiciones-garantia",
  },
  privacyPolicies: {
    path: "/politicas-de-privacidad-para-la-aplicacion-movil-wcar",
    relativePath: "/politicas-de-privacidad-para-la-aplicacion-movil-wcar",
  },
  privacyPolicyMobileApp: {
    path: "/politicas-de-privacidad-para-la-aplicacion-movil-wcar",
    relativePath: "/politicas-de-privacidad-para-la-aplicacion-movil-wcar",
  },
  dataPrivacyNoticeWcarAppUsers: {
    path: "/aviso-de-privacidad-de-datos-para-usuarios-app-wcar",
    relativePath: "/aviso-de-privacidad-de-datos-para-usuarios-app-wcar",
  },
  carForAllPolicies: {
    path: "/auto-para-todos-beneficios-unicos",
    relativePath: "/auto-para-todos-beneficios-unicos",
  },
  saleYourCar: {
    path: "/vende-tu-auto-sin-tanto-rollo",
    relativePath: "/vende-tu-auto-sin-tanto-rollo",
  },
  sellerPolicies: {
    path: "/politicas-vendedor",
    relativePath: "/politicas-vendedor",
  },
  buyerPolicies: {
    path: "/politicas-comprador",
    relativePath: "/politicas-comprador",
  },
  succesfulPayment: {
    path: "/pago-exitoso/:bookingId",
    relativePath: "/pago-exitoso",
  },
  buyOrSell: {
    path: "/compra-o-vende-tu-carro-en-colombia",
    relativePath: "/compra-o-vende-tu-carro-en-colombia",
  },
  dontBuyNewCarBuyAUsed: {
    path: "/no-compres-auto-nuevo-elige-un-usado",
    relativePath: "/no-compres-auto-nuevo-elige-un-usado",
  },
};

export { routes };
