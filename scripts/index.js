const listItems = document.getElementById('list-items');

const getAllBlogs = async () => {
  try {
    const request = await fetch('http://10.20.40.105:8080/api/v1/blog');

    const data = await request.json();

    if (request.status == 200) {
      const mappedData = data.map(
        (blog) => `
             <li class="list-group-item">
             <a href="/blog.html?id=${blog.id}">
             ${blog.title}
             </a>
             </li>
          `
      );

      listItems.innerHTML = mappedData.join('');
    }
  } catch (e) {
    console.log(e);
    errorAlert('Server error');
  }
};

getAllBlogs();