const DisplayCheckboxValue = (element) => {
  const result = [];
  document.getElementById('buttonSave').addEventListener('click', () => {
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
};

export default DisplayCheckboxValue;
