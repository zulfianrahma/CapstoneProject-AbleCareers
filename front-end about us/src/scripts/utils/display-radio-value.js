const DisplayRadioValue = (element) => {
  const result = [];
  document.getElementById('buttonSave').addEventListener('click', () => {
    const selected = document.querySelector(
      `input[type=radio][name=${element}]:checked`
    );
    return result.push(selected.value);
  });
  return result;
};

export default DisplayRadioValue;
