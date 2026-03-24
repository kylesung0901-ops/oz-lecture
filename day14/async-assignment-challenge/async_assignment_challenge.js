const output = document.querySelector("#output");
const btnFetchPosts = document.querySelector("#fetchPosts");
const inputPostIds = document.querySelector("#postIds");

const clearOutput = () => {
  output.innerHTML = `<div id="output"></div>`;
};

const fetchPost = async (postId) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    let post = await response.json();
    return post;
  } catch (error) {
    document.getElementById("output").innerHTML =
      `<p>에러: ${error.message}</p>`;
    return null;
  }
};

const fetchMultiplePosts = async (postIds) => {
  const posts = [];
  for (const postId of postIds) {
    const post = await fetchPost(postId);
    posts.push(post);
    console.log(posts);
  }
  while (posts.length > 0) {
    const post = posts.shift();
    if (post) {
      const postElement = document.createElement("div");
      postElement.classList.add("card", "mb-3");
      postElement.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      `;
      output.appendChild(postElement);
    }
  }
  // posts 배열을 순회하며 post 정보 출력
};

const handleClickSearch = async () => {
  const postIds = inputPostIds.value;
  const postIdsArr = postIds.split(",");
  await fetchMultiplePosts(postIdsArr);
};

btnFetchPosts.addEventListener("click", handleClickSearch);