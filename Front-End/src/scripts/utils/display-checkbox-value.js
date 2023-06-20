const DisplayCheckboxValue = (element) => {
  const result = [];
  const addButton = document.getElementById('buttonAdd');
  const editButton = document.getElementById('buttonEdit');

  if (addButton) {
    addButton.addEventListener('click', () => {
      const selected = document.querySelectorAll(
        `input[type=checkbox][name=${element}]:checked`
      );

      if (selected.length !== 0) {
        selected.forEach((selectedItem) => {
          result.push(selectedItem.value);
        });
        return result;
      }
      result.push('-');
      return result;
    });
  }
  if (editButton) {
    editButton.addEventListener('click', () => {
      const selected = document.querySelectorAll(
        `input[type=checkbox][name=${element}]:checked`
      );

      if (selected.length !== 0) {
        selected.forEach((selectedItem) => {
          result.push(selectedItem.value);
        });
        return result;
      }
      result.push('-');
      return result;
    });

    return result;
  }
  return result;
};

export default DisplayCheckboxValue;
