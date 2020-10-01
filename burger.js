// Example 1

const crearHamburguesa = (param1, param2, param3, param4) => {
    return {
      lechuga: param1,
      tomate: param2,
      pepinillo: param3,
      carne: param4
    };
  };
  
  const { carne } = crearHamburguesa(true, false, true, 2);
  console.log(carne)