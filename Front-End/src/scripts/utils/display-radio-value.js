const DisplayRadioValue = (element) => {
  const result = [];
  const addButton = document.getElementById('buttonAdd');
  const editButton = document.getElementById('buttonEdit');

  if (addButton) {
    addButton.addEventListener('click', () => {
      const selected = document.querySelector(
        `input[type=radio][name=${element}]:checked`
      );
      return result.push(selected.value);
    });
  }

  if (editButton) {
    editButton.addEventListener('click', () => {
      const selected = document.querySelector(
        `input[type=radio][name=${element}]:checked`
      );
      return result.push(selected.value);
    });
  }
  return result;
};

export default DisplayRadioValue;
