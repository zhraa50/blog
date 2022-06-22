const title = document.getElementById('title');
const body = document.getElementById('body');
const addButton = document.getElementById('add-blog');

addButton.addEventListener('click', async () => {
  try {
    const titleValue = title.value;
    const bodyValue = body.value;

    if (titleValue === '' || bodyValue === '') {
      alert('Please fill in all fields');
      return;
    }

    const jsonObject = JSON.stringify({ title: titleValue, body: bodyValue });

    const request = await fetch('http://10.20.40.105:8080/api/v1/blog', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: jsonObject,
    });

    const data = await request.json();

    if (request.status == 201) {
      await successAlert(data.message);
      location.href = '/';
    } else {
      errorAlert(data.message);
    }
  } catch (e) {
    errorAlert('Server error !');
  }
});