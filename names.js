// Example 2

const ingresarNombres = (name1, name2, name3, name4, name5) => {
    const names = [name1, name2, name3, name4, name5];
    return names.sort();
  };
  
  const [name1, name2] = ingresarNombres(
    "javi",
    "nano",
    "carlos",
    "rocio",
    "martha"
  );
  console.log(name2);