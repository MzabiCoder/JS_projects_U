const postContainer = document.querySelector(".post-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 3;
let page = 1;

async function fetchPost() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();

  return data;
}

async function showPosts() {
  const posts = await fetchPost();
  console.log(posts);
  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = ` <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">Post ${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>`;
    postContainer.appendChild(postElement);
  });
}
showPosts();
function showLoading() {
  loading.classList.add("show");
  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 9) {
    showLoading();
    console.log(123);
  }
});

filter.addEventListener("input", e => {
  const term = e.target.value.toUpperCase();
  const list = document.querySelectorAll(".post");
  list.forEach(post => {
    const title = post.document
      .querySelector(".post-title")
      .innerText.toUpperCase();
    const body = post.document
      .querySelector(".post-body")
      .innerText.toUpperCase();
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});
